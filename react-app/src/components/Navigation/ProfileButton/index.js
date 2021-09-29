import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, Redirect } from "react-router-dom";
import * as sessionActions from '../../../store/session';
import './ProfileButton.css'

function ProfileButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.logout());
    history.push('/')
    return <Redirect to={'/'}/>
  };

  if (!sessionUser) {
    return <Redirect to={'/'} />;
  }
  // await dispatch(logout());
  //   history.push('/')
  //   return <Redirect to={'/'} />


  return (
    <>
      <div className='menu-container'>
        <div className="account-button">
          <div onClick={openMenu}>
            <div className='profile-image'>
              <span className='far fa-smile'></span>
            </div>
            <span className='account-username'>{sessionUser?.username}</span>
            <span className='fas fa-chevron-down'></span>
          </div>
        </div>

        {showMenu && (

          <div className='profile-dropdown-container'>

            <div className="profile-dropdown">

                <div>
                  <span className='fas fa-user'></span>
                  <Link className='profile-link' to='/profile/setting'><span >Profile Settings</span></Link>
                </div>
                <div onClick={logout}>
                  <span className='fas fa-sign-out-alt'></span>
                  <span className='profile-link' to='/'>Log Out</span>
                </div>

            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default ProfileButton;
