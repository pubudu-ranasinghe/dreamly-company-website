import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

interface Props {}

const Header = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "cover.png" }) {
        id
        childImageSharp {
          fixed(width: 211) {
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
    <div>
      <Img fixed={data.image.childImageSharp.fixed} alt="ドリームリー" />
    </div>
  )
}

export default Header
