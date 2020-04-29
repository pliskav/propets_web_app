/* eslint-disable react/prop-types */
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { ACCOUNT_SERVER_PATH } from '../utils/externalPath'
import Image from './ui/Image'

import '../styles/info.css'
import { profilePath } from '../utils/routes'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      user: {},
    }
  }

  componentDidMount() {
    const xUser = localStorage.getItem('X-User')
    console.log(xUser)

    const header = {
      'X-Authorization': localStorage.getItem('X-Authorization'),
    }
    const url = `${ACCOUNT_SERVER_PATH}/${xUser}`
    console.log(url)

    try {
      axios({
        method: 'post',
        url,
        headers: header,
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          user: data,
          loaded: true,
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleClick = () => {
    const { history } = this.props;
    history.push(`${profilePath}`)
  }

  render() {
    const { user, loaded } = this.state
    return loaded && (
      <div className="info-wrapper">
        <div className="info-container">
          <div className="info-avatar">
            <Image src={user.avatar} />
          </div>
          <div
            className="info-name"
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
            role="button"
            tabIndex="0"
          >
            {user.name}
          </div>
        </div>
      </div>
      )
  }
}

export default withRouter(User)