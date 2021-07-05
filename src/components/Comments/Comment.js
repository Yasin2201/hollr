import firebase from "firebase";

const Comment = ({ commentInfo, currentUser }) => {

    const deletePost = () => {
        const db = firebase.firestore()
        db.collection('Comments').doc(commentInfo.id).delete()
    }

    return (
        <div>
            <div key={commentInfo.id} style={{ border: '1px solid black' }}>
                <p>{commentInfo.displayName}</p>
                <p>{commentInfo.data}</p>
                {currentUser.uid === commentInfo.userID && <button onClick={deletePost}>Delete</button>}
            </div>
        </div>
    )
}

export default Comment