/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: ` portfolio website showcasing my web development projects`,
<<<<<<< HEAD
    author: ` Abir Chakroun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
=======
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
<<<<<<< HEAD
  }},
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path:
      `./src/data/`}
    }
  ]
  
=======
      },
    },
  ],
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
}
