import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import {getSingleQuote} from '../../store/quotes'

const GreetingPage = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.user)
  const quote = useSelector(state => state.quotes.quote)

  useEffect(async() => {
    await dispatch(getSingleQuote())
  }, [])



  return (
    <>
    
      <h1>greeting page</h1>

      <h1>{quote[0]?.q}</h1>

      <NavLink to={`/dashboard`}>
        <button>go to task log</button>
      </NavLink>

    </>
  )
}

export default GreetingPage
