export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/sector-46-gurgaon'],
      disallow: ['/vin', '/sector-46-gurgaon'],
    },
    sitemap: 'https://nbrsouloftheseason.co.in/sitemap.xml',
  }
}
