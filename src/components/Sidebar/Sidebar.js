import { Link } from "react-router-dom"

const Sidebar = ({ navigateToProfile, user }) => {
    return (
        <div>
            <Link to={`/profile/${user.uid}`}>
                <button id={user.uid} onClick={navigateToProfile}>My Profile</button>
            </Link>
        </div>
    )
}

export default Sidebar