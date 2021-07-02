import firebase from "firebase"
import { useState } from "react"

const Posts = ({ userUID }) => {
    const [postData, setPostData] = useState('')
    const db = firebase.firestore()

    const addData = (e) => {
        setPostData(e.target.value)
    }



    return (
        <div>
            <form>
                <input type='text' onChange={addData} />
                {postData.length < 1 ? <button type='submit' disabled>Post</button> : <button type='submit'>Post</button>}
            </form>
        </div>
    )
}

export default Posts