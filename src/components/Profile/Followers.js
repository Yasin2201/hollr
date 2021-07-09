import { useEffect, useState } from "react"
import firebase from "firebase"


const Followers = ({ navigateProfile, profile, currUser, setFollowButton }) => {
    const [followers, setFollowers] = useState([])
    const db = firebase.firestore()

    useEffect(() => {
        const unsubscribe = db.collection("Users").doc(navigateProfile)
            .collection('Followers').onSnapshot((querySnapshot) => {
                const followersArr = []
                querySnapshot.forEach(doc => {
                    followersArr.push(doc.id)
                });
                setFollowers(followersArr)
                followersArr.includes(currUser.uid) ? setFollowButton(true) : setFollowButton(false)
            });
        return unsubscribe

    }, [db, profile, currUser])

    return (
        <div>
            <h3 onClick={() => console.log(followers)}>Followers: {followers.length}</h3>
        </div>
    )
}

export default Followers