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


    return (
        <div>

        </div>
    )
}

export default Following