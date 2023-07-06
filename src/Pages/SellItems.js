import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const SellItemsContainer = styled.div`
  text-align: center;
  align-items: center;
`;
const CardContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  width: 250px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #000;
  color: #ccc;
  border-radius: 30px;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CardName = styled.h3`
  margin-bottom: 5px;
`;

const CardDescription = styled.p`
  margin-bottom: 5px;
`;

const CardPrice = styled.p`
  font-weight: bold;
`;
const CardButton = styled.button`
  width: 100px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000;
  padding: 10px;
  border: none;
  cursor: pointer;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }
`;


const SellItems = ({ Product }) => {
  const navigate=useNavigate()
  const handleBuy=(Product)=>{
    console.log(`Product ${Product.name} purchased successfully!`);
    navigate('/checkout');
  }
  return (
    <SellItemsContainer>
      {Product.map((product) => (
        <CardContainer key={product.id}>
          <CardImage src={product.image} alt={product.name} />
          <CardName>{product.name}</CardName>
          <CardDescription>{product.Description}</CardDescription>
          <CardPrice>{product.price}</CardPrice>
          <CardButton onClick={handleBuy}>Buy Now</CardButton>
        </CardContainer>
      ))}
    </SellItemsContainer>
  );
};

export default SellItems;





