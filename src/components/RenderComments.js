import { useEffect, useState } from "react"
import Comment from "./Comment";

const RenderComments = ({ postInfo, currentUser, allComments }) => {
    const [postsComment, setPostsComments] = useState('')
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        setPostsComments(allComments.filter((comments) => comments.orginalPostID === postInfo.id))
        setLoadingComments(false)
    }, [postInfo, allComments])

    return (
        <div>
            {loadingComments
                ? <p>Loading...</p>
                : postsComment.map((comment) => {
                    return (
                        <Comment commentInfo={comment} currentUser={currentUser} key={comment.id} />
                    )
                })
            }
        </div>
    )
}

export default RenderComments