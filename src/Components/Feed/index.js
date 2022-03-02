import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from '../InputOption'
import Post from '../Post'

import {
  Create, Image, Subscriptions,
  EventNote, CalendarViewDay
} from '@mui/icons-material'
import {
  db, addDoc, getDocs,
  collection, serverTimestamp
} from '../../app/firebase'
import FlipMove from 'react-flip-move'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Feed () {
  const user = useSelector(selectUser)
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getDocs(collection(db, "posts"))
      .then(({ docs }) => {
        setPosts(docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        })))
      })
  }, [posts])


  const sendPost = (event) => {
    event.preventDefault()
    try {
      addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl,
        timestamp: serverTimestamp()
      })
        .finally(() => {
          setInput("")
        })
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form action="">
            <input type="text" value={input}
              onChange={event => setInput(event.target.value)} />
            <button type='submit'
              onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed_input-options">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Vídeos" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#7fc15e" />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
          <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        )}
      </FlipMove>

    </div>
  )
}

export default Feed