import React from 'react'

export default function NavLeft() {
    return (
        <div className="navLink container ml-2" style={{fontSize:"20px", backgroundColor: "#e6e6e6"}}>
            <a href="/">
                <p className="leftMenuLetter"><i className="bi bi-house-fill mr-2"></i> Dashboard</p>
            </a>
            <a href="/cymbals">
                <p className="leftMenuLetter"><i className="bi bi-bullseye mr-2"></i> Cymbals</p>
            </a>
            <a href="/orders">
                <p className="leftMenuLetter"><i className="bi bi-bell-fill mr-2"></i> Orders</p>
            </a>
            <a href="/purchase">
                <p className="leftMenuLetter"><i className="bi bi-cart-fill mr-2"></i> Purchase</p>
            </a>
            <a href="/products">
                <p className="leftMenuLetter"><i className="bi bi-archive-fill mr-2"></i> Products</p>
            </a>
            <a href="/returns">
                <p className="leftMenuLetter"><i className="bi bi-arrow-counterclockwise mr-2"></i> Returns</p>
            </a>
        </div>
    )
}
