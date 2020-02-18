import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
      <div className="min-h-screen flex flex-col">
        <Navigation siteTitle={data.site.siteMetadata.title} name={data.site.siteMetadata.name} />
        <main className="p-4 md:p-6 flex-grow">
          {children}
        </main>
        <footer className="p-4 md:p-6">
          <h3 className="font-semibold text-xl md:text-2xl leading-snug md:leading-none mt-10 mb-4">Contact</h3>
          <p><a href='mailto:hello@bipocit.com' className="underline text-purple-200 hover:text-purple-300 transition-colors duration-150 ease-in-out">hello@bipocit.com</a></p>
          <p>Follow us on <a href='https://twitter.com/bipocit' className="text-purple-200 hover:text-purple-300 underline transition-colors duration-150 ease-in-out">Twitter</a> and <a href='https://instagram.com/bipocit' className="text-purple-200 hover:text-purple-300 underline transition-colors duration-150 ease-in-out">Instagram</a></p>
          <p className="mt-10 mb-4">&copy; {new Date().getFullYear()}, {data.site.siteMetadata.name}</p>
        </footer>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
