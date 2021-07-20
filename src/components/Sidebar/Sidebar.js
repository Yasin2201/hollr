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
                    <p className='sidebar-btn-text'>Home</p>
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <Link to={`/`} className='sideBarBtns'>
                    <img src={githubIcon} alt="github" className='sidebar-icon' />
                    <p className='sidebar-btn-text'>Github</p>
                </Link>
            </div>

            <div className='sidebar-button-panel'>
                <Link to={`/profile/${user.uid}`} className='sideBarBtns' id={user.uid} onClick={navigateToProfile}>
                    <img src={userIcon} alt="profile" className='sidebar-icon' id={user.uid} />
                    <p className='sidebar-btn-text' id={user.uid}>Your Profile</p>
                </Link>
            </div>

        </div>
    )
}

export default Sidebar