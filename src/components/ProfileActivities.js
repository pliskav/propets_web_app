import React from 'react'
import PropTypes from 'prop-types'
import {
  DEFAULT_PAGE, DEFAULT_ITEMS_ON_PAGE,
} from '../utils/requestConst';
import { ACCOUNT_SERVER_PATH } from '../utils/externalPath';

import SearchMessage from './SearchMessage'
import Message from './Message'

class ProfileActivities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      hasMore: true,
      currentPage: DEFAULT_PAGE,
      count: DEFAULT_ITEMS_ON_PAGE,
      posts: [],
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

    const { email = xUser } = this.props

    const url = `${ACCOUNT_SERVER_PATH}/${email}/activities?current_page=${currentPage}&items_on_page=${count}`

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({
        posts: result.posts,
      }))
      .catch((error) => console.log('error', error));
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <h1>ProfileActivities component</h1>
        {posts.map((p) => (
          p.post === null ? (
            <SearchMessage
              key={p.lostFoundPost.lfpostId + Math.random(4)}
              post={p.lostFoundPost}
              lfpostId={p.lostFoundPost.lfpostId}
            />
          ) : (
            <Message
              key={p.post.postId + Math.random(4)}
              owner={p.post.owner.email}
              date={p.post.postDate}
              text={p.post.text}
              postid={p.post.postId}
            />
          )
        ))}
      </div>
    )
  }
}


  ProfileActivities.propTypes = {
    email: PropTypes.string.isRequired,
  }

export default ProfileActivities