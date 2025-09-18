export default function sitemap() {
  const now = new Date();

  return [
    {
      url: 'https://www.cervision.az/az',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.cervision.az/en',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.cervision.az/ru',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
