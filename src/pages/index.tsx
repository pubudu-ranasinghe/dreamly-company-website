import React from "react"
import styled, { css } from "styled-components"
import Layout from "../components/Layout/Layout"

const Container = styled.div(
  ({ theme }) => css`
    color: ${theme.color.font.primary};
    background-color: ${theme.color.background.secondary};
  `
)
export default function Home() {
  return (
    <Layout>
      <Container>Hello world!</Container>
    </Layout>
  )
}
