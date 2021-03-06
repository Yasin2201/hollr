import { useEffect, useState } from "react"
import firebase from "firebase"
import UsersModal from "./UsersModal"

const Followers = ({ navigateProfile, profile, currUser, setFollowButton, allUsers, navigateToProfile }) => {
    const [followers, setFollowers] = useState([])
    const [modalState, setModalState] = useState(false)

    //Get current users followers accounts
    useEffect(() => {
        const db = firebase.firestore()

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

    }, [navigateProfile, profile, currUser, setFollowButton])

    const usersModalClick = () => {
        setModalState(!modalState)
    }

    return (
        <div className='following-followers'>
            <h3 className='following-follower-title' onClick={usersModalClick}>{followers.length} Followers</h3>
            {modalState && <UsersModal type={'Followers'} usersModalClick={usersModalClick} userModalData={followers} allUsers={allUsers} navigateToProfile={navigateToProfile} />}
        </div>
    )
}

export default Followers