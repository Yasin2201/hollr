import firebase from "firebase";
import { useState } from "react";
import Comment from "./Comment";
import RenderComments from "./RenderComments";

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
                    <button onClick={changeCommentState}>cancel</button>
                    <Comment postInfo={post} userInfo={userInfo} changeCommentState={changeCommentState} />
                </div>
                : <button onClick={changeCommentState}>Comment</button>}

            {showReplies ?
                <div>
                    <button onClick={changeReplyState}>Hide Replies</button>
                    <RenderComments postInfo={post} />
                </div>
                : <button onClick={changeReplyState}>Show Replies</button>}
        </div>
    )
}

export default RenderPost