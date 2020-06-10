import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import styled, { css } from "styled-components"
import backgroundimg from '../../../assets/images/background/bc-image.png'
import BackgroundImage from 'gatsby-background-image'

const Title = styled.div`
  color: #fff;
  font-family: "Georgia", Sans-serif;
  font-size: 1.4em;
  font-weight: 600;
  line-height: 2em;
  letter-spacing: 4px;
  text-align: left;
	padding: 20% 30% 20% 5%;
}
`

const Cover = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "background/bc-image.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}


    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Title>
            <h1>Dreamly is an international team bringing state of the art IT skills to Kagawa.</h1>
            <h1>We will help invigorating your dreams, even in the rural parts of Japan.</h1>
          </Title>
        </BackgroundImage>
      )
    }}
  />
)

const StyledCover = styled(Cover)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100%;
`

export default StyledCover
