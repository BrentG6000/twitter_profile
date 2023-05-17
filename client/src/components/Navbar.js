import { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import '../styles/App.scss'
import '../styles/navbar.scss'

function Navbar() {
    const [isActive, setActive] = useState(false)
    return (
        <nav>
            <ul className={`ul ${isActive ? 'active' : ''}`}>
                <Link to={'/'}>
                <li>
                    <div className='link'><b>Home</b></div>
                </li> 
                </Link>
                <Link to={'/Login'}>
                <li>
                    <div className='link'><b>Log In</b></div>
                </li> 
                </Link> 
                <Link to={'/Profile'}>
                <li>
                    <div className='link'><b>Profile</b></div>
                </li> 
                </Link> 
                <Link to={'/About'}>
                <li>
                    <div className='link'><b>About</b></div>
                </li> 
                </Link> 
            </ul>
            <Burger isActive={isActive} setActive={setActive}/>
        </nav>
    )
}

export default Navbar