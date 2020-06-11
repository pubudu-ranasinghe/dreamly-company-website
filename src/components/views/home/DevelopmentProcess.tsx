import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Layout/Section"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

interface Props {}

const StyledH3 = styled.h3(
  ({ theme }) => css`
    color: ${ theme.color.background.tertiary };
    font-size: ${ theme.size.font.large };
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
    line-height: 1.4;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      font-size: ${ theme.size.font.huge };
    }
  `
)

const StyledP = styled.p(
  ({ theme }) => css`
    margin-bottom: 1.2em;
  `
)

const Wrapper = styled.div(
  ({ theme }) => css`
    color: #7a7a7a;
    line-height: 1.8;
    font-size: 16.8px;
    padding: 20px 10px;
    margin-bottom: 20px;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      margin: 0 20% 10% 20%;
    }
  `
)

const StyledImg = styled(Img)(
  ({ theme }) => css`
    margin-bottom: 20px;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
    }
  `
)

const Ul = styled.ul(
  ({ theme }) => css`
    text-align: left;
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 20px;
  `
)

const DevelopmentProcess = (props: Props) => {

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "flows/flow01 1.png" }) {
        id
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "flows/flow02 1.png" }) {
        id
        childImageSharp {
          fixed(width: 64) {
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
    <Section title="Development process" grey >
      <Wrapper>
        <StyledP>Dreamly is focused on agile development, not on waterfall development which is common in Japanese companies.</StyledP>
        <StyledP>Each approach has advantages and disadvantages.</StyledP>

        <StyledImg fluid={ data.image.childImageSharp.fluid } />
        <StyledImg fluid={ data.image2.childImageSharp.fluid } />

        <StyledH3>Advantages of Agile development</StyledH3>

        <Ul>
          <li>Can flexibly respond to changes in projects where specifications are likely to change or add</li>
          <li>Short delivery time and start business in a short time</li>
          <li>Helps discover potential needs of users</li>
        </Ul>

      </Wrapper>
    </Section>
  )
}

export default DevelopmentProcess
