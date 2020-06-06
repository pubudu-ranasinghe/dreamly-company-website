import React from "react"
import styled, { css } from "styled-components"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import Cover from "../components/home/Cover"
import DevelopmentProcess from "../components/home/DevelopmentProcess"
import PartOfKagawa from "../components/home/PartOfKagawa"
import Projects from "../components/home/Projects"

const Container = styled.div(
  ({ theme }) => css`
    color: ${theme.color.font.primary};
    background-color: ${theme.color.background.secondary};
  `
)
export default function Home() {
  return (
    <Layout>
      <SEO title="ドリームリー" />
      <Cover />
      <DevelopmentProcess />
      <PartOfKagawa />
      <Projects />
    </Layout>
  )
}
