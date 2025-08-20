import React, { useState } from "react";
import '../../style/navbar.css';
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <nav className="navbar">
            {/* Left Section - Logo & Navigation */}
            <div className="nav-left">
                <NavLink to="/" className="logo">
                    <img src="/image.png" alt="ElectroHub" className="logo-img" />
                </NavLink>
                
                <div className="main-nav">
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </div>
            </div>

            {/* Middle Section - Search Bar */}
            <div className="search-container">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <FaSearch className="search-icon" />
                    </button>
                </form>
            </div>

            {/* Right Section - User Actions */}
            <div className="nav-right">
                <NavLink to="/profile" className="nav-icon">
                    <FaUser />
                    <span>Profile</span>
                </NavLink>
                
                <NavLink to="/cart" className="nav-icon">
                    <FaShoppingBag />
                    <span>Bag</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;