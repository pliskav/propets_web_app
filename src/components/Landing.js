import React from 'react'
import { useHistory } from 'react-router-dom'
import { authPath } from '../utils/routes';
import Button from './ui/Button'


const Landing = () => {
  const history = useHistory();

  const redirectAuthHandler = () => {
    history.push(authPath);
  }

  return (
    <>
      <h1>Landing component</h1>
      <div><Button type="button" onClick={redirectAuthHandler}>I lost my pet</Button></div>
      <div><Button type="button" onClick={redirectAuthHandler}>I found a pet</Button></div>
    </>
  )
}

export default Landing
