import { IMAGE_LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [reactAuthBtn, setReactAuthBtn] = useState('Login')
    return (
        <div className="flex justify-between shadow-lg bg-white mb-2">
            <div className="logo-container m-2 px-10">
                <img
                    className="w-20 rounded-3xl"
                    src={IMAGE_LOGO_URL}
                    alt="Logo"
                />
            </div>
            <nav className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li className="px-4">
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li className="px-4">
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    <li className="px-4">Cart</li>
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
