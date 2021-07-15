import { useEffect, useState } from "react"
import firebase from "firebase"
import UsersModal from "./UsersModal"


const Following = ({ navigateProfile, profile, currUser, allUsers, navigateToProfile }) => {
    const [following, setFollowing] = useState([])
    const [modalState, setModalState] = useState(false)

    useEffect(() => {
        const db = firebase.firestore()

        const unsubscribe = db.collection("Users").doc(navigateProfile)
            .collection('Following').onSnapshot((querySnapshot) => {
                const isFollowingArr = []
                querySnapshot.forEach(doc => {
                    isFollowingArr.push(doc.id)
                });
                setFollowing(isFollowingArr)
            });
        return unsubscribe

    }, [navigateProfile, profile, currUser])

    const usersModalClick = () => {
        setModalState(!modalState)
    }

    return (
        <div className='following-followers'>
            <h3 onClick={usersModalClick}>{following.length} Following</h3>
            {modalState && <UsersModal usersModalClick={usersModalClick} userModalData={following} allUsers={allUsers} navigateToProfile={navigateToProfile} />}
        </div>
    )
}

export default Following