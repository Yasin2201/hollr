import { useEffect, useState } from "react";
import firebase from "firebase";

const RenderPost = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Posts").onSnapshot((querySnapshot) => {
            const postData = []
            querySnapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
            setAllPosts(postData)
        });
        return unsubscribe
    }, [])

    return (
        <div>
            {
                allPosts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.data}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RenderPost