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

            </div>
            <span>name goes here</span>
          </div>
        </div>

        {showMenu && (
          // <div  className="profile-dropdown-container">
          <div>
            {/* <div className='triangle-dropdown'>hello</div> */}
            <div className="profile-dropdown">
              <div className='user-link-container'>
                <Link className='user-link' to={`/dashboard`}>{sessionUser?.first_name}   {sessionUser?.last_name}</Link>
                {/* <p>{user.email}</p> */}
                <div>

                  <button onClick={logout}>
                    <Link className='logout-link' to='/'>Log Out</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default ProfileButton;
