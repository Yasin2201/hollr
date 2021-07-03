import firebase from "firebase";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import SubmitPost from "./SubmitPost";
import RenderPost from "./RenderPost";



const Login = () => {
    const [username, setUsername] = useState(undefined)
    const auth = firebase.auth()
    const [user] = useAuthState(auth)

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

    return (
        <div>
            {user
                ? <div>
                    <h3>Hello, {username}!</h3>
                    <button onClick={signOut}>Sign Out</button>
                    <SubmitPost userUID={user.uid} username={username} />
                    <RenderPost />
                </div>
                : <div>
                    <button onClick={signIn}>Sign In</button>
                </div>}
        </div>
    )
}

export default Login