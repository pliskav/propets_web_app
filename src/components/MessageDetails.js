/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import {
 Formik, Form, Field,
} from 'formik'
import * as Yup from 'yup'

import Button from './ui/Button'

import { xAuthHeader } from '../utils/requestConst'


import { MESSAGE_SERVER_PATH } from '../utils/externalPath'


class MessageDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      post: {},
      postid: props.match.params.postid,
      editMode: false,
      previewMode: false,
    }
  }

  componentDidMount() {
    const xAuth = localStorage.getItem('X-Authorization')

    const { postid } = this.state
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

    fetch(`${MESSAGE_SERVER_PATH}/${postid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({
        post: result,
        loading: false,
      }))
      .catch((error) => console.log('error', error));
  }

  editHandler = () => {
    const { editMode } = this.state
    this.setState({
      editMode: !editMode,
    })
  }

  returnEditHandler = () => {
    const { previewMode } = this.state
    this.setState({
      previewMode: !previewMode,
    })
  }

  previewHandler = (values, setSubmitting) => {
    const { previewMode } = this.state
    let { post } = this.state
    const text = values.postText
    post = { ...post, text }
    this.setState({
      previewMode: !previewMode,
      post,
    })
    setSubmitting(false)
  }

  saveHandler = () => {
    const { post } = this.state
    const { text, images, postId } = post
    const xAuth = localStorage.getItem(xAuthHeader)
    console.log(xAuth)
    const payload = {
      text,
      images,
    }
    console.log(JSON.stringify(payload))

    const myHeaders = new Headers()
    myHeaders.append(
      xAuthHeader,
      xAuth,
    )

    myHeaders.append('Content-Type', 'application/json');

    console.log(myHeaders)

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(payload),
      redirect: 'follow',
    }
    fetch(`${MESSAGE_SERVER_PATH}/${postId}`, requestOptions)
    .then((response) => response.json().then((data) => (
      {
        data,
        token: response.headers.get('X-Authorization'),
        user: response.headers.get('X-User'),
      }
      )))
      .then(({ data, token, user }) => {
        if (token !== null || user !== null) {
        localStorage.setItem('X-Authorization', token)
        localStorage.setItem('X-User', user)
        } else {
          console.log(token)
          console.log(user)
          console.log(data.message)
        }
      })
    .catch((error) => console.log('error', error))
  }

  normalView = () => {
    const { post, loading } = this.state
    return loading ? <h4>loading...</h4> : (
      <div>
        <div>
          <div><h3>Post text</h3></div>
          <div>{post.text}</div>
          <div><h3>Post date</h3></div>
          <div>{post.postDate}</div>
        </div>
        <Button onClick={this.editHandler}>Edit</Button>
      </div>
)
}

editView = () => {
  const { post, previewMode } = this.state
  return previewMode ? this.previeView() : (
    <Formik
      initialValues={{ postText: post.text }}
      onSubmit={(values, { setSubmitting }) => this.previewHandler(values, setSubmitting)}
      validationSchema={Yup.object().shape({
        postText: Yup.string().required('Write something'),
      })}
    >
      <Form>
        <div><h3>Post date</h3></div>
        <div>{post.postDate}</div>
        <div>
          <label htmlFor="postText">Your post</label>
          <Field name="postText" />
        </div>
        <Button type="submit">Publish</Button>
      </Form>
    </Formik>
  )
}

previeView = () => {
  const { post, previewMode } = this.state
  return previewMode ? (
    <div>
      <div>
        <div><h3>Post text</h3></div>
        <div>{post.text}</div>
        <div><h3>Post date</h3></div>
        <div>{post.postDate}</div>
      </div>
      <Button onClick={this.saveHandler}>Save</Button>
      <Button onClick={this.returnEditHandler}>Edit</Button>
    </div>
) : <h4>loading...</h4>
}

  render() {
    const { editMode } = this.state
    return editMode ? this.editView() : this.normalView()
  }
}
  MessageDetails.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        postid: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }

export default MessageDetails