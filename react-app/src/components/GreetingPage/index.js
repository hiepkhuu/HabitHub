import React, {useEffect} from 'react'
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
  }, [dispatch])



  return (
    <div className='greet-card'>

      <h1>Hey {sessionUser.first_name}, You've Got This!</h1>
      <div>
        <h2>"{quote?.quote?.q}"</h2>
        <h2>- {quote?.quote?.a}</h2>
      </div>
      <NavLink to={`/dashboard`}>
        <button>Habit Dashboard =></button>
      </NavLink>

    </div>
  )
}

export default GreetingPage
