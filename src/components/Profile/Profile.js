import { useEffect, useState } from "react"
import RenderPost from "../Posts/RenderPost"

const Profile = ({ currUser, allUsers, navigateProfile, allPosts, allComments }) => {
    const [loading, setLoading] = useState(false)
    const [profile, setProfile] = useState()
    const [profilesPosts, setProfilesPosts] = useState()
    // const [profilesComments, setProfilesComments] = useState()

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
                    {profilesPosts.map((post) => {
                        return (
                            <RenderPost currUser={currUser} post={post} userInfo={profile} allComments={allComments} key={post.id} />
                        )
                    })}
                </div>
                : <h2>loading...</h2>
            }
        </div>
    )
}

export default Profile