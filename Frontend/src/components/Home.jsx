import React from 'react';
import '../styles/Home.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate= useNavigate();
  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleGClick = () => {
    navigate('/googleTranslate');
  };

  const handleFAQsClick = () => {
    navigate('/faq');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };


  return (
    <div className="app">
      <h1>Fruit.Ai</h1>
      <p>Be Healthy!</p>
      <div className="buttons">
        <Button label="Chat" onClick={handleChatClick} />
        <Button label="FAQs" onClick={handleFAQsClick} />
        <Button label="About" onClick={handleAboutClick} />
        <Button label="Translate" onClick={handleGClick} />
      </div>
    </div>
  );
}

export default Home;
