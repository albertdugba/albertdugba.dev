export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit?: string;
  /** Tiny blurred preview (URL or data URI) shown while the full image loads. */
  preview?: string;
};

/**
 * Placeholder photos from Unsplash (served via picsum.photos). Shown when
 * Cloudinary isn't configured or the folder is empty (see get-photos.ts).
 */
export const PLACEHOLDER_PHOTOS: Photo[] = [
  { src: "https://picsum.photos/id/10/1500/1000", width: 1500, height: 1000, alt: "Photograph by Paul Jarvis", credit: "Paul Jarvis" },
  { src: "https://picsum.photos/id/28/1000/1500", width: 1000, height: 1500, alt: "Photograph by Jerry Adney", credit: "Jerry Adney" },
  { src: "https://picsum.photos/id/57/1200/1200", width: 1200, height: 1200, alt: "Photograph by Nicholas Swanson", credit: "Nicholas Swanson" },
  { src: "https://picsum.photos/id/37/1000/1250", width: 1000, height: 1250, alt: "Photograph by Austin Neill", credit: "Austin Neill" },
  { src: "https://picsum.photos/id/42/1600/900", width: 1600, height: 900, alt: "Photograph by Luke Chesser", credit: "Luke Chesser" },
  { src: "https://picsum.photos/id/64/1000/1250", width: 1000, height: 1250, alt: "Photograph by Alexander Shustov", credit: "Alexander Shustov" },
  { src: "https://picsum.photos/id/110/1500/1000", width: 1500, height: 1000, alt: "Photograph by Kenneth Thewissen", credit: "Kenneth Thewissen" },
  { src: "https://picsum.photos/id/119/1000/1500", width: 1000, height: 1500, alt: "Photograph by Nadir Balcikli", credit: "Nadir Balcikli" },
  { src: "https://picsum.photos/id/129/1200/1200", width: 1200, height: 1200, alt: "Photograph by Charlie Foster", credit: "Charlie Foster" },
  { src: "https://picsum.photos/id/593/1500/1000", width: 1500, height: 1000, alt: "Photograph by Paula Borowska", credit: "Paula Borowska" },
  { src: "https://picsum.photos/id/137/1000/1500", width: 1000, height: 1500, alt: "Photograph by Vladimir Kramer", credit: "Vladimir Kramer" },
  { src: "https://picsum.photos/id/155/1500/1000", width: 1500, height: 1000, alt: "Photograph by Christopher Sardegna", credit: "Christopher Sardegna" },
  { src: "https://picsum.photos/id/177/1000/1250", width: 1000, height: 1250, alt: "Photograph by Danka & Peter", credit: "Danka & Peter" },
  { src: "https://picsum.photos/id/188/1600/900", width: 1600, height: 900, alt: "Photograph by Wojtek Witkowski", credit: "Wojtek Witkowski" },
  { src: "https://picsum.photos/id/683/1200/1200", width: 1200, height: 1200, alt: "Photograph by ahmadreza sajadi", credit: "ahmadreza sajadi" },
  { src: "https://picsum.photos/id/200/1500/1000", width: 1500, height: 1000, alt: "Photograph by Elias Carlsson", credit: "Elias Carlsson" },
  { src: "https://picsum.photos/id/219/1000/1500", width: 1000, height: 1500, alt: "Photograph by Martyn Seddon", credit: "Martyn Seddon" },
  { src: "https://picsum.photos/id/237/1000/1250", width: 1000, height: 1250, alt: "Photograph by André Spieker", credit: "André Spieker" },
  { src: "https://picsum.photos/id/250/1500/1000", width: 1500, height: 1000, alt: "Photograph by Nicola Perantoni", credit: "Nicola Perantoni" },
  { src: "https://picsum.photos/id/274/1200/1200", width: 1200, height: 1200, alt: "Photograph by Wojtek Witkowski", credit: "Wojtek Witkowski" },
  { src: "https://picsum.photos/id/307/1000/1250", width: 1000, height: 1250, alt: "Photograph by Keith Misner", credit: "Keith Misner" },
  { src: "https://picsum.photos/id/318/1200/1200", width: 1200, height: 1200, alt: "Photograph by Louis Pellissier", credit: "Louis Pellissier" },
  { src: "https://picsum.photos/id/325/1500/1000", width: 1500, height: 1000, alt: "Photograph by Dominik Martin", credit: "Dominik Martin" },
  { src: "https://picsum.photos/id/342/1000/1500", width: 1000, height: 1500, alt: "Photograph by Steven Lewis", credit: "Steven Lewis" },
  { src: "https://picsum.photos/id/366/1500/1000", width: 1500, height: 1000, alt: "Photograph by Rayi Christian Wicaksono", credit: "Rayi Christian Wicaksono" },
  { src: "https://picsum.photos/id/433/1600/900", width: 1600, height: 900, alt: "Photograph by Thomas Lefebvre", credit: "Thomas Lefebvre" },
  { src: "https://picsum.photos/id/452/1000/1250", width: 1000, height: 1250, alt: "Photograph by Desi Mendoza", credit: "Desi Mendoza" },
  { src: "https://picsum.photos/id/511/1200/1200", width: 1200, height: 1200, alt: "Photograph by Jeff Sheldon", credit: "Jeff Sheldon" },
  { src: "https://picsum.photos/id/616/1000/1500", width: 1000, height: 1500, alt: "Photograph by Sylwia Bartyzel", credit: "Sylwia Bartyzel" },
  { src: "https://picsum.photos/id/660/1500/1000", width: 1500, height: 1000, alt: "Photograph by Morgan Sessions", credit: "Morgan Sessions" },
];

const PICSUM = /^https:\/\/picsum\.photos\/id\/(\d+)\/(\d+)\/(\d+)/;

/**
 * next/image loader for picsum URLs: asks picsum's CDN for a WebP at exactly
 * the width the browser picked, skipping our own image optimizer round trip.
 * Only used for picsum sources (see isPicsum); your own photos use the default.
 */
export function picsumLoader({ src, width }: { src: string; width: number }) {
  const match = src.match(PICSUM);
  if (!match) return src;
  const [, id, w, h] = match;
  // Never ask for more than the photo's declared size: on 2x screens the
  // lightbox would otherwise request 3840px-wide images.
  const target = Math.min(width, Number(w));
  const height = Math.round((target * Number(h)) / Number(w));
  return `https://picsum.photos/id/${id}/${target}/${height}.webp`;
}

export const isPicsum = (src: string) => PICSUM.test(src);

const CLOUDINARY_UPLOAD = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/;

/**
 * next/image loader for Cloudinary delivery URLs: inserts a transformation so
 * Cloudinary resizes to the requested width (never upscaling) and serves the
 * best format and quality for the browser.
 */
export function cloudinaryLoader({ src, width }: { src: string; width: number }) {
  const match = src.match(CLOUDINARY_UPLOAD);
  if (!match) return src;
  const [, base, rest] = match;
  return `${base}f_auto,q_auto,c_limit,w_${width}/${rest}`;
}

export const isCloudinary = (src: string) => CLOUDINARY_UPLOAD.test(src);
