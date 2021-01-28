import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/mainLogo.png';

function NavBar() {
    const style = {
        position: "fixed",
        width: "100%",
        top: "0", 
        zIndex: "1",
    }

    return(
        <div className="row shadow rounded m-0 p-3 bg-white" style={style}>
            <Link to ="/"><img src={Logo} className="d-flex" width="35px" alt="brand" /></Link>
            <div className="pl-3" style={{fontWeight: "bold", fontSize: "20px"}}>Inventory Management System</div>
        </div>
    )
}

export default NavBar;