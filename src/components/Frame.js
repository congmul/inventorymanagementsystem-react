import React from 'react'
import NavLeft from './NavLeft'
import Footer from './Footer'

export default function Frame() {
    return (
        <>
        <div className="row" style={{backgroundColor: "#e6e6e6", marginTop:"65px", paddingTop: "60px", height:"100vh"}}>
            <div className="col-3">
                <NavLeft />
            </div>
            <div className="col-9">
                <h1>TEST01</h1>
                <h1>TEST01</h1>
                <h1>TEST01</h1>
                <h1>TEST01</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}
