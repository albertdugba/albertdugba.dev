"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  cloudinaryLoader,
  isCloudinary,
  isPicsum,
  picsumLoader,
  type Photo,
} from "./photos";

const EASE = [0.22, 1, 0.36, 1] as const;
/** Grid tile `sizes`; the lightbox reuses it to show the already-cached image instantly. */
const TILE_SIZES = "(min-width: 1024px) 22rem, 50vw";

const loaderFor = (photo: Photo) =>
  isCloudinary(photo.src) ? cloudinaryLoader : isPicsum(photo.src) ? picsumLoader : undefined;
const previewFor = (photo: Photo) =>
  photo.preview ??
  (isPicsum(photo.src) ? picsumLoader({ src: photo.src, width: 32 }) : undefined);
const layoutIdFor = (photo: Photo) => `photo-${photo.src}`;

/** 3 columns, or 2 when the gallery is narrower than 720px. */
function useColumnCount(ref: React.RefObject<HTMLElement>) {
  const [columns, setColumns] = useState(3);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setColumns(el.clientWidth >= 720 ? 3 : 2);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return columns;
}

/**
 * Masonry: each photo (in order, newest first) goes into whichever column is
 * currently shortest. Columns share a width, so a photo's height is just its
 * aspect ratio and no measuring is needed. Every photo keeps its full shape.
 */
function toColumns(photos: Photo[], count: number) {
  const columns = Array.from({ length: count }, () => ({
    height: 0,
    items: [] as { photo: Photo; index: number }[],
  }));
  photos.forEach((photo, index) => {
    const shortest = columns.reduce((min, column, i) =>
      column.height < columns[min].height ? i : min, 0);
    columns[shortest].items.push({ photo, index });
    columns[shortest].height += photo.height / photo.width;
  });
  return columns;
}

/**
 * Masonry gallery. Tiles rise in as they scroll into view; opening one morphs
 * it into the lightbox, where ← / → crossfade and Esc closes.
 * All motion respects prefers-reduced-motion.
 */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [originIndex, setOriginIndex] = useState<number | null>(null);
  // The tile animating back from the lightbox is raised above the overlay
  // until it lands, otherwise the shrink happens hidden underneath it.
  const [returningIndex, setReturningIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (returningIndex === null) return;
    const timer = window.setTimeout(() => setReturningIndex(null), 900);
    return () => window.clearTimeout(timer);
  }, [returningIndex]);
  const columnCount = useColumnCount(gridRef);
  const columns = toColumns(photos, columnCount);

  return (
    <MotionConfig reducedMotion='user'>
      <div
        ref={gridRef}
        className='grid items-start gap-3 sm:gap-5'
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
      >
        {columns.map((column, c) => (
          <div key={c} className='flex flex-col gap-3 sm:gap-5'>
            {column.items.map(({ photo, index }, row) => (
              <PhotoTile
                key={photo.src}
                photo={photo}
                delay={c * 0.08}
                priority={row === 0}
                elevated={returningIndex === index}
                onReturned={() => setReturningIndex((i) => (i === index ? null : i))}
                onOpen={() => {
                  setOriginIndex(index);
                  setOpenIndex(index);
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            key='lightbox'
            photos={photos}
            index={openIndex}
            originIndex={originIndex}
            onChange={setOpenIndex}
            onClose={() => {
              if (openIndex === originIndex) setReturningIndex(originIndex);
              setOpenIndex(null);
            }}
          />
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function PhotoTile({
  photo,
  delay,
  priority,
  elevated,
  onReturned,
  onOpen,
}: {
  photo: Photo;
  delay: number;
  priority: boolean;
  elevated: boolean;
  onReturned: () => void;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const preview = previewFor(photo);

  return (
    <motion.button
      type='button'
      onClick={onOpen}
      aria-label={`Open ${photo.alt}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className='group relative block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'
      style={{ zIndex: elevated ? 60 : undefined }}
    >
      <motion.div
        layoutId={layoutIdFor(photo)}
        onLayoutAnimationComplete={onReturned}
        className='relative overflow-hidden bg-lightest-gray'
        style={{ aspectRatio: `${photo.width} / ${photo.height}`, borderRadius: 8 }}
      >
        {preview && (
          <div
            aria-hidden='true'
            className='absolute inset-0 scale-110 bg-cover bg-center blur-xl transition-opacity duration-700'
            style={{ backgroundImage: `url(${preview})`, opacity: loaded ? 0 : 1 }}
          />
        )}
        <Image
          src={photo.src}
          loader={loaderFor(photo)}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={TILE_SIZES}
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </motion.div>
    </motion.button>
  );
}

function Lightbox({
  photos,
  index,
  originIndex,
  onChange,
  onClose,
}: {
  photos: Photo[];
  index: number;
  originIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const photo = photos[index];
  const stageRef = useRef<HTMLDivElement>(null);
  const stage = useElementSize(stageRef);
  const fitted = fit(photo, stage);
  const isOrigin = index === originIndex;

  const prev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, onChange, photos.length],
  );
  const next = useCallback(
    () => onChange((index + 1) % photos.length),
    [index, onChange, photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const neighbours = [
    photos[(index + 1) % photos.length],
    photos[(index - 1 + photos.length) % photos.length],
  ];

  return (
    <motion.div
      role='dialog'
      aria-modal='true'
      aria-label={photo.alt}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className='fixed inset-0 z-50 flex flex-col bg-[rgba(10,10,10,0.94)] text-white'
    >
      <div className='flex items-center justify-between px-5 py-4 font-mono text-xs'>
        <span className='text-[var(--lemonAccent)]'>
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </span>
        <button
          type='button'
          onClick={onClose}
          className='rounded-full px-3 py-1.5 text-white opacity-70 transition-opacity hover:opacity-100'
        >
          Close
        </button>
      </div>

      <div className='relative min-h-0 flex-1'>
        <div ref={stageRef} className='absolute inset-x-4 inset-y-0 grid place-items-center sm:inset-x-20'>
          {fitted && (
            <AnimatePresence initial={false}>
              <motion.div
                key={photo.src}
                layoutId={isOrigin ? layoutIdFor(photo) : undefined}
                initial={isOrigin ? undefined : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                // The origin photo hands off to its grid tile on close; fading
                // it out as well makes it vanish mid-flight.
                exit={isOrigin ? undefined : { opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                onClick={(e) => e.stopPropagation()}
                className='relative overflow-hidden bg-lightest-gray [grid-area:1/1]'
                style={{ width: fitted.width, height: fitted.height, borderRadius: 6 }}
              >
                <LightboxImage photo={photo} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        <LightboxArrow direction='prev' onClick={prev} />
        <LightboxArrow direction='next' onClick={next} />
      </div>

      <p className='px-5 py-4 text-center text-xs opacity-60'>
        {photo.credit ? `Photo by ${photo.credit} on Unsplash` : photo.alt}
      </p>

      {/* Warm the cache for the neighbours so ← / → feel instant. */}
      <div aria-hidden='true' className='pointer-events-none fixed size-px overflow-hidden opacity-0'>
        {neighbours.flatMap((neighbour) =>
          [TILE_SIZES, "90vw"].map((sizes) => (
            <Image
              key={`${neighbour.src}-${sizes}`}
              src={neighbour.src}
              loader={loaderFor(neighbour)}
              alt=''
              width={neighbour.width}
              height={neighbour.height}
              sizes={sizes}
              loading='eager'
            />
          )),
        )}
      </div>
    </motion.div>
  );
}

/**
 * Two layers: the grid-sized image (already in the browser cache, so it's
 * there from the first frame of the open animation), then the full-size
 * image, which fades in over it once loaded. No blur layer here: animating a
 * blurred element while it scales is expensive and drops frames.
 */
function LightboxImage({ photo }: { photo: Photo }) {
  const [loaded, setLoaded] = useState(false);
  const loader = loaderFor(photo);

  return (
    <>
      <Image
        src={photo.src}
        loader={loader}
        alt=''
        aria-hidden='true'
        fill
        sizes={TILE_SIZES}
        className='object-cover'
      />
      <Image
        src={photo.src}
        loader={loader}
        alt={photo.alt}
        fill
        sizes='90vw'
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}

function LightboxArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      aria-label={direction === "prev" ? "Previous photo" : "Next photo"}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(250,251,252,0.08)] text-lg text-white transition-colors hover:bg-[rgba(250,251,252,0.16)] sm:flex ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
    >
      {direction === "prev" ? "←" : "→"}
    </button>
  );
}

type Size = { width: number; height: number };

/** Measures before first paint so the open animation starts at the right size. */
function useElementSize(ref: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState<Size | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setSize({ width: el.clientWidth, height: el.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

/** Largest box with the photo's aspect ratio that fits inside the stage. */
function fit(photo: Photo, stage: Size | null): Size | null {
  if (!stage || !stage.width || !stage.height) return null;
  const scale = Math.min(stage.width / photo.width, stage.height / photo.height);
  return {
    width: Math.round(photo.width * scale),
    height: Math.round(photo.height * scale),
  };
}
