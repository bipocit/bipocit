import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main className="p-4 lg:p-6">{children}</main>
      <footer className="p-4 lg:p-6">
        © {new Date().getFullYear()}, {data.site.siteMetadata.title}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
