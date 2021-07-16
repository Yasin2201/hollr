import firebase from "firebase"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../Styles/WhoToFollow.css'

const WhoToFollow = ({ allUsers, currUser, navigateToProfile }) => {
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
        <div id='whoToFollow-sidebar'>
            <div className='not-following-container'>
                <h2 className='whoToFollow-title'>Who To Follow</h2>
                {usersNotFollowing.map((user) => {
                    return (
                        <div key={user.uid} className="users-follow">
                            <Link to={`/profile/${user.uid}`} onClick={navigateToProfile} id={user.uid} className='username'>{user.displayName}</Link>
                        </div>
                    )
                })}
                {usersNotFollowing.length < 1 && <h3>Nothing to see here...</h3>}
            </div>
        </div>
    )
}

export default WhoToFollow