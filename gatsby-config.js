/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TARASQ`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: "3H5UWVavPYiSEk5BIh9D2hq2Z2j-D0J3GGAoQJ2rEFU",
        spaceId: "p8pv36gwnog9"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Nerko One`,
            file: `https://fonts.googleapis.com/css2?family=Nerko+One&display=swap`,
          },
          {
            name: `Oi`,
            file: `https://fonts.googleapis.com/css2?family=Oi&display=swap`,
          },
          {
            name: `Salsa`,
            file: `https://fonts.googleapis.com/css2?family=Salsa&display=swap`,
          },
        ],
      },
    },
  ]
};