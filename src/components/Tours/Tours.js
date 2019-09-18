import React from "react"
import TourList from "./TourList"
import { useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          country
          days
          slug
          description {
            description
          }
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          contentful_id
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)
  return <TourList tours={tours} />
}

export default Tours
