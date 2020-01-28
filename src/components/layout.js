import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Navigation from "./navigation"
import Markdown from "./markdown"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          name
        }
      }
    }
  `)

  return (
    <MDXProvider components={Markdown}>
      <Navigation siteTitle={data.site.siteMetadata.title} name={data.site.siteMetadata.name} />
      <main className="p-4 lg:p-6">
      {children}
      </main>
      <footer className="p-4 lg:p-6">
        © {new Date().getFullYear()}, {data.site.siteMetadata.name}
      </footer>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
