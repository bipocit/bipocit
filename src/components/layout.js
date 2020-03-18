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
        <main className="p-4 md:p-6 md:pl-20 flex-grow">
          {children}
        </main>
        <footer className="px-0 md:p-0 border-t border-salmon">
          <div className="pl-4 py-4 md:pl-20 md:py-12">
            <h3 className="font-semibold text-xl md:text-2xl leading-snug md:leading-none mb-4">Say Hello</h3>
            <p><a href='mailto:hello@bipocit.com' className="underline text-purple-200 hover:text-purple-300 transition-colors duration-150 ease-in-out">hello@bipocit.com</a></p>
            <p>Follow us on <a href='https://twitter.com/bipocit' target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-300 underline transition-colors duration-150 ease-in-out">Twitter</a> and <a href='https://instagram.com/bipocit' target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-300 underline transition-colors duration-150 ease-in-out">Instagram</a></p>
          </div>
          <p className="p-4 md:pl-20 md:py-8 border-t border-salmon">Copyright &copy; {data.site.siteMetadata.name} {new Date().getFullYear()} • Based in Berlin</p>
        </footer>
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
