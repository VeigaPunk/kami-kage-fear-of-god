/** Base-aware public asset path (works on Vercel `/` and GitHub Pages project base). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}

export function media(file: string): string {
  return asset(`media/${file.replace(/^\/?media\//, "")}`);
}
