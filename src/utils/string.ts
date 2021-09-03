export function convertParamsToURLString(
  url: string,
  params: Record<string, unknown>,
) {
  if (Object.keys(params).length === 0) return url;

  const parameters = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) parameters.set(key, value as string);
  });

  return `${url}?${parameters.toString()}`;
}

export function extractIdFromUrl(url: string | unknown): number {
  if (typeof url === 'string') {
    const matches = url.match(/\/([\d]+)\//);

    if (matches !== null) {
      return parseInt(matches[1]);
    }
  }

  return 0;
}

export function flatDeep(array: string[], d = 1): string[] {
  return d > 0
    ? array.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        [] as string[],
      )
    : array.slice();
}

export function removeDuplicates(array: string[]) {
  return Array.from(new Set(array));
}
