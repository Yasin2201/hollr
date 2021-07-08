import { useEffect, useState } from "react"
import firebase from "firebase"

const Following = ({ allUsers, currUser, currProfile }) => {
    const [followState, setFollowState] = useState(false)
    const [following, setFollowing] = useState([])
    // const [followers, setFollowers] = useState()
    const db = firebase.firestore()


    return (
        <div>

        </div>
    )
}

export default Following