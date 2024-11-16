import './Navbar.css';
import logo from '../assets/logo.png';
import profileIcon from '../assets/profile-icon.png';  

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Service me logo" className="logo-image" />
            </div>
            <div className="navbar-links">
                <a href="/">HOME</a>
                <a href="/about">ABOUT US</a>
                <a href="/find-job">FIND JOB</a>
                <a href="/services">SERVICES</a>
            </div>
            <div className="navbar-actions">
                <button className="post-job-button">POST JOB</button>
                <button className="profile-icon-button">
                    <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
