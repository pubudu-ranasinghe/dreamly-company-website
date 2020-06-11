import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Layout/Section"
import Boxes from "../Layout/Boxes"

interface Props {}

const Projects = (props: Props) => {

  const data = useStaticQuery(graphql`
    query {
      coding: file(relativePath: { eq: "icons/coding.png" }) {
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
      editing: file(relativePath: { eq: "icons/editing.png" }) {
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
      heart: file(relativePath: { eq: "icons/heart.png" }) {
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
      marketing: file(relativePath: { eq: "icons/marketing.png" }) {
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
      projects: file(relativePath: { eq: "icons/projects.png" }) {
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
      icon: data.projects.childImageSharp.fluid,
      title: 'Management & analytical platform for weather data',
      link: 'https://www.kamomeya-inc.com/service/kazamidori/'
    },
    {
      icon: data.coding.childImageSharp.fluid,
      title: 'Remote Control of Digital Billboards',
      link: 'http://www.videolifenext.com/signage/'
    },
    {
      icon: data.heart.childImageSharp.fluid,
      title: 'Platform for Home-visit nursing system',
      link: 'https://www.c-rcs.jp/products/nursing'
    },
    {
      icon: data.marketing.childImageSharp.fluid,
      title: 'SNS platform for restaurants',
    },
    {
      icon: data.editing.childImageSharp.fluid,
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
