import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPost = graphql`
  query {
    post: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { post } = useStaticQuery(getPost)
  console.log(post)

  return (
    <section className={styles.blog}>
      <Title title="Our" subtitle="blogs" />
      <div className={styles.center}>
        {post.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
