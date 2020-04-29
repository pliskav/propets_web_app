/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React from 'react'
import { withRouter } from 'react-router-dom'
import {
 Formik, Form, useField,
} from 'formik'
import * as Yup from 'yup'
import { encode } from 'base-64'
import Button from './ui/Button'

import { rootPath } from '../utils/routes';
import { ACCOUNT_SERVER_PATH } from '../utils/externalPath'

import '../styles/auth.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  sendLogin = (values, setSubmitting, resetForm) => {
            const { email, password } = values
            const errorResponse = {}

            const myHeaders = new Headers();
            myHeaders.append(
              'Authorization',
              `Basic ${encode(`${email}:${password}`)}`,
            );

            const requestOptions = {
              method: 'POST',
              headers: myHeaders,
              redirect: 'follow',
            };

            fetch(`${ACCOUNT_SERVER_PATH}/${email}`, requestOptions)
            .then((res) => res.json().then((data) => (
              {
                data,
                xAuth: res.headers.get('X-Authorization'),
                xUser: res.headers.get('X-User'),
              }
              )))
            .then(({ data, xAuth, xUser }) => {
              if (xAuth !== null || xUser !== null) {
              localStorage.setItem('X-Authorization', xAuth)
              localStorage.setItem('X-User', xUser)
              setSubmitting(false)
              resetForm()
              if (localStorage.getItem('X-Authorization')) {
                const { history } = this.props;
                history.push(rootPath)
}
} else {
                errorResponse.status = data.status
                errorResponse.message = data.message
              }
            })
            .catch((error) => console.log('error', error))
          }

  render() {
    const SignInSchema = Yup.object().shape({
      email: Yup.string().required('This field is required').email('Must be a valid email'),
      password: Yup.string().required('This field is required').min(8, 'Must be 8 characters at least'),
    })

    const MyTextInput = ({ label, ...props }) => {
      const [field, meta] = useField(props)
      return (
        <>
          <label htmlFor={props.id || props.name} className="inputLabel">{label}</label>
          <input className="input" {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="inputError">{meta.error}</div>
          ) : null}
        </>
      )
    }
    return (
      <>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            this.sendLogin(values, setSubmitting, resetForm)
          }}
        >
          {(
            {
              dirty, handleReset, isValid, isSubmitting,
            },
) => (
  <Form>
    <div>
      <MyTextInput
        label="Email"
        name="email"
        type="text"
        placeholder="Email"
        autoComplete="off"
      />
    </div>
    <div>
      <MyTextInput
        label="Password"
        name="password"
        type="text"
        placeholder="Password"
        autoComplete="off"
      />
    </div>
    <div className="button_wrapper">
      <Button disabled={!isValid || !dirty || isSubmitting} type="submit">Submit</Button>
      <Button onClick={handleReset} type="button">Reset</Button>
    </div>
  </Form>
              )}
        </Formik>
      </>
    )
  }
}

export default withRouter(LoginForm)