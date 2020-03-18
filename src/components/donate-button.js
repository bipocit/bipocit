import React from "react"
import PropTypes from 'prop-types'

const DonateButton = ({ text = 'Support' }) => {
  return (
    <a href="https://www.patreon.com/bipocit" target="_blank" rel="noopener noreferrer" className="inline-block no-underline text-lg md:text-xl px-5 py-3 leading-none rounded text-white bg-darkPurple hover:bg-purple-800 transition-colors duration-150 ease-in-out">
      {text}
    </a>
  )
}

DonateButton.propTypes = {
  text: PropTypes.string,
}

export default DonateButton;