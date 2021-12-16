import React, {useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import Navigation from "./Header.styled";



const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
           setIsLoggedIn(true);
        }
    }, [])

        return (
            <Navigation>
                <div className="logo">
                    <Link to="/">
                        <p>Abdulkareem's Blog</p>
                        <em>
                            <div className="letterhead">
                                <span className="name">deek</span>
                                <span className="gray">.io</span>
                            </div>
                        </em>
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa fa-bars"
                        aria-hidden="true"
                        onClick={handleToggle}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink activeClassName="active" to="/">
                            <li>HOME</li>
                        </NavLink>
                        <NavLink activeClassName="active" to="/post">
                            <li>BLOG</li>
                        </NavLink>
                        {isLoggedIn ? (
                            <NavLink onClick={handleLogout} activeClassName="active" to="/register">
                                <li>Logout</li>
                            </NavLink>
                        ) : (
                            <NavLink activeClassName="active" to="/login">
                                <li>REGISTER</li>
                            </NavLink>
                        )}
                    </ul>
                </nav>
            </Navigation>
        );
    }

export default Nav;
