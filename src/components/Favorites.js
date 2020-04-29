import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


import {
 DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE,
} from '../utils/requestConst'
import { MESSAGE_SERVER_PATH } from '../utils/externalPath'
import Message from './Message'
import Loader from './ui/Loader'

export default class Favorites extends Component {
constructor(props) {
  super(props)

  this.state = {
    msg: [],
    hasMore: true,
    currentPage: DEFAULT_PAGE,
    count: DEFAULT_ITEMS_ON_PAGE,
    loading: true,
  }
}

componentDidMount() {
  const xAuth = localStorage.getItem('X-Authorization')
  const xUser = localStorage.getItem('X-User')
  const { currentPage, count } = this.state
    const myHeaders = new Headers();
    myHeaders.append(
      'X-Authorization',
      xAuth,
    );

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    const url = `${MESSAGE_SERVER_PATH}/favorites/${xUser}?current_page=${currentPage}&items_on_page=${count}`

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({
        loading: false,
        msg: result.posts,
      }))
      .catch((error) => console.log('error', error));
}

fetchMore = () => {
  const xAuth = localStorage.getItem('X-Authorization')
  const xUser = localStorage.getItem('X-User')
  const { currentPage, count } = this.state
  this.setState({
    currentPage: currentPage + 1,
  })

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
  const url = `${MESSAGE_SERVER_PATH}/favorites/${xUser}?current_page=${currentPage}&items_on_page=${count}`

  fetch(url, requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if (result.posts.length === 0) {
      this.setState({
        hasMore: false,
      })
    }
    const { msg } = this.state
    this.setState({
      msg: msg.concat(result.posts),
    })
  })
  .catch((error) => console.log('error', error))
}

  render() {
    const { hasMore, msg, loading } = this.state
    return loading ? <Loader /> : (
      <>
        <div className="title-text">Your favorites. Find them here anytime.</div>
        {
          msg.length === 0
          ? (<div>You don&apos;t have any favorites</div>)
          : (
            <InfiniteScroll
              dataLength={msg.length}
              next={this.fetchMore}
              loader={<h4>Loading...</h4>}
              hasMore={hasMore}
              endMessage={<h4>End</h4>}
            >
              {
          msg.map((message) => (
            <Message
              key={message.postId}
              owner={message.owner.email}
              avatar={message.owner.avatar}
              date={message.postDate}
              text={message.text}
              postid={message.postId}
              name={message.owner.name}
              favs={message.favorites}
            />
          ))
        }
            </InfiniteScroll>
          )
        }
      </>
    )
  }
}
