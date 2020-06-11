import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import styled, { css } from "styled-components"
import backgroundimg from '../../../assets/images/background/bc-image.png'
import BackgroundImage from 'gatsby-background-image'

const Title = styled.h1(
  ({theme}) => css`
    color: #fff;
    font-family: "Georgia", Sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    line-height: 2em;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 1.6em;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
      text-align: left;
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      text-align: left;
    }
  `
)

const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 5% 5% 10% 5%;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
      padding: 5% 30% 10% 5%;
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      padding: 20% 30% 20% 5%;
    }
  `
)

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
          <Wrapper
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1250"
          >
            <Title>
              Dreamly is an international team bringing state of the art IT skills to Kagawa.
            </Title>
            <Title>
              We will help invigorating your dreams, even in the rural parts of Japan.
            </Title>
          </Wrapper>
        </BackgroundImage>
      )
    }}
  />
)

const StyledCover = styled(Cover)`
  width: 100%;
  background-position: center right;
  background-repeat: repeat-y;
  background-size: cover;
  height: auto;
  @media (min-width: ${props => props.theme.range.screen.mobileToTablet}) {

  }
  @media (min-width: ${props => props.theme.range.screen.tabletToDesktop}) {
    height: 100%;
  }
`

export default StyledCover
