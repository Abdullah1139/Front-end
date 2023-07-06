import React from "react";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
  align-items: center;
  font-size: 26px;
  color: #000;
  margin-top: 10px;

`;

const CContact = styled.div`
  text-align: center;
  align-items: center;
  background: #fff;
  height: 500px;
  color: #000;

  
`;

const Contact=()=>{
    return(
        <div>
            <CContact>
            <P>Contact Us</P>
            <P>Email: abdullah74865@gmail.com</P>
            <P>24/7 Customer Support:<br/>
phone:  844-288-7668<br/>
direct: 877-289-7577<br/>
fax: 214-452-0344</P>
            <img style={
            {
            display:"inline",
            borderRadius:"50%",
            width:"100px",
            height:"100px"    
            }} src="./images/logo.png" alt="logo"/>
            </CContact>
        </div>
    )
}
export default Contact;