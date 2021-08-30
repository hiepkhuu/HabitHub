import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'


const GreetingPage = () => {

  const sessionUser = useSelector(state => state.user)
  let quote;
  const fetchQuote = () =>{
    fetch("https://zenquotes.io/api/today")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      quote = data
      console.log(quote)
    });
  }

  useEffect(() => {
    fetchQuote()
  }, [])



  return (
    <>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>greeting page</h1>
      <h1>{quote}</h1>
      <h1>greeting page</h1>
      {fetchQuote()}
      <NavLink to={`/dashboard`}>
        <button>go to task log</button>
      </NavLink>

    </>
  )
}

export default GreetingPage
