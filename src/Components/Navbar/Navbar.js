import React from 'react';
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import Resume from './Resume/Resume.pdf';


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
                            <a href={Resume} target="_blank" rel="noopener noreferrer" title="about"> Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;