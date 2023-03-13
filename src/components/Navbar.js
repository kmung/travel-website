import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import HikingIcon from '@mui/icons-material/Hiking';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo'>
                KHLZN <HikingIcon color='primary' fontSize='medium'/>
            </Link>
            <div className='navbar-menu' onClick={handleClick}>
                <MenuIcon click={true} />
                <CloseIcon click={false} />
            </div>
        </div>
    </nav>
    </>
    );
}

export default Navbar