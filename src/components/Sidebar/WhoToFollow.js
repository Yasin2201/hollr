import firebase from "firebase"
import { useEffect, useState } from "react"

const WhoToFollow = ({ allUsers, currUser }) => {
    const [following, setFollowing] = useState([])
    const usersNotFollowing = allUsers.filter(val => !following.includes(val.uid)).filter((user) => user.uid !== currUser.uid);


    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Users").doc(currUser.uid)
            .collection('Following').onSnapshot((querySnapshot) => {
                const isFollowingArr = []
                querySnapshot.forEach(doc => {
                    isFollowingArr.push(doc.id)
                });
                setFollowing(isFollowingArr)
            });
        return unsubscribe

    }, [currUser])

    return (
        <div className='whoToFollow-sidebar'>
            <div className='not-following-container'>
                {usersNotFollowing.map((user) => {
                    return (
                        <div key={user.uid}>
                            {user.displayName}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhoToFollow