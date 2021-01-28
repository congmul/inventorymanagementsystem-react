import React from 'react'

import { Link } from 'react-router-dom';

export default function NavLeft() {
    return (
        <div className="navLink container ml-2" style={{fontSize:"20px", backgroundColor: "#e6e6e6"}}>
            <Link to="/">
                <p className="leftMenuLetter"><i className="bi bi-house-fill mr-2"></i> Dashboard</p>
            </Link>
            <Link to="/cymbals">
                <p className="leftMenuLetter"><i className="bi bi-bullseye mr-2"></i> Cymbals</p>
            </Link>
            <Link to ="/orders">
                <p className="leftMenuLetter"><i className="bi bi-bell-fill mr-2"></i> Orders</p>
            </Link>
            <Link to ="/purchase">
                <p className="leftMenuLetter"><i className="bi bi-cart-fill mr-2"></i> Purchase</p>
            </Link>
            <Link to="/products">
                <p className="leftMenuLetter"><i className="bi bi-archive-fill mr-2"></i> Products</p>
            </Link>
            <Link to="/returns">
                <p className="leftMenuLetter"><i className="bi bi-arrow-counterclockwise mr-2"></i> Returns</p>
            </Link>
        </div>
    )
}
