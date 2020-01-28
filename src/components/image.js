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
      <svg width="0" height="0" viewBox="0 0 875 448" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="bipocit">
            <path d="M481.15 49.9655C331.945 -32.5815 167.275 5.45484 103.59 34.7914C-158.075 205.749 143.526 418.005 268.867 432.352C268.867 432.352 779.862 517.327 851.128 291.233C922.394 65.1396 819.286 34.7914 735.889 43.8958C652.492 53.0003 630.354 132.513 481.15 49.9655Z" fill="none"/>
          </clipPath>
        </defs>
      </svg>
      <Img className="clip-path mt-8" fluid={data.bipocitImage.childImageSharp.fluid} />
    </div>
  )
}

export default Image