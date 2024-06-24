import React from 'react'
import { useContext } from 'react'
import UserContext from './Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProtectedLink = ({ to, children }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(UserContext);

    const handleClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            navigate('/signup')
        }
    }
    return (
        <Link to={to} onClick={handleClick}>
            {children}
        </Link>
    )
}

export default ProtectedLink