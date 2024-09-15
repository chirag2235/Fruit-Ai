import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>{activeTab === 'login' ? 'Login' : 'Register'}</h2>
      <p>By signing in you are agreeing to our <a href="#">Terms and privacy policy</a></p>

      <div className="tab-container">
        <span className={activeTab === 'login' ? 'active-tab' : ''} onClick={() => setActiveTab('login')}>
          Login
        </span>
        <span className={activeTab === 'register' ? 'active-tab' : ''} onClick={() => setActiveTab('register')}>
          Register
        </span>
      </div>

      <div className="input-container">
        <FaEnvelope />
        <input type="email" placeholder="Email Address" />
      </div>

      <div className="input-container">
        <FaLock />
        <input type="password" placeholder="Password" />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Remember password
        </label>
        <a href="#" className="forgot-password">Forget password</a>
      </div>

      <button className="login-button" onClick={handleLogin}>
        {activeTab === 'login' ? 'Login' : 'Register'}
      </button>

      <p>or connect with</p>
      <div className="social-container">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaPinterest /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default LoginForm;
