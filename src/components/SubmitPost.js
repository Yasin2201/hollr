import firebase from "firebase"
import { useState } from "react"

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
            username: username,
            data: postData,
            datePosted: firebase.firestore.FieldValue.serverTimestamp()
        })

        setPostData('')
        e.target.reset()
    }

    // console.log(allPosts)

    return (
        <div>
            <form onSubmit={submitNewPost}>
                <input type='text' onChange={addData} />
                {postData.length < 1 ? <button type='submit' disabled>Post</button> : <button type='submit'>Post</button>}
            </form>
        </div>
    )
}

export default SubmitPost