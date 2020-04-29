import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
 DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE, TEMPORAL_TOKEN, xUserHeader,
} from '../utils/requestConst'
import { SEARCH_SERVER_PATH } from '../utils/externalPath'

import SearchMessage from './SearchMessage'

class SearchMessages extends React.Component {
  constructor(props) {
    super(props)
    const { typePost } = this.props
    this.state = {
      typeRequest: typePost,
      posts: [],
      hasMore: true,
      currentPage: DEFAULT_PAGE,
      count: DEFAULT_ITEMS_ON_PAGE,
    }
  }

  componentDidMount() {
    const { typePost } = this.props
    this.fetchData(typePost)
  }


  componentDidUpdate(prevProps) {
    const { typePost } = this.props
    if (prevProps.typePost !== typePost) {
      this.fetchData(typePost)
    }
}

fetchData = (typePost) => {
  const { currentPage = DEFAULT_PAGE, count = DEFAULT_ITEMS_ON_PAGE } = this.state
    // eslint-disable-next-line max-len
    const url = `${SEARCH_SERVER_PATH}/?typePost=${typePost}&current_page=${currentPage}&items_on_page=${count}`

    const myHeaders = new Headers()
    myHeaders.append(
      xUserHeader,
      localStorage.getItem(xUserHeader),
      )
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    }

    fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => this.setState({
      posts: result.content,
      typeRequest: typePost,
      currentPage: currentPage + 1,
    }))
    .catch((error) => console.log('error', error))
}

fetchMore = () => {
  const { currentPage, count, typeRequest } = this.state
  this.setState({
    currentPage: currentPage + 1,
  })
  // eslint-disable-next-line max-len
  const url = `${SEARCH_SERVER_PATH}/?typePost=${typeRequest}&current_page=${currentPage}&items_on_page=${count}`

  const myHeaders = new Headers()
  myHeaders.append(
    'X-Authorization',
    TEMPORAL_TOKEN,
    )
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.content.length === 0) {
      this.setState({
        hasMore: false,
      })
    }
    const { posts } = this.state
    this.setState({
      posts: posts.concat(result.content),
    })
  })
  .catch((error) => console.log('error', error))
}

  render() {
    const { hasMore, posts } = this.state
    return (
      <>
        <InfiniteScroll
          hasMore={hasMore}
          next={this.fetchMore}
          loader={<h4>Loading...</h4>}
          dataLength={posts.length}
          endMessage={<h4>The end</h4>}
        >
          {
            posts.map((post) => (
              <SearchMessage
                key={post.lfpostId + Math.random(4)}
                post={post}
                lfpostId={post.lfpostId}
              />
            ))
          }
        </InfiniteScroll>
      </>
    )
  }
}

SearchMessages.propTypes = {
  typePost: PropTypes.string.isRequired,
}

export default SearchMessages