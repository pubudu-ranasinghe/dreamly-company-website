/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Dreamly (ドリームリー)`,
    description: `Dreamly (ドリームリー)は2019年1月11日に設立された株式会社です。ITコンサルティング、アプリケーション、その他ウェブシステムの開発を行っています`,
    author: `@yoshi`,
  },
  plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-react-helmet`],
}
