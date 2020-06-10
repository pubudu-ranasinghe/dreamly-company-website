import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Section from "../Layout/Section"
import Boxes from "../Layout/Boxes"

interface Props {}

const PartOfKagawa = (props: Props) => {

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "icons/award-icon.png" }) {
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
      title: 'Unique CEO',
      text: 'A Swedish guy who can also speaks Japanese in the Kagawa dialect',
      link: 'https://dreamly.se/2019/01/11/dreamly-open/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Partnership with Hammer Academy',
      text: 'Supporting IT resource development in Kagawa by providing lectures in programming & IT',
      link: 'https://www.hamakawagakuin.com/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Cooperation with METI',
      text: 'Providing advice to Kagawa\'s producers for how to bring their products overseas',
      link: 'https://www.shikoku.meti.go.jp/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Won the business competition',
      text: 'Ideas for developing medical institution applications by using blockchain technology',
      link: 'https://dreamly.se/2020/02/06/won-business-model-competition-2019/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Cooperation with HOP',
      text: 'Our staff provides language assistance for a new approach to teaching English',
      link: 'https://www.hopforhope.info/'
    },
    {
      icon: data.image.childImageSharp.fixed,
      title: 'Startup Incubator',
      text: 'Creating a supportive focal point for startup initiatives together with private and public institutions',
      link: 'https://ja.wikipedia.org/wiki/%E3%82%A4%E3%83%B3%E3%82%AD%E3%83%A5%E3%83%99%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9'
    },
  ]

  return (
    <Section title="A part of Kagawa">
      <Boxes items={ items } />
    </Section>
  )
}



export default PartOfKagawa
