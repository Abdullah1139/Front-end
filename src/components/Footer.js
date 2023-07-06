import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #011;
  padding: 20px;
  text-align: center;
  height: 200px;
`;

const FooterLink = styled.a`
  display: inline-block;
  margin-right: 20px;
`;

const FooterImage = styled.img`
  height: 30px;
  width: 30px;
  vertical-align: middle;
`;
const Fbutton = styled.button`
  height: 60px;
  width: 150px;
  display: block;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;


  &:hover{
    color: white;
    background: #000;
  }
`;

const Footer = () => {
  const navigate=useNavigate();
  const handleContact=()=>{
    navigate('/contact')
  }
  
  return (
    <FooterContainer>
      <div>
        <FooterLink href="https://www.facebook.com"  rel="noopener noreferrer">
          <FooterImage src="/images/fb.png" alt="Facebook" />
        </FooterLink>
        <FooterLink href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FooterImage src="/images/WA..png" alt="Facebook" />
        </FooterLink>
        <Fbutton on onClick={handleContact}>Contact Us</Fbutton>
        <p style={{color:"#ffffff"}}> Copyright 2023 ©. Menz Wear® is a registered trademark </p>
        {/* Add more social media icons and links here */}
      </div>
    </FooterContainer>
  );
};

export default Footer;
