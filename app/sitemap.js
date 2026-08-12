export default function sitemap() {
  const base = 'https://nbrsouloftheseason.com'

  return [
    {
      url: base + '/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: base + '/sector-46-gurgaon',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
