import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import deleteIcon from '../Assets/delete.svg'
import editIcon from '../Assets/edit.svg'
import cancelIcon from '../Assets/close.svg'

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
                                        ? <div className='editPostModal'>
                                            <div className='modal-box'>
                                                <h3 className='edit-modal-username'>{currentUser.isAnonymous ? "Anonymous" : currentUser.displayName}</h3>
                                                <img src={cancelIcon} alt='cancel edit' className='cancelEditBtn' onClick={onEdit} />
                                                <textarea className='modal-text' type='text' maxLength='220' onChange={addEditData} defaultValue={commentInfo.data} />
                                                {editData.length > 0 ? <button className='submitEditBtn' onClick={onEditSubmit}>Submit</button> : <button className='submitEditBtnDisabled'>Submit</button>}
                                            </div>
                                        </div>
                                        : <img src={editIcon} alt='delete' className='post-action-buttons' onClick={onEdit} />
                                }
                                <img src={deleteIcon} alt='delete' className='post-action-buttons' onClick={onDelete} />
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