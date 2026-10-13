import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import { PhotoGallery } from "~/components/photos/photo-gallery";
import { getPhotos } from "~/components/photos/get-photos";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography | Albert Dugba",
  description:
    "Photography by Albert Dugba: places, light, and quiet observations.",
};

export default async function PhotosPage() {
  const photos = await getPhotos();

  return (
    <div className='mx-auto w-full max-w-6xl pb-24 pt-20 sm:pt-28'>
      <header className='mb-14 max-w-[40rem] sm:mb-16'>
        <h1
          className={`${overpass.className} text-[clamp(2.75rem,6vw,4.5rem)] leading-none tracking-[-0.03em] text-secondary`}
        >
          Photos
        </h1>
        <p className='mt-5 text-lg leading-8 text-article-color'>
          Away from the editor, I use a camera to slow down and pay attention:
          places, light, and the quiet moments in between.
        </p>
      </header>

      <PhotoGallery photos={photos} />
    </div>
  );
}
