import { IMAGE_LOGO_URL } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import User from './User'
import UserContext from '../utils/userContext'
import { useSelector } from 'react-redux'
const Header = () => {
    const [reactAuthBtn, setReactAuthBtn] = useState('Login')

    // Subscribing to the store using a Selector
    const cart = useSelector((store) => store.cart.items)
    const cartItems = cart.length
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

                    <li className="px-4">
                        <Link to={'/cart'}>Cart ({cartItems})</Link>
                    </li>
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
                    <li className="px-2">
                        <UserContext.Consumer>
                            {(context) => {
                                return context.loggedInUser
                            }}
                        </UserContext.Consumer>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
