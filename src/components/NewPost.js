/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {
Formik, Field, Form, ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import Button from './ui/Button'


import '../styles/input.css'
import Image from './ui/Image'
import { xAuthHeader, xUserHeader } from '../utils/requestConst'
import { ACCOUNT_SERVER_PATH, MESSAGE_SERVER_PATH } from '../utils/externalPath'
import Loader from './ui/Loader'


class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
      name: '',
      text: '',
      images: [],
      loading: true,
    }
  }

  componentDidMount() {
    const header = {
      'X-Authorization': localStorage.getItem(xAuthHeader),
    }
    try {
      axios({
        method: 'post',
        url: `${ACCOUNT_SERVER_PATH}/${localStorage.getItem(xUserHeader)}`,
        headers: header,
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          avatar: data.avatar,
          name: data.name,
          loading: false,
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

  sendMessage = (values, setSubmitting) => {
    const { postText } = values
    this.setState({
      text: postText,
    })

    const header = {
      'X-Authorization': localStorage.getItem(xAuthHeader),
    }
    try {
      const {
        text, avatar, name, images,
      } = this.state
      axios({
        method: 'post',
        url: `${MESSAGE_SERVER_PATH}`,
        data: {
          owner: {
            email: localStorage.getItem(xUserHeader),
            name,
            avatar,
          },
        text,
        images,
        },
        headers: header,
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        // eslint-disable-next-line react/prop-types
      const { history } = this.props;
      // eslint-disable-next-line react/prop-types
      history.push('/')
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
      setSubmitting(false)
    }

     render() {
      const PostValidation = Yup.object().shape(
        {
          postText: Yup.string().required('Write your post').max(1500, 'You exeeded maximum size'),
        },
      )
      const { avatar, name, loading } = this.state
      return loading ? <><Loader /></>
      : (
        <>
          <div className="post-welcome">
            Your new post! Simply text, add photos and publish.
          </div>
          <div className="editor-wrapper">
            <div className="text-container">
              <div className="text-doc">
                <div className="desc">
                  Text:
                </div>
                <div className="instruction">
                  up to 1500 char
                </div>
              </div>
              <div className="text-composer">
                <Formik
                  initialValues={{ postText: '' }}
                  validationSchema={PostValidation}
                  onSubmit={(values, { setSubmitting }) => this.sendMessage(values, setSubmitting)}
                >
                  <Form>
                    <div className="inputWrapper">
                      <div>
                        <Field className="inputText" name="postText" as="textarea" placeholder="Post a message.." rows={10} />
                        <ErrorMessage className="inputError" component="div" name="postText" />
                      </div>
                      <div className="image-container" />
                      <div className="editor-footer">
                        <div className="user-profile">
                          <div className="user-avatar">
                            <Image src={avatar} alt={name} />
                          </div>
                          <div className="user-name">
                            {name}
                          </div>
                        </div>
                        <div className="editor-control">
                          <Button type="submit">Publish</Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </>
      )
    }
}

export default withRouter(NewPost)