import { Link } from "react-router-dom"
import '../Styles/Sidebar.css'

const Sidebar = ({ navigateToProfile, user }) => {
    return (
        <div id='sidebar'>
            <Link to={`/`} className='sideBarBtns'>
                Home
            </Link>
            <Link to={`/`} className='sideBarBtns'>
                Github
            </Link>
            <Link to={`/profile/${user.uid}`} className='sideBarBtns' id={user.uid} onClick={navigateToProfile}>
                Your Profile
            </Link>
        </div>
    )
}

export default Sidebar