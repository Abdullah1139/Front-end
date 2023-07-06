import React from "react";
const Features=()=>{
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
          }
          
      ];

    
    return(
        
        <div>    
               <h2>Features</h2>
               {Product.map((product) => (
            <div key={product.id} style={{display:"inline-flex",margin:"40px",border:"1px solid black",height:"500px",width:"400px"}}>
                <img src={product.image} alt={product.name} />
                <h5>{product.name}</h5>
                <h3>{product.price}</h3>
                <button style={{position:"relative"}}>Buy Now</button>
        </div>
      ))}

        </div>
    )
}
export default Features;