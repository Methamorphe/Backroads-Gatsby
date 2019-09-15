module.exports = {
  siteMetadata: {
    title: "Backroads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: "@Methamorphe",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
