export const getSearchUrl = (query: string, search_uuid: string) => {
  const prefix =
    process.env.NODE_ENV === "production" ? "/search.html" : "/search";
  return `${prefix}?q=${encodeURIComponent(query)}&rid=${search_uuid}`;
};

export const getHtmlUrl = (path: string) => {
  return process.env.NODE_ENV === "production"
    ? path === "/"
      ? "/index.html"
      : `${path}.html`
    : `${path}`;
};
