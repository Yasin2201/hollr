import firebase from "firebase"
import { useState } from "react"
import '../Styles/SubmitPost.css'

const SubmitPost = ({ user }) => {
    const [postData, setPostData] = useState('')
    const db = firebase.firestore()

    const addData = (e) => {
        setPostData(e.target.value)
    }

    const submitNewPost = (e) => {
        e.preventDefault()

        if (user.isAnonymous) {
            db.collection('Posts').doc().set({
                userID: user.uid,
                displayName: `Anon #${user.uid}`,
                data: postData,
                datePosted: firebase.firestore.FieldValue.serverTimestamp()
            })
        } else {
            db.collection('Posts').doc().set({
                userID: user.uid,
                displayName: user.displayName,
                data: postData,
                datePosted: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

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