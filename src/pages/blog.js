import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/Images"

const blog = () => {
  return (
    <Layout>
      Blog page
      <Link to="/">Back home</Link>
      <Images />
    </Layout>
  )
}

export default blog
