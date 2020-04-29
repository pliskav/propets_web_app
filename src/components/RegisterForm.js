/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import { Formik, Form, useField } from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { encode } from 'base-64'

import Button from './ui/Button'

import { homePath } from '../utils/routes'
import { ACCOUNT_SERVER_PATH } from '../utils/externalPath'

const pasRegex = '^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))'

const RedisterSchema = Yup.object().shape(
  {
    name: Yup.string().required('This field is required'),
    email: Yup.string().required('This field is required').email('Must be a valid email'),
    password: Yup.string()
    .required('This field is required')
    .min(8, 'Must be 8 characters at least')
    .matches(pasRegex, 'Must contain at least one uppercase, one lowercase, one number'),
    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
  },
)

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

const registerUser = (values, setSubmitting, resetForm, history) => {
  console.log(values.name)
  const { name, email, password } = values
  const errorResponse = {}

  const myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    `Basic ${encode(`${email}:${password}`)}`,
  )
  myHeaders.append('Content-Type', 'application/json');

  const user = JSON.stringify({ name })
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: user,
    redirect: 'follow',
  }

  fetch(`${ACCOUNT_SERVER_PATH}/`, requestOptions)
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
    history.push(homePath)
    } else {
      errorResponse.status = data.status
      errorResponse.message = data.message
      console.log(xAuth)
      console.log(xUser)
      console.log(errorResponse)
    }
  })
  .catch((error) => console.log('error', error))
}

const RegisterForm = () => {
  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={{
          name: '', email: '', password: '', passwordConfirmation: '',
        }}
        validationSchema={RedisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)
          registerUser(values, setSubmitting, resetForm, history)
        }}
      >
        {
          (
            {
              dirty, handleReset, isSubmitting, isValid,
            },
          ) => (
            <Form>
              <div>
                <MyTextInput
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="off"
                />
              </div>
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
              <div>
                <MyTextInput
                  label="Confirm password"
                  name="passwordConfirmation"
                  type="text"
                  placeholder="Conform password"
                  autoComplete="off"
                />
              </div>
              <div className="button_wrapper">
                <Button disabled={!isValid || !dirty || isSubmitting} type="submit">Submit</Button>
                <Button onClick={handleReset} type="button">Reset</Button>
              </div>
            </Form>
          )
        }
      </Formik>
    </>
   )
}
export default RegisterForm