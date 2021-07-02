import firebase from "firebase"
import { useState } from "react"

const Posts = ({ userUID }) => {
    const [postData, setPostData] = useState('')
    const db = firebase.firestore()

    const addData = (e) => {
        setPostData(e.target.value)
    }

    const submitPost = (e) => {
        e.preventDefault()

        db.collection('Posts').doc().set({
            user: userUID,
            data: postData,
            datePosted: firebase.firestore.FieldValue.serverTimestamp()
        })

        setPostData('')
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={submitPost}>
                <input type='text' onChange={addData} />
                {postData.length < 1 ? <button type='submit' disabled>Post</button> : <button type='submit'>Post</button>}
            </form>
        </div>
    )
}

export default Posts