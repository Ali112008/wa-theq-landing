/**
 * Base path configuration for static hosting.
 *
 * On Hostinger the site is served from wa-theq.com/landing-page/
 * so all absolute paths (img src, a href) must be prefixed with /landing-page.
 *
 * On Vercel the site is served from the root, so the prefix is empty.
 *
 * Set NEXT_PUBLIC_BASE_PATH env var during build to override.
 * For Hostinger builds: NEXT_PUBLIC_BASE_PATH=/landing-page
 * For Vercel builds: (leave unset, defaults to empty string)
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefix a path with the base path.
 * Usage: <img src={withBase("/images/logo.webp")} />
 *        <a href={withBase("/en")}>
 */
export function withBase(path: string): string {
  if (!path.startsWith("/")) {
    return path; // Don't modify relative paths
  }
  return `${BASE_PATH}${path}`;
}
