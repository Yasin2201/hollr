import firebase from "firebase";
import { useState } from "react";

const Comment = ({ commentInfo, currentUser }) => {
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
        <div>
            <div key={commentInfo.id} style={{ border: '1px solid black' }}>
                <p>{commentInfo.displayName}</p>
                <p>{commentInfo.data}</p>

                {
                    currentUser.uid === commentInfo.userID &&
                    <div>
                        <button onClick={onDelete}>Delete</button>
                        {
                            edit
                                ? <div>
                                    <button onClick={onEdit}>Cancel Edit</button>
                                    <input type='text' onChange={addEditData} />
                                    <button onClick={onEditSubmit}>Submit Edit</button>
                                </div>
                                : <button onClick={onEdit}>Edit</button>
                        }

                    </div>
                }
            </div>
        </div>
    )
}

export default Comment