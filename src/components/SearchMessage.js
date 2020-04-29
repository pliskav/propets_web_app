import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

const SearchMessage = (props) => {
  const { post, lfpostId } = props
   const moreHandler = () => {
    // eslint-disable-next-line react/prop-types
    props.history.push(`/search/${lfpostId}`)
  }
    return (
      <div>
        <div><h3>post number</h3></div>
        <div>{post.lfpostId}</div>
        <div><h3>Type</h3></div>
        <div>{post.type}</div>
        {/* <div><h3>Color</h3></div>
        <div>{post.color}</div>
        <div><h3>Sex</h3></div>
        <div>{post.sex}</div>
        <div><h3>Height</h3></div>
        <div>{post.height}</div>
        <div><h3>Features</h3></div>
        <div>{post.distFeatures}</div>
        <div><h3>Desciption</h3></div>
        <div>{post.description}</div>
        <div><h3>Autor</h3></div>
        <div>{post.owner.name}</div> */}
        <div><h3>Date</h3></div>
        <div>{post.startTimePost}</div>
        <button type="button" onClick={moreHandler}>
          More
        </button>
      </div>
    )
}

SearchMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  lfpostId: PropTypes.string.isRequired,
}

export default withRouter(SearchMessage)