import React, { useEffect, useState } from 'react'
import './Login.css'
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from '../../app/firebase'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'

function Login () {
  const [alert, setAlert] = useState({ isOpen: false, message: "", type: null })

  useEffect(() => {
    setTimeout(() => {
      setAlert({ isOpen: false, message: "", type: null })
    }, 5000);
  }, [alert])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch()


  const register = () => {
    if (!name) setAlert({ isOpen: true, message: "Please enter a full name", type: "danger" })

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
          photoURL: profilePic
        })
          .then(() => {
            dispatch(login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: name,
              photoUrl: profilePic
            }));

            setAlert({ isOpen: true, message: "Register success", type: "success" })
          }).catch((error) => {
            setAlert({ isOpen: true, message: "Update profile is fail", type: "danger" })
            console.log('Error no dispatch', error)
            // throw new Error(error)
          })
      })
      .catch((error) => {
        setAlert({ isOpen: true, message: "Register failed", type: "danger" })
        console.log('Error no register', error)
        // throw new Error(error)
      })
  }

  const loginToApp = (event) => {
    event.preventDefault();
    if (!name) setAlert({ isOpen: true, message: "Please enter a email", type: "danger" })
    if (!email) setAlert({ isOpen: true, message: "Please enter a password", type: "danger" })

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
      }).catch(error => {
        setAlert({ isOpen: true, message: "Login failed", type: "danger" })
        console.log('Error no Login', error)
      })
  }

  return (
    <div className='login'>
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="" />
      <form >
        <input placeholder='Full name (required for registering' type="text"
          value={name} onChange={event => setName(event.target.value)} />
        <input placeholder='Profile pic URL (optional)' type="text"
          value={profilePic} onChange={event => setProfilePic(event.target.value)} />
        <input placeholder='Email' type="email"
          value={email} onChange={event => setEmail(event.target.value)} />
        <input placeholder='Password' type="password"
          value={password} onChange={event => setPassword(event.target.value)} />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member? {" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login