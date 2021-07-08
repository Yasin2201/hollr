import { useEffect, useState } from "react"
import RenderPost from "../Posts/RenderPost"
import Following from "./Following"

const Profile = ({ currUser, allUsers, navigateProfile, allPosts, allComments, navigateToProfile }) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState()
    const [profilesPosts, setProfilesPosts] = useState()

    useEffect(() => {
        setProfile(allUsers.find((user) => user.uid === navigateProfile))
        setProfilesPosts(allPosts.filter((post) => post.userID === navigateProfile))
        setLoading(true)
    }, [allUsers, navigateProfile, allPosts, allComments])


    return (
        <div>
            {loading
                ? <div>
                    <h2>{profile.displayName}</h2>
                    <Following allUsers={allUsers} currUser={currUser} currProfile={profile} />
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