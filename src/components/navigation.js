import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-intl";

const Navigation = ({ siteTitle }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 lg:p-6">
      <div className="flex items-center">
        <Link to="/" className="font-semibold no-underline text-black text-xl tracking-tight">{siteTitle}</Link>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm lg:text-md">
          <Link to="/about" className="inline-block no-underline text-black hover:text-black-800 mr-4">
            Events
          </Link>
          <Link to="/events" className="inline-block no-underline text-black hover:text-black-800 mr-4">
            About
          </Link>
        </div>
        <div>
          <Link to="/donate" className="inline-block no-underline text-sm lg:text-md px-4 py-2 leading-none border rounded text-white bg-black border-transparent hover:border-black hover:text-black hover:bg-white">Donate</Link>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: `BIPOCIT`,
}

export default Navigation
