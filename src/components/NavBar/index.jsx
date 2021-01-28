import React from 'react'
import Logo from '../../img/mainLogo.png';

function NavBar() {
    const style = {
        position: "fixed",
        width: "100%",
        top: "0"
    }

    return(
        <div className="row shadow rounded m-0 p-3 bg-white" style={style}>
            <a href="/"><img src={Logo} className="d-flex" width="35px" alt="brand" /></a>
            <div className="pl-3" style={{fontWeight: "bold", fontSize: "20px"}}>Inventory Management System</div>
        </div>
    )
}

export default NavBar;