const BASE_URL = "https://ebuka.dev";

// Only list pages with real, indexable content. /blog and /lounge are
// placeholders (noindex) and are intentionally excluded until they ship.
export default function sitemap() {
  const now = new Date();
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
