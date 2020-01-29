import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navigation = ({ name }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 lg:p-6">
      <div className="flex items-center">
        <Link to="/" className="font-semibold no-underline text-purple-100 hover:text-purple-200 text-xl tracking-tight">{name}</Link>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm lg:text-md">
          <Link to="/events" className="inline-block no-underline text-purple-100 hover:text-purple-200 mr-4">
            Events
          </Link>
          <Link to="/about" className="inline-block no-underline text-purple-100 hover:text-purple-200 mr-4">
            About
          </Link>
        </div>
        <div>
          <Link to="/donate" className="inline-block no-underline text-sm lg:text-md px-4 py-2 leading-none rounded text-purple-100 bg-purple-700 hover:bg-purple-800">Donate</Link>
        </div>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
  name: PropTypes.string,
}

export default Navigation
