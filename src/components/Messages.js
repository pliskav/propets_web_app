import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { MESSAGE_SERVER_PATH } from '../utils/externalPath'
import { DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE } from '../utils/requestConst'

import Message from './Message'
import Loader from './ui/Loader'

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: true,
      currentPage: DEFAULT_PAGE,
      count: DEFAULT_ITEMS_ON_PAGE,
      msg: [],
      loading: true,
    }
  }

  componentDidMount() {
    const xAuth = localStorage.getItem('X-Authorization')
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

    fetch(`${MESSAGE_SERVER_PATH}?current_page=${currentPage}&items_on_page=${count}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          msg: result.posts,
          loading: false,
        })
      })
      .catch((error) => console.log('error', error));
  }

  fetchMore = () => {
    const xAuth = localStorage.getItem('X-Authorization')

    const { currentPage, count } = this.state
    this.setState({
      currentPage: currentPage + 1,
    })
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

    fetch(`${MESSAGE_SERVER_PATH}?current_page=${currentPage}&items_on_page=${count}`, requestOptions)
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
      .catch((error) => console.log('error', error));
  }

  render() {
    const { msg, hasMore, loading } = this.state
    return loading ? <Loader />
    : (
      <>
        <InfiniteScroll
          dataLength={msg.length}
          next={this.fetchMore}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<p>You have seen it all</p>}
          className="scroll-container"
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
      </>
)
  }
}

export default Messages