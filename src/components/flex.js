import React from 'react'
import PropTypes from 'prop-types'

export const Flex = ({
  children,
  direction = 'col',
  width = 'full',
  style = {},
}) => (
  <div className={`flex flex-${direction} w-full md:w-${width} items-start`} style={style}>
    {children}
  </div>
)

Flex.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf([
    'row',
    'col',
  ]),
  width: PropTypes.oneOf([
    '1/4', // 25%
    '1/2', // 50%
    '3/4', // 75%
    '1/5', // 20%
    '2/5', // 40%
    '3/5', // 60%
    '4/5', // 80%
    'full', // 100%
  ]),
  style: PropTypes.object,
}

export const FlexContainer = ({
  children,
  wrap = 'wrap',
  direction = 'col',
  style = {},
}) => (
  <div className={`flex flex-${direction} flex-${wrap}`} style={style}>
    {children}
  </div>
)

FlexContainer.propTypes = {
  children: PropTypes.node,
  wrap: PropTypes.oneOf([
    'wrap',
    'no-wrap',
  ]),
  direction: PropTypes.oneOf([
    'row',
    'col',
  ]),
}
