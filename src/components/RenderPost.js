import { useEffect, useState } from "react";
import firebase from "firebase";

const RenderPost = ({ post }) => {

    const deletePost = () => {
        const db = firebase.firestore()
        db.collection('Posts').doc(post.id).delete()
    }

    return (
        <div key={post.id} style={{ border: '1px solid black' }}>
            <p>{post.username}</p>
            <p>{post.data}</p>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}

export default RenderPost