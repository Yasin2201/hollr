import { useEffect, useState } from "react"
import firebase from "firebase"
import RenderPost from "../Posts/RenderPost"
import Followers from "./Followers"
import Following from "./Following"


const Profile = ({ currUser, allUsers, navigateProfile, allPosts, allComments, navigateToProfile }) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState()
    const [profilesPosts, setProfilesPosts] = useState()
    const [followState, setFollowState] = useState(false)
    const db = firebase.firestore()

    useEffect(() => {
        setProfile(allUsers.find((user) => user.uid === navigateProfile))
        setProfilesPosts(allPosts.filter((post) => post.userID === navigateProfile))
        setLoading(true)
    }, [allUsers, navigateProfile, allPosts, allComments])

    const followAction = () => {
        if (!followState) {
            db.collection("Users").doc(profile.uid).collection('Followers').doc(currUser.uid).set({
                following: !followState
            });
            db.collection("Users").doc(currUser.uid).collection('Following').doc(profile.uid).set({
                following: !followState
            });
            setFollowState(!followState)
        } else {
            db.collection("Users").doc(profile.uid).collection('Followers').doc(currUser.uid).delete()
            db.collection("Users").doc(currUser.uid).collection('Following').doc(profile.uid).delete()
            setFollowState(!followState)
        }
    }

    const setFollowButton = (isFollowing) => {
        setFollowState(isFollowing)
    }

    return (
        <div>
            {loading
                ? <div>
                    <h2>{profile.displayName}</h2>
                    {currUser.uid === profile.uid
                        ? <div></div>
                        : followState ? <button onClick={followAction}>Unfollow</button> : <button onClick={followAction}>Follow</button>}
                    <Followers navigateProfile={navigateProfile} profile={profile} currUser={currUser} setFollowButton={setFollowButton} allUsers={allUsers} />
                    <Following navigateProfile={navigateProfile} profile={profile} currUser={currUser} allUsers={allUsers} />

                    {profilesPosts.map((post) => {
                        return (
                            <RenderPost currUser={currUser} post={post} userInfo={profile} allComments={allComments} navigateToProfile={navigateToProfile} key={post.id} />
                        )
                    })}
                </div>
                : <h2>loading...</h2>
            }
        </div>
    )
}

export default Profile