import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const DonateButton = ({ text = 'Support' }) => {
  return (
    <Link to="/support" className="inline-block no-underline text-lg md:text-xl px-4 py-2 leading-none rounded text-purple-100 bg-purple-700 hover:bg-purple-800 transition-colors duration-150 ease-in-out">
      {text}
    </Link>
  )
}

DonateButton.propTypes = {
  text: PropTypes.string,
}

export default DonateButton;