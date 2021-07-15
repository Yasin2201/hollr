import { Link } from "react-router-dom"
import '../Styles/Sidebar.css'
import homeIcon from '../Assets/home.svg'
import githubIcon from '../Assets/github.svg'
import userIcon from '../Assets/user.svg'

const Sidebar = ({ navigateToProfile, user }) => {
    return (
        <div id='sidebar'>
            <div className='sidebar-button-panel'>
                <img src={homeIcon} alt="home" className='sidebar-icon' />
                <Link to={`/`} className='sideBarBtns'>
                    Home
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <img src={githubIcon} alt="github" className='sidebar-icon' />
                <Link to={`/`} className='sideBarBtns'>
                    Github
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <img src={userIcon} alt="profile" className='sidebar-icon' />
                <Link to={`/profile/${user.uid}`} className='sideBarBtns' id={user.uid} onClick={navigateToProfile}>
                    Your Profile
                </Link>
            </div>

        </div>
    )
}

export default Sidebar