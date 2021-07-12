import { Link } from "react-router-dom"
import './Styles/Navbar.css'

const Navbar = ({ user, signOut }) => {
    return (
        <div id='navbar'>
            <Link to='/' className='title'>
                <h1>holl'r</h1>
            </Link>
            <div id='navActions'>
                <h3 className='greeting'>Hello, {user.displayName}!</h3>
                <button className='signOut' onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar