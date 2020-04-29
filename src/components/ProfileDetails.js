/* eslint-disable no-alert */
import React from 'react'
import PropTypes from 'prop-types'
import { ACCOUNT_SERVER_PATH } from '../utils/externalPath'

export default class ProfileDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editView: false,
      loading: true,
      user: {},
    }
  }

  componentDidMount() {
    const xAuth = localStorage.getItem('X-Authorization')
    const xUser = localStorage.getItem('X-User')

    const myHeaders = new Headers();
    myHeaders.append(
      'X-Authorization',
      xAuth,
    );

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    const { email = xUser } = this.props

    fetch(`${ACCOUNT_SERVER_PATH}/${email}`, requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({
        loading: false,
        user: result,
      }))
      .catch((error) => console.log('error', error));
  }

  modeViewHandler = () => {
    const { editView } = this.state
    const toggle = !editView
    this.setState(
      {
       editView: toggle,
      }, () => {
        console.log(editView)
      },
    )
  }

  saveHandler = () => {
    alert('your profile is saved')
  }

  normalMode = () => {
    const { loading, user } = this.state
    return (
      <>
        <h3>My profile</h3>
        {loading ? <h4>loading...</h4> : (
          <>
            <div>Name</div>
            <div>{user.name}</div>
            <div>Email</div>
            <div>{user.email}</div>
            <div>Phone</div>
            <div>{user.phone ? user.phone : 'none'}</div>
          </>
        )}
        <button type="button" onClick={this.modeViewHandler}>Edit</button>
      </>
    )
  }

  editMode = () => (
    <div>
      <h3>ProfileDetails component Edit mode</h3>
      <button type="button" onClick={this.saveHandler}>Save</button>
      <button type="button" onClick={this.modeViewHandler}>Cancel</button>
    </div>
    )

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    return this.state.editView ? this.editMode() : this.normalMode()
  }
}


  ProfileDetails.propTypes = {
    email: PropTypes.string.isRequired,
  }