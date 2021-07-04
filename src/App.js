import firebase from "./components/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import SubmitPost from './components/SubmitPost'
import RenderPost from "./components/RenderPost";



const App = () => {
    const [username, setUsername] = useState(undefined)
    const auth = firebase.auth()
    const [user] = useAuthState(auth)
    const [allPosts, setAllPosts] = useState([])

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signOut = () => {
        auth.signOut()
    }

    const getUsername = () => {
        setUsername(user.displayName)
    }

    useEffect(() => {
        if (user !== null) {
            getUsername()
        }
    })

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
            <h1>holl'r</h1>
            {user
                ? <div>
                    <h3>Hello, {username}!</h3>
                    <button onClick={signOut}>Sign Out</button>
                    <SubmitPost userUID={user.uid} username={username} />
                    {allPosts.map((post) => {
                        return (
                            <RenderPost post={post} userInfo={user} key={post.id} />
                        )
                    })}
                </div>
                : <div>
                    <button onClick={signIn}>Sign In</button>
                </div>}
        </div>
    )
}

export default App