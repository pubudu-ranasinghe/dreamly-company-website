import React from "react"
import Layout from "../components/views/Layout/Layout"
import SEO from "../components/SEO"
import Cover from "../components/views/home/Cover"
import MoreButton from "../components/views/Layout/MoreButton"
import DevelopmentProcess from "../components/views/home/DevelopmentProcess"
import PartOfKagawa from "../components/views/home/PartOfKagawa"
import Projects from "../components/views/home/Projects"

export default function Home() {
  return (
    <Layout>
      <SEO title="ドリームリー" />
      <Cover />
      <MoreButton />
      <PartOfKagawa />
      <DevelopmentProcess />
      <Projects />
    </Layout>
  )
}
