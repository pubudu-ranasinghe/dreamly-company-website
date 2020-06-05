import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../styles/theme"
import "../../css/style.css"

interface Props {}

const Layout = (props: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  )
}

export default Layout
