import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom';
import ThemeContext from './Context/ThemeContext';
import { useContext } from 'react';
import UserContext from './Context/UserContext';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import ProtectedLink from './ProtectedLink';
import { images } from './Images';

const Navigation = () => {
    const { setShowLogin } = useContext(ThemeContext);
    const { isLoggedIn, setIsLoggedIn, theUser } = useContext(UserContext)

    const changeDisplay = () => {
        setShowLogin(true);
        console.log("just troubleshooting");
    }

    // if (showLogin) {
    //     setShowLogin(true);
    //     console.log("just troubleshooting");
    // }


    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
        } catch (error) {
            console.log('Error Signing Out: ', error);
        }
    }
    return (
        <nav className='nav'>
            {/* <Link to="/" className='logo'>Logo</Link> */}
            <Link to="/" className='logo'><img src={images.logo} alt='logo'/></Link>
            <div className='middle-link'>
                {/* <div onClick={() => setShowModal(true)}>About us</div> */}
                <Link to="/blogs">Blogs</Link>
                <Link to="/events">Event</Link>
                <Link to="/news">News</Link>
                <Link to="/articles">Article</Link>
                <Link className='has-submenu' to="/">
                    <div className='user'>Become a Contributor</div>
                    <ul>
                        <li><ProtectedLink to="/postnews">Post News</ProtectedLink></li>
                        <li><ProtectedLink to="/post-event">Submit an Event</ProtectedLink></li>
                        <li><ProtectedLink to="/postblog">Contribute a Blog Post</ProtectedLink></li>
                        <li><ProtectedLink to="/postarticle">Contribute an Article</ProtectedLink></li>
                    </ul>
                </Link>
            </div>
            {isLoggedIn ? (<div className='right-link'>
                <div>Welcome, {theUser ? theUser.displayName : "welcome"}</div>
                <div onClick={handleSignOut} className='signup'>Sign Out</div>
            </div>)
                :
                (<div className='right-link'>
                    <div className='login-link' onClick={changeDisplay}>Login</div>
                    <Link to="/signup" className='signup'>Sign up</Link>
                </div>)}
        </nav>
    )
}

export default Navigation