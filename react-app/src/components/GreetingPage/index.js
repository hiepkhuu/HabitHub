import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import {getSingleQuote} from '../../store/quotes'

const GreetingPage = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.user)
  const quote = useSelector(state => state.quotes)
  // const singleQuote = quote
  console.log('singl', quote)
  useEffect(async() => {
    await dispatch(getSingleQuote())
  }, [dispatch])



  return (
    <>

      <h1>{sessionUser?.first_name}</h1>

      <h1>{quote?.quote?.q}</h1>

      <NavLink to={`/dashboard`}>
        <button>go to task log</button>
      </NavLink>

    </>
  )
}

export default GreetingPage
