import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import '../styles/index.css'

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
      <footer className="p-4 lg:p-6 text-purple-100">
        <h3>Contact</h3>
        <Link to='mailto:hello@bipocit.com' className="block text-purple-100 hover:text-purple-200">hello@bipocit.com</Link>
        <Link to='https://twitter.com/bipocit' className="block text-purple-100 hover:text-purple-200">Twitter</Link>
        <Link to='https://instagram.com/bipocit' className="block text-purple-100 hover:text-purple-200">Instagram</Link>
        &copy; {new Date().getFullYear()}, {data.site.siteMetadata.name}
      </footer>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
