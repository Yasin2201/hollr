import { useEffect, useState } from "react"
import firebase from "firebase"
import RenderPost from "../Posts/RenderPost"
import Followers from "./Followers"
import Following from "./Following"
import '../Styles/Profile.css'
import userIcon from '../Assets/user.svg'

const Profile = ({ currUser, allUsers, navigateProfile, allPosts, allComments, navigateToProfile }) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState()
    const [profilesPosts, setProfilesPosts] = useState()
    const [followState, setFollowState] = useState(false)
    const db = firebase.firestore()

    useEffect(() => {

        //Gets the profile from allUsers 
        setProfile(allUsers.find((user) => user.uid === navigateProfile))
        // Gets all the posts that match with the profile page currently navigated to
        setProfilesPosts(allPosts.filter((post) => post.userID === navigateProfile))

        setLoading(true)
    }, [allUsers, navigateProfile, allPosts, allComments])

    //When a user follows/unfollows a profile database will update the current user and the profiles followers/following collection
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
        <div className="profile">
            {loading
                ? <div className='profile-main'>
                    <div className='profile-top'>
                        <img src={userIcon} alt='profile' className='profile-pic' />
                        <h1 className='profile-username'>{profile.displayName}</h1>
                        {
                            currUser.uid === profile.uid
                                ? null
                                : followState ? <button className='followBtn' onClick={followAction}>Unfollow</button> : <button className='followBtn' onClick={followAction}>Follow</button>
                        }
                    </div>
                    <div className='followers-panel'>
                        <Followers navigateProfile={navigateProfile} profile={profile} currUser={currUser} setFollowButton={setFollowButton} allUsers={allUsers} navigateToProfile={navigateToProfile} />
                        <Following navigateProfile={navigateProfile} profile={profile} currUser={currUser} allUsers={allUsers} navigateToProfile={navigateToProfile} />
                    </div>

                    {profilesPosts.map((post) => {
                        return (
                            <RenderPost currUser={currUser} post={post} userInfo={profile} allComments={allComments} navigateToProfile={navigateToProfile} key={post.id} />
                        )
                    })}
                    {profilesPosts.length < 1 && <h2>You have no posts :(</h2>}
                </div>
                : <h2>loading...</h2>
            }
        </div>
    )
}

export default Profile