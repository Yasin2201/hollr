import firebase from "firebase"
import { useState } from "react"

const SubmitComment = ({ postInfo, userInfo, changeCommentState, changeReplyState, showReplies }) => {
    const [commentData, setCommentData] = useState('')
    const db = firebase.firestore()

    const getCommentData = (e) => {
        setCommentData(e.target.value)
    }

    const submitNewComment = (e) => {
        e.preventDefault()

        db.collection('Comments').doc().set({
            originalPostID: postInfo.id,
            userID: userInfo.uid,
            displayName: userInfo.displayName,
            data: commentData,
            datePosted: firebase.firestore.FieldValue.serverTimestamp()
        })

        setCommentData('')
        changeCommentState()
        showReplies && changeReplyState()
        e.target.reset()
    }

    return (
        <form onSubmit={submitNewComment}>
            <input type='text' onChange={getCommentData} />
            {commentData.length > 0 ? <button type='submit'>Post Comment</button> : <button disabled>Post Comment</button>}
        </form>
    )
}

export default SubmitComment