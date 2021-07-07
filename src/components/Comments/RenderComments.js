import { useEffect, useState } from "react"
import Comment from "./Comment";

const RenderComments = ({ postInfo, currentUser, allComments, navigateToProfile, showReplies, changeReplyState }) => {
    const [postsComments, setPostsComments] = useState('')
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        setPostsComments(allComments.filter((comments) => comments.originalPostID === postInfo.id))
        setLoadingComments(false)
    }, [postInfo, allComments])

    return (
        <div>
            {loadingComments
                ? <p>Loading...</p>
                : postsComments.length > 0
                    ? showReplies
                        ? <div>
                            <button onClick={changeReplyState}>hide replies</button>
                            {postsComments.map((comment) => {
                                return (
                                    <Comment currentUser={currentUser} navigateToProfile={navigateToProfile} commentInfo={comment} key={comment.id} />
                                )
                            })}
                        </div>
                        : <button onClick={changeReplyState}>show replies {postsComments.length}</button>
                    : <div></div>
            }
        </div>
    )
}

export default RenderComments