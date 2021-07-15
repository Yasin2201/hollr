import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const Comment = ({ commentInfo, currentUser, navigateToProfile }) => {
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState('')

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('Comments').doc(commentInfo.id).delete()
    }

    const onEdit = () => {
        setEdit(!edit)
    }

    const addEditData = (e) => {
        setEditData(e.target.value)
    }

    const onEditSubmit = () => {
        const db = firebase.firestore();
        db.collection("Comments").doc(commentInfo.id).update({ data: editData });
        setEditData('')
        setEdit(!edit)
    }

    return (
        <div className='comments'>
            <div key={commentInfo.id} >
                {
                    currentUser.uid === commentInfo.userID
                        ? <div className='comment-top'>
                            <Link to={`/profile/${commentInfo.userID}`} onClick={navigateToProfile} id={commentInfo.userID} className='username'>{commentInfo.displayName}</Link>
                            <div className='post-top-right'>
                                {
                                    edit
                                        ? <div>
                                            <button onClick={onEdit}>Cancel Edit</button>
                                            <input type='text' onChange={addEditData} />
                                            <button onClick={onEditSubmit}>Submit Edit</button>
                                        </div>
                                        : <button className='post-action-buttons' onClick={onEdit}>e</button>
                                }
                                <button className='post-action-buttons' onClick={onDelete}>d</button>
                            </div>
                        </div>
                        : <div>
                            <Link to={`/profile/${commentInfo.userID}`} onClick={navigateToProfile} id={commentInfo.userID} className='username'>{commentInfo.displayName}</Link>

                        </div>
                }
                <p className="postData">{commentInfo.data}</p>
            </div>
        </div>
    )
}

export default Comment