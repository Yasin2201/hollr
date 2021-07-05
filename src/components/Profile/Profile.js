import { useEffect, useState } from "react"

const Profile = ({ navigateProfile, allPosts, allComments }) => {
    const [loading, setLoading] = useState(false)
    const [profileName, setProfileName] = useState()
    const [profilesPosts, setProfilesPosts] = useState()
    const [profilesComments, setProfilesComments] = useState()

    useEffect(() => {
        setProfileName(allPosts.find((user) => user.userID === navigateProfile).displayName)
        setProfilesPosts(allPosts.filter((post) => post.userID === navigateProfile))
        setProfilesComments(allComments.filter((comment) => comment.userID === navigateProfile))
        setLoading(true)
    }, [navigateProfile, allPosts, allComments])

    console.log(profilesPosts)
    console.log(profilesComments)
    return (
        <div>
            {loading
                ? <div>{profileName}</div>
                : <h2>loading...</h2>
            }
        </div>
    )
}

export default Profile