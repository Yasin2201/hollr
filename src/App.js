import firebase from "./components/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import SubmitPost from './components/SubmitPost'
import RenderPost from "./components/RenderPost";
import Profile from "./components/Profile/Profile";


const App = () => {
    const [username, setUsername] = useState(undefined)
    const auth = firebase.auth()
    const [user] = useAuthState(auth)
    const [allPosts, setAllPosts] = useState([])
    const [allComments, setAllComments] = useState([])

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

    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Comments").onSnapshot((querySnapshot) => {
            const commentData = []
            querySnapshot.forEach((doc) => commentData.push({ ...doc.data(), id: doc.id }))
            setAllComments(commentData)
        });

        return unsubscribe
    }, [])

    return (
        <BrowserRouter>
            <div>
                <Link to='/'>
                    <h1 >holl'r</h1>
                </Link>
                {user
                    ? <div>
                        <button onClick={signOut}>Sign Out</button>
                        <h3>Hello, {username}!</h3>
                        <Link to={`/${user.uid}`}>
                            <button >my Profile</button>
                        </Link>
                        <Switch>
                            <Route exact path='/'>
                                <SubmitPost userUID={user.uid} username={username} />
                                {allPosts.map((post) => {
                                    return (
                                        <RenderPost post={post} userInfo={user} key={post.id} allComments={allComments} />
                                    )
                                })}
                            </Route>
                            <Route exact path={`/${user.uid}`}>
                                <Profile userInfo={user} />
                            </Route>
                        </Switch>
                    </div>
                    : <div>
                        <button onClick={signIn}>Sign In</button>
                    </div>}
            </div>
        </BrowserRouter>
    )
}

export default App