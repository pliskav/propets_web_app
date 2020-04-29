/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonGroup = (
  children, className, vertical, ...rest
) => {
  const classes = classNames(
    'btn-group',
    className,
    { vertical },
  )

  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
}

ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
}

export default ButtonGroup