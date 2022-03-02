import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from '../../features/userSlice'
import { auth, signOut } from '../../app/firebase'
import Login from '../Login'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Feed from '../../Components/Feed';
import Widgets from '../../Components/Widgets';

function App () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const { email, uid, displayName, photoURL } = userAuth
        dispatch(login({ email, uid, displayName, photoUrl: photoURL }))
      } else {
        signOut(auth)
          .then(() => dispatch(logout()))
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
