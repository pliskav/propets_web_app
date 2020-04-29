import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
 DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE,
} from '../utils/requestConst'
import { SEARCH_SERVER_PATH } from '../utils/externalPath'

import SearchMessage from './SearchMessage'

class Lost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      hasMore: true,
      currentPage: DEFAULT_PAGE,
      count: DEFAULT_ITEMS_ON_PAGE,
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

fetchData = () => {
  const { currentPage = DEFAULT_PAGE, count = DEFAULT_ITEMS_ON_PAGE } = this.state
    const url = `${SEARCH_SERVER_PATH}/?typePost=lost&current_page=${currentPage}&items_on_page=${count}`

    const xAuth = localStorage.getItem('X-Authorization')

    const myHeaders = new Headers()
    myHeaders.append(
      'X-Authorization',
      xAuth,
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
      currentPage: currentPage + 1,
    }))
    .catch((error) => console.log('error', error))
}

fetchMore = () => {
  const xAuth = localStorage.getItem('X-Authorization')

  const { currentPage, count } = this.state
  this.setState({
    currentPage: currentPage + 1,
  })
  const url = `${SEARCH_SERVER_PATH}/?typePost=lost&current_page=${currentPage}&items_on_page=${count}`

  const myHeaders = new Headers()
  myHeaders.append(
    'X-Authorization',
    xAuth,
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

Lost.propTypes = {
}

export default Lost