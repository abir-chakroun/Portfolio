/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: ` portfolio website showcasing my web development projects`,
    author: ` Abir Chakroun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
  }},
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path:
      `./src/data/`}
    }
  ]
  
}
