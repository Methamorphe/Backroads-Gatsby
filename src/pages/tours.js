import React, { Component } from "react"
import Layout from "../components/Layout"
import Button from "../exemple/Button"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        Hello from tours page
        <div>
          <Button>Hello from styled</Button>
        </div>
      </Layout>
    )
  }
}
