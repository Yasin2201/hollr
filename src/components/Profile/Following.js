import { useEffect, useState } from "react"
import firebase from "firebase"

const Following = ({ navigateProfile, profile, currUser }) => {
    const [following, setFollowing] = useState([])
    const db = firebase.firestore()

    useEffect(() => {
        const unsubscribe = db.collection("Users").doc(navigateProfile)
            .collection('Following').onSnapshot((querySnapshot) => {
                const isFollowingArr = []
                querySnapshot.forEach(doc => {
                    isFollowingArr.push(doc.id)
                });
                setFollowing(isFollowingArr)
            });
        return unsubscribe

    }, [db, profile, currUser])

    return (
        <div>
            <h3 onClick={() => console.log(following)}>Following: {following.length}</h3>
        </div>
    )
}

export default Following