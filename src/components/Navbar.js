import { Link } from "react-router-dom"
import './Styles/Navbar.css'
import logo from './Assets/logo.svg'
const Navbar = ({ user, signOut }) => {
    return (
        <div id='navbar'>
            <Link to='/' className='title'>
                <h1>holl'r</h1>
            </Link>
            <img src={logo} alt='hollr logo' className='logo' />
            <div id='navActions'>
                <h3 className='greeting'>Hello, {user.displayName}!</h3>
                <button className='signOut' onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar