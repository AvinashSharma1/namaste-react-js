import { IMAGE_LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [reactAuthBtn, setReactAuthBtn] = useState('Login')
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={IMAGE_LOGO_URL} alt="Logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() => {
                            reactAuthBtn === 'Login'
                                ? setReactAuthBtn('Logout')
                                : setReactAuthBtn('Login')
                        }}
                    >
                        {reactAuthBtn}
                    </button>
                </ul>
            </nav>
        </div>
    )
}

export default Header
