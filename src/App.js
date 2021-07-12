import firebase from "./components/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SubmitPost from './components/Posts/SubmitPost'
import RenderPost from "./components/Posts/RenderPost";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar";


const App = () => {
    const auth = firebase.auth()
    const [user] = useAuthState(auth)
    const [allPosts, setAllPosts] = useState([])
    const [allComments, setAllComments] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [navigateProfile, setNavigateProfile] = useState(undefined)

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signOut = () => {
        auth.signOut()
    }

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

    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Users").onSnapshot((querySnapshot) => {
            const userData = []
            querySnapshot.forEach((doc) => userData.push({ ...doc.data(), uid: doc.id }))
            setAllUsers(userData)
        });
        return unsubscribe
    }, [])

    useEffect(() => {
        const db = firebase.firestore()

        if (user !== null) {
            const unsubscribe = db.collection("Users").doc(user.uid)
                .collection("Followers").doc(user.uid)
            return unsubscribe
        }

    }, [user])

    useEffect(() => {
        const db = firebase.firestore()

        if (user !== null) {
            const unsubscribe = db.collection('Users').doc(user.uid).set({
                displayName: user.displayName
            })
            return unsubscribe
        }
    }, [user])

    const navigateToProfile = (e) => {
        setNavigateProfile(allUsers.find((user) => user.uid === e.target.id).uid)
    }

    return (
        <BrowserRouter>
            <div>
                {user
                    ? <div>
                        <Navbar user={user} signOut={signOut} />
                        <Sidebar navigateToProfile={navigateToProfile} navigateProfile={navigateProfile} user={user} />
                        <Switch>
                            <Route exact path='/'>
                                <SubmitPost userUID={user.uid} username={user.displayName} />
                                {allPosts.map((post) => {
                                    return (
                                        <RenderPost post={post} currUser={user} userInfo={user} key={post.id} allComments={allComments} navigateToProfile={navigateToProfile} />
                                    )
                                })}
                            </Route>
                            <Route exact path={`/profile/${navigateProfile}`}>
                                <Profile currUser={user} allUsers={allUsers} navigateProfile={navigateProfile} allComments={allComments} allPosts={allPosts} navigateToProfile={navigateToProfile} />
                            </Route>
                        </Switch>
                    </div>
                    : <div>
                        <Navbar />
                        <button onClick={signIn}>Sign In</button>
                    </div>}
            </div>
        </BrowserRouter>
    )
}

export default App