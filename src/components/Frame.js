import React from 'react'
import NavLeft from './NavLeft'
import Footer from './Footer'
import Dashboard from './Dashboard'

export default function Frame() {
    return (
        <>
        <div className="row" style={{backgroundColor: "#e6e6e6", marginTop:"65px", paddingTop: "60px", height:"100vh"}}>
            <div className="col-2 pr-0" style={{minWidth:"200px"}}>
                <NavLeft />
            </div>
            <div className="col-10 pl-0">
                <Dashboard />
                
            </div>
        </div>
        <Footer />
        </>
    )
}
