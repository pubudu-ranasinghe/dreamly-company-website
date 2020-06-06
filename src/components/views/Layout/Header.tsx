import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 1em 0em;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
      /* write style for tablet here */
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      /* write style for desktop here */
    }
  `
)

interface Props {}

const Header = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cover.png" }) {
        id
        childImageSharp {
          fixed(width: 211) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Img fixed={data.image.childImageSharp.fixed} alt="ドリームリー" />
    </Wrapper>
  )
}

export default Header
