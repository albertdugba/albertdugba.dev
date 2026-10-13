import { PLACEHOLDER_PHOTOS, type Photo } from "./photos";

/** Cache tag cleared by the Cloudinary webhook (src/app/api/cloudinary/route.ts). */
export const PHOTOS_TAG = "photos";
/** Backstop refresh, in seconds, in case a webhook is missed. */
const REFRESH = 600;

type Resource = {
  secure_url: string;
  width: number;
  height: number;
  created_at: string;
  context?: { custom?: Record<string, string> };
};

/**
 * Reads every image in the Cloudinary folder (newest first). Cached and tagged
 * in production so uploads appear via the webhook or within REFRESH seconds;
 * always fresh in development. Falls back to placeholders when Cloudinary
 * isn't configured, errors, or the folder is empty.
 */
export async function getPhotos(): Promise<Photo[]> {
  const {
    CLOUDINARY_CLOUD_NAME: cloud,
    CLOUDINARY_API_KEY: key,
    CLOUDINARY_API_SECRET: secret,
    CLOUDINARY_PHOTOS_FOLDER: folder = "photography",
  } = process.env;

  if (!cloud || !key || !secret) return PLACEHOLDER_PHOTOS;

  const cache: RequestInit =
    process.env.NODE_ENV === "development"
      ? { cache: "no-store" }
      : { next: { revalidate: REFRESH, tags: [PHOTOS_TAG] } };

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/resources/search`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${key}:${secret}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      // Matches dynamic folders (newer accounts) and legacy fixed folders.
      body: JSON.stringify({
        expression: `(asset_folder="${folder}" OR folder="${folder}") AND resource_type:image`,
        sort_by: [{ created_at: "desc" }],
        with_field: ["context"],
        max_results: 500,
      }),
      ...cache,
    });

    if (!res.ok) {
      console.error(`Cloudinary search failed (${res.status}): ${await res.text()}`);
      return PLACEHOLDER_PHOTOS;
    }

    const { resources } = (await res.json()) as { resources: Resource[] };
    if (!resources.length) return PLACEHOLDER_PHOTOS;

    return resources.map((r) => {
      const context = r.context?.custom ?? {};
      return {
        src: r.secure_url,
        width: r.width,
        height: r.height,
        alt: context.alt || context.caption || "Photograph by Albert Dugba",
        preview: r.secure_url.replace("/image/upload/", "/image/upload/f_auto,q_30,w_24/"),
      };
    });
  } catch (error) {
    console.error("Couldn't load photos from Cloudinary", error);
    return PLACEHOLDER_PHOTOS;
  }
}
