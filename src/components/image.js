import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      bipocitImage: file(relativePath: { eq: "bipocit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="w-100 md:w-3/4">
      <Img className="clip-path mt-8" fluid={data.bipocitImage.childImageSharp.fluid} />
    </div>
  )
}

export default Image