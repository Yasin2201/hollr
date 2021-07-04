import firebase from "firebase";
import { useState } from "react";
import Comment from "./Comment";

const RenderPost = ({ post, userInfo }) => {
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
            <p>{post.username}</p>
            <p>{post.data}</p>
            {userInfo.uid === post.userID && <button onClick={deletePost}>Delete</button>}
            {comment ?
                <div>
                    <Comment postInfo={post} userInfo={userInfo} changeCommentState={changeCommentState} />
                    <button onClick={changeCommentState}>cancel</button>
                </div>
                : <button onClick={changeCommentState}>Comment</button>}
            {showReplies ?
                <button onClick={changeReplyState}>Hide Replies</button>
                : <button onClick={changeReplyState}>Show Replies</button>}
        </div>
    )
}

export default RenderPost