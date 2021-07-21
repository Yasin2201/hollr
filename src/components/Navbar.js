import { Link } from "react-router-dom"
import './Styles/Navbar.css'
import logo from './Assets/logo.svg'

const Navbar = ({ user, signOut }) => {
    return (
        <div id='navbar'>
            <Link to='/hollr' className='title'>
                <h1 className="logoHeader">holl'r</h1>
            </Link>
            <Link to='/hollr' className='title'>
                <img src={logo} alt='hollr logo' className='logo' />
            </Link>
            <div className='navActions'>
                <h3 className='greeting'>Hello, {user.isAnonymous ? user.uid : user.displayName}!</h3>
                <Link to={`/hollr`} className='navActions'>
                    <button className='signOut' onClick={signOut}>Sign Out</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar