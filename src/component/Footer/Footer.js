import React from 'react';
import {Link} from "react-router-dom";
import './footer.css'
function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <small>&copy;2021 <strong>Abdulkareem Aldeek</strong>, All Rights Reserved</small>
                <nav className="footer-nav">
                    <a href="#hero">Back to Top</a>
                    <Link href="/">Terms of Use</Link>
                    <Link href="/">Privacy</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;