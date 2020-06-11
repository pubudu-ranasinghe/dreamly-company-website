import React from "react"
import styled, { css } from "styled-components"

interface Props {}

const Title = styled.h2(
  ({theme}) => css`
    font-size: ${theme.size.font.huge};
    font-weight: 700;
    padding: 4%;
    margin-bottom: 20px;
  `
)
const Divider = styled.hr(
  ({ theme }) => css`
    width: 10%;
    border: 1px solid ${theme.color.background.secondary};
  `
)

const Section = (props: Props) => {
  return (
    <>
    <section>
      <Title>{props.title}</Title>
      <Divider />
      {props.children}
    </section>
    </>
  )
}

export default Section
