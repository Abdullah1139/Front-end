import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./comp.css"
import {FaCartPlus} from "react-icons/fa"


const Header=()=>{

    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/login")
    }

    return(
        <div className="Header" style={{
        marginTop:"0px"
        }}>
            <div className="Header_left" style={{float:"left"}}>
            <img src="./images/logo.png" alt="buisness logo"/>
            <h1 >Menz Wear</h1>
            </div>
            <div className="Header_right">
            
            <ul className="nav-links">
          <li><Link className="link" style={{textDecoration:"none"}} to="/">Home</Link></li>
          <li><Link className="link" to="/services">Services</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/feature">Features</Link></li>
          <button onClick={handleClick}>Login</button>
        </ul>
        <div>
        <FaCartPlus style={{width:"100px",height:"30px",marginLeft:"1200px",marginTop:"-140px"}} />
      </div>
      
            </div>
        </div>
    )
}
export default Header;