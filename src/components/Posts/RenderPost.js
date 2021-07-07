import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom"
import SubmitComment from "../Comments/SubmitComment";
import RenderComments from "../Comments/RenderComments";

const RenderPost = ({ currUser, post, userInfo, allComments, navigateToProfile }) => {
    const [comment, setComment] = useState(false)
    const [showReplies, setShowReplies] = useState(false)

    const deletePost = () => {
        const db = firebase.firestore()
        db.collection('Posts').doc(post.id).delete()
    }

    const changeCommentState = () => {
        setComment(!comment)
    }

    const changeReplyState = () => {
        setShowReplies(!showReplies)
    }

    return (
        <div key={post.id} style={{ border: '1px solid black' }}>
            <Link to={`/profile/${post.userID}`} onClick={navigateToProfile} id={post.userID}>{post.displayName}</Link>
            <p>{post.data}</p>
            {currUser.uid === post.userID && <button onClick={deletePost}>Delete</button>}
            {comment ?
                <div>
                    <button onClick={changeCommentState}>cancel</button>
                    <SubmitComment postInfo={post} userInfo={userInfo} changeCommentState={changeCommentState} changeReplyState={changeReplyState} showReplies={showReplies} />
                </div>
                : <button onClick={changeCommentState}>Comment</button>}
            <RenderComments postInfo={post} currentUser={userInfo} allComments={allComments} changeReplyState={changeReplyState} showReplies={showReplies} />
        </div>
    )
}

export default RenderPost