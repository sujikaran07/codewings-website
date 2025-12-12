/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.codewings.tech', // Your live domain
    generateRobotsTxt: true, // Generate robots.txt file
    exclude: ['/studio/*', '/studio'], // Hide backend/admin pages from Google
}
