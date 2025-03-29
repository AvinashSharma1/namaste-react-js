import { IMAGE_LOGO_URL } from '../utils/constants'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={IMAGE_LOGO_URL} alt="Logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
