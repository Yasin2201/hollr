import { useEffect, useState } from "react"
import Comment from "./Comment";
import SubmitComment from "./SubmitComment";
import '../Styles/Post.css'
import commentIcon from '../Assets/speech-bubble.svg'

const RenderComments = ({ postInfo, currentUser, allComments, navigateToProfile, showReplies, changeReplyState }) => {
    const [postsComments, setPostsComments] = useState('')
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
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
                    <SubmitComment postInfo={postInfo} currUser={currentUser} changeReplyState={changeReplyState} showReplies={showReplies} />
                    {postsComments.map((comment) => {
                        return (
                            <Comment currentUser={currentUser} navigateToProfile={navigateToProfile} commentInfo={comment} key={comment.id} />
                        )
                    })}
                </div>}
        </div >
    )
}

export default RenderComments