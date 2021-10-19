import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect , useHistory} from 'react-router-dom'
import './SplashPage.css'
import { login } from '../../store/session';
// import './habithub-logo.png'
import Footer from '../Footer';

const SplashPage = () =>{
  const history=useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session)
  const [errors, setErrors] = useState([])

  const onLogin = async (e) => {
    e.preventDefault();
    const email = 'demo@aa.io'
    const password = 'password'
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    history.push('/greeting')
    return <Redirect to={'/greeting'} />
  };


    // if (sessionUser) {
    //   history.push('/greeting')
    // }


  // if (!sessionUser) {
  //   return <Redirect to={'/'} />;
  // }

  // if (!sessionUser){
  //   return <Redirect to={'/dashboard'} />;
  // }

  return (
    <div className='splash-page'>
       <div className='signed-out-navbar'>

                <NavLink   to='/' exact={true} activeClassName='active'>
                  <div  className='splash-button'>
                    <div className='' >
                        <p className=''></p>
                    </div>
                  </div>
                </NavLink>
                {/* <div></div>
                <div></div> */}

              <div className='entry'>
                    <div  style={{visibility:'visible'}}>
                            {errors.map((error, ind) => (
                              <div className='error-message' key={ind}>{error}</div>
                            ))}
                      </div>
                      <form style={{visibility:'visible'}} onSubmit={onLogin}>
                            <button type='submit'>Demo Login</button>
                      </form>
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
          <div className='splash-photo-container'>

            <div className='splash-photo'>
              <div className='msg-1'>
                  <p >MOTIVATION GETS YOU STARTED...</p>
                  <p className='habithub-msg'>HABITHUB</p>
                  <p className='habithub-sub'>KEEPS YOU GOING</p>
              </div>
              <div className='msg-2'>

                <h1>HIT YOUR TARGETS, RECEIVE REWARDS</h1>
                <p>Focus on what truly matters with HabitHub. Build the best version of yourself by mastering your habits.</p>

              </div>
            </div>


            <div className='how-div'>
              <h1>How it Works?</h1>
              <p>Habit building in its essential steps: choose a habit, actually remember to do it and track your development.</p>
              <div className='steps-container'>
                    <div className='steps'>
                      {/* <div className='step-img1'></div> */}
                      <div className="far fa-list-alt"></div>
                      <div className='step-header'>#1 Set up Habits</div>
                      <div className='step-detail'>Create a list of habits to create your daily routine and start your journey.</div>
                    </div>
                    <div className='steps'>
                      {/* <div className='step-img2'></div> */}
                      <div class="far fa-bell"></div>
                      <div className='step-header'>#2 Track Your Progress</div>
                      <div className='step-detail'>See your habits develop over time with streaks and a garden. </div>
                    </div>
                    <div className='steps'>
                      {/* <div className='step-img3'></div> */}
                      <div className='fas fa-medal big'></div>
                      <div className='step-header'>#3 Unlock Rewards</div>
                      <div className='step-detail'>Keep yourself accountable with rewards you choose for yourself.</div>
                    </div>

              </div>
            </div>

          </div>
          < Footer />


    </div>
  )
}
export default SplashPage
