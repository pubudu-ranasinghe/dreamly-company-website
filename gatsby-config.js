const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Dreamly (ドリームリー)`,
    description: `Dreamly (ドリームリー)は2019年1月11日に設立された株式会社です。ITコンサルティング、アプリケーション、その他ウェブシステムの開発を行っています`,
    author: `@yoshi`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, "assets", `images`),
      },
    },
  ],
}
