import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                KHLZN
            </Link>
            <div className='navbar-menu' onClick={handleClick}>
            </div>
        </div>
    </nav>
    </>
    );
}

export default Navbar