/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
 /* Your site config here */
 siteMetadata: {
  title: `My First Gatsby Site with GraphQL`,
  description: `My First Front End Site`,
},
plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: ``,
      accessToken: ``,
    },
  },
  `gatsby-plugin-sass`
],
}