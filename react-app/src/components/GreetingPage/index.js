import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import {getSingleQuote} from '../../store/quotes'
import moment from 'moment'

import './GreetingPage.css'

const GreetingPage = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const quote = useSelector(state => state.quotes)

  // const singleQuote = quote
  // console.log('singl', quote)
  // console.log(sessionUser)
  useEffect(async() => {
    await dispatch(getSingleQuote())
  }, [])

  function convert(input) {
    return moment(input, 'HH:mm:ss').format('h:mm A');
    // .format('h:mm:ss A')
  }

  const todayDate = () => {
    const date = moment().toDate().toString()
    const splitDate = date.split(' ')
    const newDate = splitDate.slice(0,1) + ', ' + splitDate.slice(1,2) + ' ' + splitDate.slice(2,3 ) +', ' + splitDate.slice(3,4)
    // const newDate = splitDate.slice(0,1) + ', ' + splitDate.slice(1,2) + ' ' + splitDate.slice(2,3 ) +', ' + splitDate.slice(3,4) + ' ' + convert(splitDate.slice(4, 5))
    return newDate

  }



  return (
    <div className='greet-card'>
      <div className='greet-image'></div>
      <h1>Hello {sessionUser.first_name}</h1>
      <h1>Today is {todayDate()} </h1>
      <h3>Ready to start some habits?</h3>
      <div className='greeting'>

      <div>
        <h2>"{quote?.quote}"</h2>
        <h2>- {quote?.author}</h2>
      </div>

      </div>
    </div>
  )
}

export default GreetingPage
