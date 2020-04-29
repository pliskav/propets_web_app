/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import SearchFilters from './SearchFilters'
import SearchMessages from './SearchMessages'
import SearchMap from './SearchMap'

const Search = (props) => {
  const { location } = props
  return (
    <>
      <div>Search component</div>
      <SearchFilters />
      <SearchMessages typePost={location.searchProps.type} />
      <SearchMap />
    </>
  )
}

  Search.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    location: PropTypes.object.isRequired,
}

export default Search