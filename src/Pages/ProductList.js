import React from 'react';
import SellItems from './SellItems';
import { useMemo,useState } from 'react';
import {FaSearch} from "react-icons/fa"
// import Checkout from './Checkout';

const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
    const Product = [
        {
          id: 1,
          image:"./images/card1.jpg",
          name: "Fancy Kurta",
          Description:"",
          price: "RS. 1700",
        },
        {
          id: 2,
          image:"./images/card2.jpg",
          name: "Cotton ",
          Description:"",
          price: "RS. 1700",
        },
        {
          id: 3,
          image:"./images/card3.jpg",
          name: "Designed kurta",
          Description:"",
          price: "RS. 1700",
        },
        {
          id: 4,
          image:"./images/card4.jpg",
          name: "Simple Cotton",
          Description:"",
          price: "RS. 1700",
        },
        
          {
            id: 5,
            image:"./images/card5.jpg",
            name: "Kid Redimate",
            Description:"",
            price: "RS. 1700",
          },
          {
            id: 6,
            image:"./images/card6.jpg",
            name: "Grey Cotton",
            Description:"",
            price: "RS. 1700",
          },
          {
            id: 7,
            image:"./images/caed7.jpg",
            name: "White Cotton",
            Description:"",
            price: "RS. 1700",
          }
          ,{
            id: 8,
            image:"./images/card8.jpg",
            name: "Facncy Kurta",
            Description:"",
            price: "RS. 1700",
          },
          {
            id: 9,
            image:"./images/card9.jpg",
            name: "Brown Cotton",
            Description:"",
            price: "RS. 1700",
          },
          {
            id: 10,
            image:"./images/card10.jpg",
            name: "Brown and white",
            Description:"",
            price: "RS. 1700",
          }
      ];

      const filteredProduct = useMemo(() => {
        return Product.filter((product) => {
          // Perform case-insensitive search on the product name
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      }, [Product, searchTerm]);

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      return (
        <div className="category">
          
          <div style={{border:"1px solid bliack"}}>
          <FaSearch style={{display:"inline"}}/>
          <input style={{display:"inline"}}
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products"
        />
        <SellItems Product={filteredProduct} />
          </div>
        </div>
      );
};

export default ProductListingPage;
