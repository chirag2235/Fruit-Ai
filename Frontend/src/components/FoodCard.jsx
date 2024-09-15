import React from 'react';
import '../styles/FoodCard.css'; // Add your styles here

const FoodCard = ({ image, name, price, quantity }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-image" />
      <h3 className="food-name">{name}</h3>
      <p className="food-price">Price: ${price}</p>
      <p className="food-quantity">Quantity: {quantity}</p>
    </div>
  );
};

export default FoodCard;
