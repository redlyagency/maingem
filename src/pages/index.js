import * as React from "react"

import Layout from "../components/base/layout"
import AboutUsSegment from "../templates/aboutUsSegment"
import HeroSegment from "../templates/heroSegment"
import OurOffersSegment from "../templates/offersSegment"

const IndexPage = () => (
  <Layout>
    <HeroSegment />
    <AboutUsSegment />
    <OurOffersSegment/>
  </Layout>
)

export default IndexPage
