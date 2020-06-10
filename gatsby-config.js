const path = require('path')

module.exports = {
  siteMetadata: {
    name: `BIPOCIT`,
    title: `BIPOCIT - Black, Indigenous, && People of Color in Tech`,
    description: `Centering Black, Indigenous, && People of Color in Tech.`,
    author: `@bipocit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bipocit`,
        short_name: `bipocit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-csp`,
    // the above includes the basic policy. read more here: https://www.gatsbyjs.org/packages/gatsby-plugin-csp/
    // if you want to customize the security policy
    `gatsby-plugin-no-javascript`,
    {
      resolve: `gatsby-plugin-no-javascript-utils`,
      options: {
        removeGatsbyAnnouncer: false,
      },
    },
  ],
}
