import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
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

  };


  return (
    <>
      <div className='menu-container'>
        <div className="account-button">
          <div onClick={openMenu}>
            <div className='profile-image'>
              <span className='far fa-smile'></span>
            </div>
            <span className='account-username'>{sessionUser.username}</span>
          </div>
        </div>

        {showMenu && (
          // <div  className="profile-dropdown-container">
          <div>
            {/* <div className='triangle-dropdown'>hello</div> */}
            <div className="profile-dropdown">
              {/* <div className='user-link-container'> */}
                <div>
                  <span className='fas fa-user'></span>
                  <Link className='profile-link' to='/profile/setting'><span >Profile Settings</span></Link>
                </div>
                <div onClick={logout}>
                  <span className='fas fa-sign-out-alt'></span>
                  <Link className='profile-link' to='/'>Log Out</Link>
                </div>
              {/* </div> */}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default ProfileButton;
