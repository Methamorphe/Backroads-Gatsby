require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Backroads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "@Methamorphe",
    twitterUsername: "@JohannRaoul",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://methamorphe-gatsby.netlify.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
