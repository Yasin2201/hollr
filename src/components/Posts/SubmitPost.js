import firebase from "firebase"
import { useState } from "react"
import '../Styles/SubmitPost.css'

const SubmitPost = ({ userUID, username }) => {
    const [postData, setPostData] = useState('')
    const db = firebase.firestore()

    const addData = (e) => {
        setPostData(e.target.value)
    }

    const submitNewPost = (e) => {
        e.preventDefault()

        db.collection('Posts').doc().set({
            userID: userUID,
            displayName: username,
            data: postData,
            datePosted: firebase.firestore.FieldValue.serverTimestamp()
        })

        setPostData('')
        e.target.reset()
    }

    return (
        <form onSubmit={submitNewPost} id="submitPostForm">
            <textarea type='text' maxLength="250" onChange={addData} placeholder="How are you feeling?" />
            {
                postData.length < 1
                    ? <button className='submitPostBtn' type='submit' disabled>Post</button>
                    : <button className='submitPostBtn' type='submit'>Post</button>
            }
        </form>
    )
}

export default SubmitPost