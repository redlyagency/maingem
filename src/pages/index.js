import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSegment from "../templates/heroSegment"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSegment />
  </Layout>
)

export default IndexPage
