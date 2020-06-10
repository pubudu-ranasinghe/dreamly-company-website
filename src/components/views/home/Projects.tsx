import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Layout/Section"
import Boxes from "../Layout/Boxes"

interface Props {}

const Projects = (props: Props) => {

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "icons/coding.png" }) {
        id
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const items = [
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Management & analytical platform for weather data',
      link: 'https://www.kamomeya-inc.com/service/kazamidori/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Remote Control of Digital Billboards',
      link: 'http://www.videolifenext.com/signage/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Platform for Home-visit nursing system',
      link: 'https://www.c-rcs.jp/products/nursing'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'SNS platform for restaurants',
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Universal platform for Inbound Tourism',
    },
  ]

  return (
    <Section title="Projects">
      <Boxes items={ items } />
    </Section>
  )
}

export default Projects
