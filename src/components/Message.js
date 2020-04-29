/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'


import Image from './ui/Image'


import convertTime from '../helpers/convertTime'

import '../styles/message.css'
import Icon from './ui/Icon'
import { MESSAGE_SERVER_PATH } from '../utils/externalPath'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: convertTime(props.date),
      text: props.text,
      postid: props.postid,
      avatar: props.avatar,
      name: props.name,
      setFavorite: false,
      favs: props.favs,
    }
  }

  componentDidMount() {
    const { favs, setFavorite } = this.state
    const user = localStorage.getItem('X-User')
    if (favs.includes(user) && !setFavorite) {
      this.setState({
        setFavorite: true,
      })
    }
  }

handleClick = () => {
  // const { postid } = this.state
  // const { history } = this.props
  // // eslint-disable-next-line react/prop-types
  // history.push(`/messages/${postid}`)
}

hideHandle = () => {
  alert('Hide action')
}

unfollowHandle = () => {
  alert('Unfollow action')
}

favoriteHandle = () => {
  const { setFavorite, postid } = this.state
  const header = {
    'X-Authorization': localStorage.getItem('X-Authorization'),
  }
  const user = localStorage.getItem('X-User')
  const requestUrl = `${MESSAGE_SERVER_PATH}/${postid}/favorite/${user}`
  console.log(requestUrl)
  if (!setFavorite) {
    try {
      axios({
        method: 'put',
        url: requestUrl,
        headers: header,
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          setFavorite: !setFavorite,
        })
      })
} catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
  if (setFavorite) {
    try {
      axios({
        method: 'delete',
        url: requestUrl,
        headers: header,
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          setFavorite: !setFavorite,
        })
      })
} catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
  }
  }


  render() {
    const {
avatar, name, time, text, setFavorite, postid,
} = this.state
    return (
      <div className="message">
        <div className="post-owner"><Image src={avatar} alt={name} className="post-owner-avatar" /></div>
        <div className="post-content">
          <div className="post-owner-name">{name}</div>
          <div className="post-date">{time}</div>
          <div className="post-text">
            {text}
            <span><Link to={`/messages/${postid}`} onClick={this.handleClick}>More</Link></span>
          </div>
        </div>
        <div className="post-control">
          <div className="post-visibility">
            <Icon type="far" name="eye-slash" className="icon-control " onClick={this.hideHandle} />
            <Icon type="fa" name="times" className="icon-control " onClick={this.unfollowHandle} />
          </div>
          {setFavorite
          ? <Icon type="fa" name="star" className="icon-control " onClick={this.favoriteHandle} />
          : (
            <Icon
              type="far"
              name="star"
              className="icon-control"
              onClick={this.favoriteHandle}
            />
) }
        </div>
      </div>
    )
  }
}

  Message.propTypes = {
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    postid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

export default withRouter(Message)