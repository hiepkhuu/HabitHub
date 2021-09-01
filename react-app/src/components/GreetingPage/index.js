import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import {getSingleQuote} from '../../store/quotes'

import './GreetingPage.css'

const GreetingPage = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const quote = useSelector(state => state.quotes)

  // const singleQuote = quote
  // console.log('singl', quote)
  console.log(sessionUser)
  useEffect(async() => {
    await dispatch(getSingleQuote())
  }, [])


  return (
    <div className='greet-card'>
      <div className='greet-image'></div>
      <h1>Hey {sessionUser.first_name}, You Got This!</h1>
      <h3>Fuel yourself with an inspiring message:</h3>
      <div className='greeting'>

      <div>
        <h2>"{quote?.quote}"</h2>
        <h2>- {quote?.author}</h2>
      </div>
      {/* <NavLink to={`/dashboard`}>
        <button>Habit Dashboard =></button>
  </NavLink>*/}
      </div>
    </div>
  )
}

export default GreetingPage
