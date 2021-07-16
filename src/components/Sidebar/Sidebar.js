import { Link } from "react-router-dom"
import '../Styles/Sidebar.css'
import homeIcon from '../Assets/home.svg'
import githubIcon from '../Assets/github.svg'
import userIcon from '../Assets/user.svg'

const Sidebar = ({ navigateToProfile, user }) => {
    return (
        <div id='sidebar'>
            <div className='sidebar-button-panel'>
                <Link to={`/`} className='sideBarBtns'>
                    <img src={homeIcon} alt="home" className='sidebar-icon' />
                    Home
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <Link to={`/`} className='sideBarBtns'>
                    <img src={githubIcon} alt="github" className='sidebar-icon' />
                    Github
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <Link to={`/profile/${user.uid}`} className='sideBarBtns' id={user.uid} onClick={navigateToProfile}>
                    <img src={userIcon} alt="profile" className='sidebar-icon' id={user.uid} />
                    Your Profile
                </Link>
            </div>

        </div>
    )
}

export default Sidebar