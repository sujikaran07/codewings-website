import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Hide API routes from crawlers
        },
        sitemap: 'https://www.codewings.tech/sitemap.xml',
    }
}
