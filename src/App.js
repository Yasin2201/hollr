import firebase from "./components/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SubmitPost from './components/Posts/SubmitPost'
import RenderPost from "./components/Posts/RenderPost";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import WhoToFollow from "./components/Sidebar/WhoToFollow";
import Navbar from "./components/Navbar";
import './components/Styles/App.css'

const App = () => {
    const auth = firebase.auth()
    const [user] = useAuthState(auth)
    const [allPosts, setAllPosts] = useState([])
    const [customTimeline, setCustomTimeline] = useState([])
    const [allComments, setAllComments] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [navigateProfile, setNavigateProfile] = useState(undefined)
    const [following, setFollowing] = useState([])

    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const signInAnonymously = () => {
        firebase.auth().signInAnonymously();
    }

    const signOut = () => {
        auth.signOut()
    }

    //Get current users following status from database
    useEffect(() => {
        const db = firebase.firestore()

        if (user !== null) {
            const unsubscribe = db.collection("Users").doc(user.uid)
                .collection('Following').onSnapshot((querySnapshot) => {
                    const isFollowingArr = []
                    querySnapshot.forEach(doc => {
                        isFollowingArr.push(doc.id)
                    });
                    setFollowing(isFollowingArr)
                });
            return unsubscribe
        }

    }, [user])

    // get all submitted posts from database and create a custom timeline for current user depending on 
    // who they're following also get ALL posts from database
    useEffect(() => {
        const db = firebase.firestore()

        if (user !== null) {
            const unsubscribeCustomTimeline = db.collection("Posts")
                .orderBy("datePosted", "desc")
                .onSnapshot((querySnapshot) => {
                    const customTimelineData = []
                    querySnapshot.forEach((doc) => following.includes(doc.data().userID) || doc.data().userID === user.uid ? customTimelineData.push({ ...doc.data(), id: doc.id }) : null)
                    setCustomTimeline(customTimelineData)
                });

            const unsubscribeAllPosts = db.collection("Posts")
                .orderBy("datePosted", "desc")
                .onSnapshot((querySnapshot) => {
                    const postData = []
                    querySnapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
                    setAllPosts(postData)
                });
            return { unsubscribeCustomTimeline, unsubscribeAllPosts }
        }
    }, [following, user])

    //Get all submitted comments from database
    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Comments")
            .orderBy("datePosted", "desc")
            .onSnapshot((querySnapshot) => {
                const commentData = []
                querySnapshot.forEach((doc) => commentData.push({ ...doc.data(), id: doc.id }))
                setAllComments(commentData)
            });
        return unsubscribe
    }, [])

    //Get ALL users who have an account anonymous or not information
    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Users").onSnapshot((querySnapshot) => {
            const userData = []
            querySnapshot.forEach((doc) => userData.push({ ...doc.data(), uid: doc.id }))
            setAllUsers(userData)
        });
        return unsubscribe
    }, [])

    // Set a displayName for the current user
    useEffect(() => {
        const db = firebase.firestore()

        if (user !== null && !user.isAnonymous) {
            const unsubscribe = db.collection('Users').doc(user.uid).set({
                displayName: user.displayName
            })
            return unsubscribe
        } else if (user !== null && user.isAnonymous) {
            const unsubscribe = db.collection("Users").doc(user.uid).set({
                displayName: `Anon #${user.uid}`
            })
            return unsubscribe
        }
    }, [user])

    // Get the UID of the profile user is navigating to 
    const navigateToProfile = (e) => {
        setNavigateProfile(allUsers.find((user) => user.uid === e.target.id).uid)
    }

    return (
        <BrowserRouter>
            <div className="main">
                {user
                    ? <div className="mainBody">
                        <Navbar user={user} signOut={signOut} />
                        <Sidebar navigateToProfile={navigateToProfile} navigateProfile={navigateProfile} user={user} />
                        <WhoToFollow allUsers={allUsers} currUser={user} navigateToProfile={navigateToProfile} />
                        <Switch>
                            <Route exact path='/hollr'>
                                <div id='allPosts'>
                                    <SubmitPost user={user} />
                                    {customTimeline.map((post) => {
                                        return (
                                            <RenderPost post={post} currUser={user} key={post.id} allComments={allComments} navigateToProfile={navigateToProfile} />
                                        )
                                    })}
                                </div>
                            </Route>
                            <Route exact path={`/profile/${navigateProfile}`}>
                                <Profile currUser={user} allUsers={allUsers} navigateProfile={navigateProfile} allComments={allComments} allPosts={allPosts} navigateToProfile={navigateToProfile} />
                            </Route>
                        </Switch>
                    </div>
                    : <div className='signIn-Container'>
                        <div className='signIn-buttons-container'>
                            <h1>Welcome to holl'r</h1>
                            <button className='signIn-buttons' onClick={signIn}>Sign In with Google</button>
                            <span>OR</span>
                            <button className='signIn-buttons' onClick={signInAnonymously}>Sign In Anonymously</button>
                        </div>
                    </div>}
            </div>
        </BrowserRouter>
    )
}

export default App