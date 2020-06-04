import React from "react"
import styled, { css } from "styled-components"

const Container = styled.div(
  ({ theme }) => css`
    color: red;
  `
)
export default function Home() {
  return <Container>Hello world!</Container>
}
