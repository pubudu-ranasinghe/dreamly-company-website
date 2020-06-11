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
    margin-bottom: 20px;
  `
)

const Section = (props: Props) => {

  const StyledSection = styled.section(
    ({ theme }) => css`
      background-color: ${props.grey ? '#f4f4f7' : 'inherit'};
      padding: 10px;
    `
  )
  return (
    <>
    <StyledSection>
      <Title>{props.title}</Title>
      <Divider />
      {props.children}
    </StyledSection>
    </>
  )
}

export default Section
