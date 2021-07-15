import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom"
import RenderComments from "../Comments/RenderComments";
import deleteIcon from '../Assets/delete.svg'
import editIcon from '../Assets/edit.svg'

const RenderPost = ({ currUser, post, allComments, navigateToProfile }) => {
    const [showReplies, setShowReplies] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editData, setEditData] = useState('')

    const onDelete = () => {
        const db = firebase.firestore()
        db.collection('Posts').doc(post.id).delete()
    }

    const onEdit = () => {
        setEdit(!edit)
    }

    const addEditData = (e) => {
        setEditData(e.target.value)
    }

    const onEditSubmit = () => {
        const db = firebase.firestore();
        db.collection("Posts").doc(post.id).update({ data: editData });
        setEditData('')
        setEdit(!edit)
    }

    const changeReplyState = () => {
        setShowReplies(!showReplies)
    }

    return (
        <div className='post' key={post.id}>
            <div className='post-top'>
                <Link to={`/profile/${post.userID}`} onClick={navigateToProfile} id={post.userID} className='username'>{post.displayName}</Link>
                {
                    currUser.uid === post.userID &&
                    <div className='post-top-right'>
                        {
                            edit
                                ? <div>
                                    <button onClick={onEdit}>Cancel Edit</button>
                                    <input type='text' onChange={addEditData} />
                                    <button onClick={onEditSubmit}>Submit Edit</button>
                                </div>
                                : <img src={editIcon} alt='edit' className='post-action-buttons' onClick={onEdit} />
                        }
                        <img src={deleteIcon} alt='delete' className='post-action-buttons' onClick={onDelete} />
                    </div>
                }
            </div>
            <p className='postData'>{post.data}</p>
            <div className='post-bottom'>
                <RenderComments postInfo={post} currentUser={currUser} allComments={allComments} navigateToProfile={navigateToProfile} changeReplyState={changeReplyState} showReplies={showReplies} />
            </div>
        </div>
    )
}

export default RenderPost