export function paletteToQuery(palette) {
  // compact encoding: a=hex,b=hex...
  return Object.entries(palette).map(([k,v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join("&");
}

export function queryToPalette(queryString) {
  const params = new URLSearchParams(queryString);
  const palette = {};
  for (const [k,v] of params.entries()) {
    palette[k] = v;
  }
  return palette;
}
