import React, { useState } from 'react';
import '../styles/FAQ.css'; // Ensure you have the correct path to the CSS file

// Component to render individual fruit cards
const FoodCard = ({ image, name, price, quantity, onIncrease, onDecrease, onEdit, onDelete }) => (
  <div className="food-card">
    <img src={image} alt={name} />
    <div className="food-name">{name}</div>
    <div className="food-price">Price: ${price}</div>
    <div className="food-quantity">
      Quantity: {quantity}
      <button onClick={onDecrease} disabled={quantity <= 0}>-</button>
      <button onClick={onIncrease}>+</button>
    </div>
    <button className="edit-button" onClick={onEdit}>Edit</button>
    <button className="delete-button" onClick={onDelete}>Delete</button>
  </div>
);

const FAQ = () => {
  const [foodItems, setFoodItems] = useState([
    {
      image: 'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=Cls30uVAjNB0B_xKbBC2Yu5aM4AB5fGmW7rqLphx3b0=',
      name: 'Apple',
      price: '2.00',
      quantity: 0,
    },
    {
      image: 'https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=1024x1024&w=is&k=20&c=mzktjTrLz_ZdKClKR5btvo5cBY-BJ4h4QOT8LVflB2M=',
      name: 'Banana',
      price: '1.50',
      quantity: 0,
    },
    {
      image: 'https://media.istockphoto.com/id/172665473/photo/oranges-wallpaper.jpg?s=1024x1024&w=is&k=20&c=jkHJDRYhCmUFgeLu095R1O1lx60epRLllq9Y9Ei4Eag=',
      name: 'Orange',
      price: '3.00',
      quantity: 0,
    },
    {
      image: 'https://media.istockphoto.com/id/1024847158/photo/grapes-at-vineyard.jpg?s=1024x1024&w=is&k=20&c=wFTnSd5WHkaN398793kslF3kLDKpju58IjcdKJecj7Q=',
      name: 'Grapes',
      price: '4.00',
      quantity: 0,
    },
  ]);

  const [newFruit, setNewFruit] = useState({
    name: '',
    price: '',
    image: 'https://via.placeholder.com/150', // Default image placeholder
  });

  const [imageFile, setImageFile] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  // Function to increase the quantity of a fruit
  const increaseQuantity = (index) => {
    const updatedItems = [...foodItems];
    updatedItems[index].quantity += 1;
    setFoodItems(updatedItems);
  };

  // Function to decrease the quantity of a fruit
  const decreaseQuantity = (index) => {
    const updatedItems = [...foodItems];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
    }
    setFoodItems(updatedItems);
  };

  // Function to add a new fruit
  const addFruit = () => {
    if (newFruit.name && newFruit.price) {
      const newFruitItem = {
        ...newFruit,
        price: parseFloat(newFruit.price).toFixed(2), // Ensure price is formatted correctly
        quantity: 0,
        image: imageFile ? URL.createObjectURL(imageFile) : newFruit.image, // Use uploaded image or default
      };

      setFoodItems([...foodItems, newFruitItem]);
      setNewFruit({ name: '', price: '', image: 'https://via.placeholder.com/150' });
      setImageFile(null); // Reset image file
    }
  };

  // Function to update an existing fruit
  const updateFruit = () => {
    if (newFruit.name && newFruit.price) {
      const updatedItems = [...foodItems];
      updatedItems[editingIndex] = {
        ...newFruit,
        price: parseFloat(newFruit.price).toFixed(2), // Ensure price is formatted correctly
        image: imageFile ? URL.createObjectURL(imageFile) : newFruit.image, // Use uploaded image or default
      };

      setFoodItems(updatedItems);
      setEditingIndex(null); // Clear edit mode
      setNewFruit({ name: '', price: '', image: 'https://via.placeholder.com/150' });
      setImageFile(null); // Reset image file
    }
  };

  // Function to handle editing of a fruit
  const editFruit = (index) => {
    setNewFruit({
      name: foodItems[index].name,
      price: foodItems[index].price,
      image: foodItems[index].image,
    });
    setEditingIndex(index);
  };

  // Function to delete a fruit
  const deleteFruit = (index) => {
    const updatedItems = foodItems.filter((_, i) => i !== index);
    setFoodItems(updatedItems);
  };

  // Handle image file change
  const handleImageFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="page-container">
      <div className="fruit-container">
        {foodItems.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => increaseQuantity(index)}
            onDecrease={() => decreaseQuantity(index)}
            onEdit={() => editFruit(index)}
            onDelete={() => deleteFruit(index)}
          />
        ))}
      </div>

      <div className="add-fruit-container">
        <h3>{editingIndex !== null ? 'Edit Fruit' : 'Add a New Fruit'}</h3>
        <input
          type="text"
          placeholder="Fruit Name"
          value={newFruit.name}
          onChange={(e) => setNewFruit({ ...newFruit, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Fruit Price"
          value={newFruit.price}
          onChange={(e) => setNewFruit({ ...newFruit, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newFruit.image}
          onChange={(e) => setNewFruit({ ...newFruit, image: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageFileChange}
        />
        <button onClick={editingIndex !== null ? updateFruit : addFruit}>
          {editingIndex !== null ? 'Update Fruit' : 'Add Fruit'}
        </button>
      </div>
    </div>
  );
};

export default FAQ;
