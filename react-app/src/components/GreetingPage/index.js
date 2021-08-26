import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'


const GreetingPage = () => {

  const sessionUser = useSelector(state => state.user)


  return (
    <>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>

      <NavLink to={`/hub`}>
        <button>go to task log</button>
      </NavLink>

    </>
  )
}

export default GreetingPage
