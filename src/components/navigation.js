import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import DonateButton from "../components/donate-button";

const Navigation = ({ name }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 md:p-6 md:pl-20 md:pt-10">
      <div className="flex items-center">
        <Link to="/" className="font-semibold no-underline text-xl tracking-tight">
          {/* TODO: created a static folder in root to temporarily store logo */}
          <img src={"./logo.svg"} alt="logo"/>
        </Link>
      </div>
      <div className="flex items-center w-auto">
        <div className="text-sm lg:text-md">
          <Link to="/about" className="inline-block no-underline text-lg md:text-xl text-darkPurple font-semibold hover:text-purple-300 mr-4 transition-colors duration-150 ease-in-out">
            About
          </Link>
          <Link to="/events" className="inline-block no-underline text-lg md:text-xl text-darkPurple font-semibold hover:text-purple-300 mr-4 transition-colors duration-150 ease-in-out">
            Events
          </Link>
        </div>
        <div>
          <DonateButton/>
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
