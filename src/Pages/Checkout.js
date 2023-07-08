import React, { useState, useRef } from "react";
import styled from "styled-components";

const CardForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const CardLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CardInput = styled.input`
  width: 20%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
 
  
`;

const CardSelect = styled.select`
  width: 20%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CardButton = styled.button`
  width: 20%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const Div = styled.div`
  height: 600px;
  width: 500px;
  background: #000;
  margin-left: 500px;
  color: aliceblue;
  font-size: larger;
`;

const Button = styled.button`
  display: inline;
  width: 80px;
  font-weight: bold;
  font-size: larger;
  margin: 20px;
`;

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const quantityRef = useRef(1);
  const [showForm, setShowForm] = useState(false);

  const handleIncrement = () => {
    const updatedQuantity = quantityRef.current + 1;
    setQuantity(updatedQuantity);
    quantityRef.current = updatedQuantity;
  };

  const handleDecrement = () => {
    if (quantityRef.current > 1) {
      const updatedQuantity = quantityRef.current - 1;
      setQuantity(updatedQuantity);
      quantityRef.current = updatedQuantity;
    }
  };

  const handleAddToCart = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    // You can access the quantity using `quantity` state
  };
  
  
  
  
  return (
    <div>
      <Div>
        <h3>Checkout</h3>
        <img style={{ height: "350px" }} src="./images/card1.jpg" alt="Product" />
        <h3>price: 2600</h3>
        <Button onClick={handleDecrement}>-</Button>
        <span>{quantity}</span>
        <Button onClick={handleIncrement}>+</Button>
        <center>
          <button style={{ width: "150px" }} onClick={handleAddToCart}>
            Add to cart
          </button>
        </center>
      </Div>

<center>
        {showForm && (
        <CardForm onSubmit={handleSubmit}>
          <h3>Cart Details</h3>
          <div>
            <CardLabel htmlFor="quantity">Quantity:</CardLabel>
            <CardInput type="number" id="quantity" name="quantity" value={quantity} readOnly />
          </div>
          <div>
            <CardLabel htmlFor="name">Name:</CardLabel>
            <CardInput type="text" id="name" name="name" required />
          </div>
          <div>
            <CardLabel htmlFor="email">Email:</CardLabel>
            <CardInput type="email" id="email" name="email" required />
          </div>
          <div>
            <CardLabel htmlFor="payment">Payment Method:</CardLabel>
            <CardSelect id="payment" name="payment" required>
              <option value="">Select payment method</option>
              <option value="easypaisa">Easypaisa</option>
              <option value="jazzcash">JazzCash</option>
              <option value="cash">Cash on Delivery</option>
            </CardSelect>
          </div>
          <div>
            <CardButton type="submit">Proceed to Payment</CardButton>
          </div>
        </CardForm>
      )}
</center>
    </div>
  );
};

export default Checkout;