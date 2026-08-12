export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      // disallow: ['/vin', '/sector-46-gurgaon'],
    },
    sitemap: 'https://nbrsouloftheseason.co.in/sitemap.xml',
  }
}
