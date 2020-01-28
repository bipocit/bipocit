import React from "react"
import PropTypes from "prop-types"

const Navigation = ({ name }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 lg:p-6">
      <div className="flex items-center">
        <a href="/" className="font-semibold no-underline text-black text-xl tracking-tight">{name}</a>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm lg:text-md">
          <a href="/events" className="inline-block no-underline text-black hover:text-black-800 mr-4">
            Events
          </a>
          <a href="/about" className="inline-block no-underline text-black hover:text-black-800 mr-4">
            About
          </a>
        </div>
        <div>
          <a href="/donate" className="inline-block no-underline text-sm lg:text-md px-4 py-2 leading-none border rounded text-white bg-black border-transparent hover:border-black hover:text-black hover:bg-white">Donate</a>
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
