import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductListingPage from "./ProductList";
import './pages.css'
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/sellerlogin')
    }

    return(
        <div>
            <center>
                <div className="Home">
                    <h2>Mens Shalwar Qameez Collection</h2>
                    <button onClick={handleClick}>Login as Seller</button>
                </div>
          <ProductListingPage />
            
            
            </center>
        </div>
    )

}
export default Home;