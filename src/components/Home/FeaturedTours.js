import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getTours = graphql`
  query {
    featured: allContentfulTour(filter: { featured: { eq: true } }) {
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

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.featured.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="/tours/" className="btn-primary">
        All tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
