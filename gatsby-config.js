/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
 /* Your site config here */
 plugins: ['gatsby-plugin-sass'],
 siteMetadata: {
  title: `My First Gatsby Site with GraphQL`,
  description: `My First Front End Site`,
},
plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `e7gsyqd8m8w4`,
      accessToken: `LE5zipTfNYlg5vUOs3OF3Fifr7d2jxgUyUiqMJtRRic`,
    },
  },
],
}