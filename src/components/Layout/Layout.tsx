import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../styles/theme"
import "../../css/style.css"
import Header from "./Header"

interface Props {}

const Layout = (props: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {props.children}
      </ThemeProvider>
    </>
  )
}

export default Layout
