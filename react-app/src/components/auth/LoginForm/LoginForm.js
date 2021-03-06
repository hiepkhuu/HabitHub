import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect ,NavLink, useHistory} from 'react-router-dom';
import { login } from '../../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const history= useHistory()
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  // console.log(email, password)

  const onLogin = async (e) => {

    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    history.push('/greeting')
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (sessionUser) {
    return <Redirect to={'/dashboard'} />;
  }
  //  if (!sessionUser){
  //   return <Redirect to={'/'} />;
  // }

  return (
    <>
    <div className='login-page'>

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
          {/* <div className='login-photo'></div> */}
          <form className='login-form' onSubmit={onLogin}>

            <div className='short-logo'></div>
            <div  >
              {errors.map((error, ind) => (
                <div className='error-message' key={ind}>{error}</div>
              ))}
            </div>
            <div>
              {/* <label htmlFor='email'>Email</label> */}
              <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              {/* <label htmlFor='password'>Password</label> */}
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />

            </div>
            <button type='submit' >Login</button>
            <div>Don't have an account? <NavLink className='nav-links' to='sign-up'>Sign Up</NavLink></div>
          </form>
      </div>
    </div>
    </>

  );
};

export default LoginForm;
