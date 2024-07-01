import React from 'react'
import { images } from './Images'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='top'>
                <Link to="/" className='logo'><img src={images.logo} alt='logo' /></Link>
                <div className='link'>
                    <div>About us</div>
                    <div>Journal</div>
                    <div>Events</div>
                </div>
                <div className='media'>
                    <img src={images.facebookicon} alt='facebook' />
                    <img src={images.instagramicon} alt='instagram' />
                    <img src={images.twittericon} alt='twitter' />
                    <img src={images.linkedinicon} alt='linkedin' />
                </div>
            </div>
            <hr />
            <div className='bottom'>
                <div className='company'>© 2023 University of Ilorin Law Students' Press Society. All rights reserved.</div>
                <div className='others'>Privacy Policy.</div>
                <div className='others'>Terms and Conditions</div>
                <div className='others'>Cookie Policy</div>
            </div>
        </footer>
    )
}

export default Footer