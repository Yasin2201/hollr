import { useState } from "react"

const Comment = ({ postInfo, userUID }) => {
    const [commentData, setCommentData] = useState('')

    const submitComment = (e) => {
        e.preventDefault()
        console.log('working')
    }

    const getCommentData = (e) => {
        setCommentData(e.target.value)
    }
    //git commit -m "disable post comment btn if no input"
    return (
        <form onSubmit={submitComment}>
            <input type='text' onChange={getCommentData} />
            {commentData.length > 0 ? <button type='submit'>Post Comment</button> : <button disabled>Post Comment</button>}
        </form>
    )
}

export default Comment