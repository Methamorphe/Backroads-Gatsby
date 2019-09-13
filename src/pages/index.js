import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, cumque!"
      >
        <Link className="btn-white" to="/tours/">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
