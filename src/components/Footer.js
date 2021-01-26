import React from 'react'

export default function Footer() {
    const style = {
        position: "fixed",
        width: "100%",
        bottom: "0",
        hr : {
            marginTop: "1rem",
            marginBottom: "1rem",
            border: "0",
            borderTop: "10px solid white"
          }
    }

    return (
        <footer style={style}>
        <div style={style.hr}></div>
        <div className="text-center">
			    <p>© 2020-2021 Copyright Wavemg corp.</p>
	    </div>
        </footer>
    )
}
