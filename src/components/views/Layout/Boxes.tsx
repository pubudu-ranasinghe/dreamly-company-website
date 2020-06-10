import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

interface Props {}

const Title = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.size.font.large};
  `
)

const Container = styled.div(
  ({ theme }) => css`
    display: block;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    padding: 0 4rem;
    margin: 2rem 0;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  `
)

const Boxes = (props: Props) => {

  return(
    <>
      <Container>
        {props.items.map((item) => (
          <div>
            <a href={ item.link}>
              <Img fixed={ item.icon } />
            </a>
            <div>
              <Title>
                <a href={ item.link }>{ item.title }</a>
              </Title>
              <p>{ item.text }</p>
            </div>
          </div>
        ))}
      </Container>
    </>
  )

}


export default Boxes
