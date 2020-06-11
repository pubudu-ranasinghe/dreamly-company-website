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
    font-family: 'Varela Round',sans-serif;
    color: { theme.color.font.secondary };
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
