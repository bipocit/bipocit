import React from 'react'
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Index = ({ intl }) => {
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
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: 'title_long' })}
      />
      <div className="w-100 md:w-1/2">
        <h1 className="font-semibold text-3xl md:text-5xl leading-snug md:leading-none">{intl.formatMessage({ id: 'home_headline' })}</h1>
        <p className="mt-4">{intl.formatMessage({ id: 'home_intro_copy' })}</p>
      </div>

      <div className="flex">
        <div className="mt-16 md:mt-32 w-100 md:w-1/4">
          <h2 className="font-semibold text-2xl md:text-3xl leading-snug md:leading-none">{intl.formatMessage({ id: 'donate_cta' })}</h2>
          <div className="mt-6">
            <Link to="/donate" className="inline-block no-underline text-sm lg:text-md px-4 py-2 leading-none border rounded text-white bg-black border-transparent hover:border-black hover:text-black hover:bg-white">Donate</Link>
          </div>
        </div>
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
      </div>
    </Layout>
  );
};

export default injectIntl(Index)
