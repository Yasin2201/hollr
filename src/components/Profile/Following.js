import { useEffect, useState } from "react"
import firebase from "firebase"

const Following = ({ allUsers, currUser, currProfile }) => {
    const [followState, setFollowState] = useState(false)
    const [following, setFollowing] = useState([])
    // const [followers, setFollowers] = useState()
    const db = firebase.firestore()

    useEffect(() => {
        const unsubscribe = db.collection("Users").doc(currProfile.uid)
            .collection('Following').onSnapshot((querySnapshot) => {
                const following = []
                querySnapshot.forEach(doc => {
                    following.push(doc.id)
                });
                setFollowing(following)
            });
        return unsubscribe

    }, [db, currProfile])

    const followAction = () => {
        if (!followState) {
            db.collection("Users").doc(currProfile.uid).collection('Following').doc(currUser.uid).set({
                following: !followState
            });
            setFollowState(!followState)
        } else {
            db.collection("Users").doc(currProfile.uid).collection('Following').doc(currUser.uid).delete()
            setFollowState(!followState)
        }
    }
    return (
        <div>
            {currUser.uid === currProfile.uid
                ? <div></div>
                : followState ? <button onClick={followAction}>Unfollow</button> : <button onClick={followAction}>Follow</button>
            }
            Following 10
        </div>
    )
}

export default Following