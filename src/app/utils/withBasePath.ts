const normalizedBase =
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBasePath(path: string) {
  if (path.startsWith("/")) {
    return `${normalizedBase}${path}`;
  }

  return `${normalizedBase}/${path}`;
}
