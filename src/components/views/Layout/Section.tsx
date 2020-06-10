import React from "react"
import styled, { css } from "styled-components"

interface Props {}

const Title = styled.h2`
  font-size: 3em;
  font-weight: 700;
  margin: 4%;
`

const Divider = styled.hr(
  ({ theme }) => css`
    width: 10%;
    border: 1px solid ${theme.color.background.secondary};
  `
)

const Section = (props: Props) => {
  return (
    <>
    <div>
      <Title>{props.title}</Title>
    </div>
    <Divider />
    {props.children}
    </>
  )
}

export default Section
