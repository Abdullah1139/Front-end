import React, { useState } from 'react';
import { createProduct } from '../Service/Api';
import './ImageForm.css'
const ProductForm = () => {
  const [product, setProduct] = useState({
    id: '',
    image: '',
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
    setProduct({
      id: '',
      image: '',
      name: '',
      description: '',
      price: '',
    });
  };
const [user] = useState(localStorage.getItem('token'));

  return (
    user ? (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
  <center> 
    
         <button type="submit">Submit</button>

    </center>
    </form>
    ): (
      <h1>Login to access this page</h1>
    )
  );
};

export default ProductForm;
