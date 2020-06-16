import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"

interface Props {}

const Title = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.size.font.large};
    margin-bottom: 20px;
    @media (min-width: ${theme.range.screen.mobileToTablet}) {
    }
    @media (min-width: ${theme.range.screen.tabletToDesktop}) {
      font-size: ${ theme.size.font.huge };
    }
  `
)

const Link = styled.a(
  ({ theme }) => css`
    color: ${ theme.color.font.secondary };
    text-decoration: none;
  `
)

const Text = styled.p(
  ({ theme }) => css`
    color: #545454;
    font-size: ${ theme.size.font.regular };
    line-height: 2em;
  `
)

const StyledImg = styled(Img)(
  ({ theme }) => css`
    width: 16%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 17px;
  `
)

// const Container = styled.div(
//   ({ theme }) => css`
//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     grid-gap: 2rem;
//     padding: 0 20px;
//     margin: 2rem auto;
//     max-width: 1200px;
//     @media (min-width: ${theme.range.screen.mobileToTablet}) {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//     }
//     @media (min-width: ${theme.range.screen.tabletToDesktop}) {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//     }
//   `
// )

const Container = (props: Props) => <div className="box-inner-container">{props.children}</div>

const Boxes = (props: Props) => {

  return(
    <>
      <Container>
        {props.items.map((item) => (
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1250"
          >
            <a href={ item.link}>
              <StyledImg fluid={ item.icon } />
            </a>
            <div>
              <Title>
                <Link href={ item.link }>{ item.title }</Link>
              </Title>
              <Text>{ item.text }</Text>
            </div>
          </div>
        ))}
      </Container>
    </>
  )

}


export default Boxes
