import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../../../styles/theme"
import "../../../css/style.css"
import Header from "./Header"
import Footer from "./Footer"
import 'typeface-varela-round';

interface Props {}

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1680px;
    margin: auto;
    text-align: center;
    height: 100%;
    font-family: 'Varela Round',sans-serif;
    color: #000;
  }
  html, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

const Layout = (props: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        {props.children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
