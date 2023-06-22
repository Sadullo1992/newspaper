/** @type {import('next-sitemap').IConfig} */

const siteUrl = 'https://www.bobotogtongi.uz';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`, // <==== Add here
      `${siteUrl}/server-sitemap.xml`, // <==== Add here
    ],
  },
};
