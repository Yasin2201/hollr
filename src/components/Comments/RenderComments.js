import { useEffect, useState } from "react"
import Comment from "./Comment";
import SubmitComment from "./SubmitComment";
import '../Styles/Post.css'
import commentIcon from '../Assets/speech-bubble.svg'

const RenderComments = ({ postInfo, currUser, allComments, navigateToProfile, showReplies, changeReplyState }) => {
    const [postsComments, setPostsComments] = useState('')
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        // Gets all comments relating to a specific post
        setPostsComments(allComments.filter((comments) => comments.originalPostID === postInfo.id))
        setLoadingComments(false)
    }, [postInfo, allComments])

    return (
        <div className='showReplies'>
            {loadingComments
                ? <p>Loading...</p>
                : <div className='repliesBtn'>
                    <img src={commentIcon} alt='comment' onClick={changeReplyState} />
                    <span >{postsComments.length > 0 && postsComments.length}</span>
                </div>}

            {showReplies
                &&
                <div>
                    <SubmitComment postInfo={postInfo} currUser={currUser} changeReplyState={changeReplyState} showReplies={showReplies} />
                    {postsComments.map((comment) => {
                        return (
                            <Comment currentUser={currUser} navigateToProfile={navigateToProfile} commentInfo={comment} key={comment.id} />
                        )
                    })}
                </div>}
        </div >
    )
}

export default RenderComments