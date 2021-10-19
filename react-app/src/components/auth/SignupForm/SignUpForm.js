import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthday, setBirthday] = useState('');


  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, firstname, lastname,birthday));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/greeting' />;
  }

  return (
    <div className='signup-page'>
         <div className='signed-out-navbar'>
              <NavLink   to='/' exact={true} activeClassName='active'>
                  <div  className='splash-button'>
                    <div className='' >
                        <p className=''></p>
                    </div>
                  </div>
                </NavLink>
              <div className='entry'>
                <NavLink className='NavLink' to='/login' exact={true} activeClassName='active'>
                  <div className='entry logout' >
                      <p className=''>Login</p>
                  </div>
                </NavLink>
                <NavLink className='NavLink' to='/sign-up' exact={true} activeClassName='active'>
                  <div className='entry logout' >
                      <p className='entry p'>Sign Up</p>
                  </div>
                </NavLink>
              </div>
          </div>


    <div className='form-container'>
        {/* <div className='signup-photo'></div> */}
        <form className='signup-form' onSubmit={onSignUp}>
          <div className='logo-container'>
             <div className='short-logo'></div>
          </div>
          <div className='error-container'>
            {errors.map((error, ind) => (
              <div  className='error-message' key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <input
              type='text'
              name='firstname'
              placeholder='firstname'
              onChange={(e)=> setFirstname(e.target.value)}
              value={firstname}
            ></input>
            <input
              type='text'
              name='lastname'
              placeholder='lastname'
              onChange={(e)=> setLastname(e.target.value)}
              value={lastname}
            ></input>
          </div>

          <div>
            <input
              type='text'
              name='username'
              placeholder='username'
              onChange={updateUsername}
              value={username}
            ></input>
            <input
              type='text'
              name='email'
              placeholder='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div id='date-div'>
            <input
              type='date'
              name='birthday'
              placeholder='YYYY/MM/DD'
              onChange={(e)=> setBirthday(e.target.value)}
              value={birthday}
            ></input>
            <input className='invisible-input'></input>
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='password'
              onChange={updatePassword}
              value={password}
            ></input>
            <input
              type='password'
              name='repeat_password'
              placeholder='repeat password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              // required={true}
            ></input>
          </div>
          <div className='bottom-form'>
              <button type='submit'>Sign Up</button>
              <div>
                  <span>Already have an account? </span>
                  <div><NavLink className='nav-links' to='login'> Log in</NavLink></div>

              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
