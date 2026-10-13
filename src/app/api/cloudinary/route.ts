import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath, revalidateTag } from "next/cache";
import { PHOTOS_TAG } from "~/components/photos/get-photos";

/** Notifications older than this are rejected (replay protection). */
const MAX_AGE_SECONDS = 2 * 60 * 60;
/** Cloudinary's search index lags uploads by a moment; give it time to catch up. */
const INDEX_DELAY_MS = 4000;

function matches(expected: string, signature: string) {
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Cloudinary upload/delete notification webhook. Set it under
 * Settings → Upload → Notification URL as https://<your-domain>/api/cloudinary.
 * Verifies Cloudinary's signature, then refreshes the photos page.
 */
export async function POST(request: Request) {
  const secret = process.env.CLOUDINARY_API_SECRET;
  const timestamp = request.headers.get("x-cld-timestamp");
  const signature = request.headers.get("x-cld-signature");
  const body = await request.text();

  if (!secret || !timestamp || !signature) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > MAX_AGE_SECONDS) {
    return Response.json({ ok: false, error: "stale" }, { status: 401 });
  }

  // Cloudinary signs with SHA-1 or SHA-256 depending on the account setting.
  const payload = body + timestamp + secret;
  const valid = ["sha1", "sha256"].some((algorithm) =>
    matches(createHash(algorithm).update(payload).digest("hex"), signature),
  );
  if (!valid) {
    return Response.json({ ok: false }, { status: 401 });
  }

  await new Promise((resolve) => setTimeout(resolve, INDEX_DELAY_MS));
  revalidateTag(PHOTOS_TAG);
  revalidatePath("/photos");

  return Response.json({ ok: true });
}
