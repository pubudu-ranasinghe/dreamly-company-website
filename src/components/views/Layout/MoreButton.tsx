import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

interface Props {}

const Button = styled.button(
  ({ theme }) => css`
    color: ${ theme.color.font.primary };
    font-family: inherit;
    font-size: ${ theme.size.font.regular };
    background-color: #f54;
    padding: 20px 30px;
    border-radius: 2px;
    border: none;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.5);
    margin: 10px 0 110px;
    min-width: 150px;
    cursor: pointer;
    transition: all .2s linear;
    &:hover {
      color: ${ theme.color.font.secondary };
      background-color: ${ theme.color.background.primary };
    }
  `
)

const MoreButton = (props: Props) => {
  return (
    <section>
    <Link to='about'>
      <Button>
        More <FontAwesomeIcon icon={faUsers} />
      </Button>
    </Link>
    </section>
  )
}

export default MoreButton
