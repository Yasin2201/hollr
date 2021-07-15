import firebase from "firebase"
import { useState } from "react"
import '../Styles/Post.css'


const SubmitComment = ({ postInfo, currUser, changeReplyState, showReplies }) => {
    const [commentData, setCommentData] = useState('')
    const db = firebase.firestore()

    const getCommentData = (e) => {
        setCommentData(e.target.value)
    }

    const submitNewComment = (e) => {
        e.preventDefault()

        db.collection('Comments').doc().set({
            originalPostID: postInfo.id,
            userID: currUser.uid,
            displayName: currUser.displayName,
            data: commentData,
            datePosted: firebase.firestore.FieldValue.serverTimestamp()
        })

        setCommentData('')
        !showReplies && changeReplyState()
        e.target.reset()
    }

    return (
        <form onSubmit={submitNewComment} className="submitCommentForm">
            <textarea id="commentTextArea" type='text' maxLength="220" placeholder="Share your opinion!" onChange={getCommentData} />
            {commentData.length > 0 ? <button className='postCommentBtn' type='submit'>Comment</button> : <button className='postCommentBtn' disabled>Comment</button>}
        </form>
    )
}

export default SubmitComment