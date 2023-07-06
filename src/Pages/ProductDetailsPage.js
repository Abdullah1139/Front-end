import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetailsContainer = styled.div`
  text-align: center;
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductDetailsPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.Description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductDetailsContainer>
  );
};

export default ProductDetailsPage;
