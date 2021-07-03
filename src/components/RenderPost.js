import firebase from "firebase";
import { useState } from "react";
import Comment from "./Comment";

const RenderPost = ({ post, userUID }) => {
    const [comment, setComment] = useState(false)

    const deletePost = () => {
        const db = firebase.firestore()
        db.collection('Posts').doc(post.id).delete()
    }

    const changeCommentState = () => {
        setComment(!comment)
    }
    return (
        <div key={post.id} style={{ border: '1px solid black' }}>
            <p>{post.username}</p>
            <p>{post.data}</p>
            {userUID === post.userID && <button onClick={deletePost}>Delete</button>}
            {comment ?
                <div>
                    <Comment />
                    <button onClick={changeCommentState}>cancel</button>
                </div>
                : <button onClick={changeCommentState}>Comment</button>}
        </div>
    )
}

export default RenderPost