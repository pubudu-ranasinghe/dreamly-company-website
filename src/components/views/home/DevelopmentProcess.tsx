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
  `
)

const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 5%;
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
    <Section title="Development process">
    <Wrapper>
        <p>Dreamly is focused on agile development, not on waterfall development which is common in Japanese companies.</p>
        <p>Each approach has advantages and disadvantages.</p>

        <StyledH3>Advantages of Agile development</StyledH3>

        <Img fluid={ data.image.childImageSharp.fluid } />
        <Img fluid={ data.image2.childImageSharp.fluid } />

        <ol>
          <li>Can flexibly respond to changes in projects where specifications are likely to change or add</li>
          <li>Short delivery time and start business in a short time</li>
          <li>Helps discover potential needs of users</li>
        </ol>

      </Wrapper>
    </Section>
  )
}

export default DevelopmentProcess
