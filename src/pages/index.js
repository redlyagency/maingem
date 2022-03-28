import * as React from "react"

import Layout from "../components/base/layout"
import AboutUsSegment from "../templates/aboutUsSegment"

import HeroSegment from "../templates/heroSegment"

const IndexPage = () => (
  <Layout>
    <HeroSegment />
    <AboutUsSegment />
  </Layout>
)

export default IndexPage
