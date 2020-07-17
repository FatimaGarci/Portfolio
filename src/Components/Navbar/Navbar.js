import React from 'react';
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <header className="navbar">
                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/home"> About Me</Link>
                        </li>
                        <li>
                            <Link to="/portfolio"> Portfolio </Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact </Link>
                        </li>
                        <li>
                            <a href="file:///Users/fatimagarcia/Downloads/Resume.pdf" title="about"> Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;