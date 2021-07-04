import firebase from "firebase"
import { useEffect, useState } from "react"

const RenderComments = ({ postInfo }) => {
    const [allComments, setAllComments] = useState('')
    const [loadingComments, setLoadingComments] = useState(true)

    useEffect(() => {
        const db = firebase.firestore()

        const unsub = db.collection("Comments").where("orginalPostID", "==", postInfo.id)
            .get()
            .then((querySnapshot) => {
                const allCommentsData = []
                querySnapshot.forEach((doc) => allCommentsData.push({ ...doc.data(), id: doc.id }))
                setAllComments(allCommentsData)
                setLoadingComments(false)
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

        return unsub
    }, [postInfo.id])

    console.log(allComments)
    return (
        <div>
            {loadingComments ?
                <h3>loading</h3>
                : allComments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.username}</p>
                            <p>{comment.data}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default RenderComments