import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>Basic image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>Fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid image/SVG</h3>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem;
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
`

export default Images
