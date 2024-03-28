import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className="tickit-header">
            <div className="logo-container">
                <h1>Tick-It</h1>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="user-auth">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;