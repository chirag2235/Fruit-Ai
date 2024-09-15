import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Chat from './components/Chat';
import About from './components/About';
import FAQ from './components/FAQ';
import Translator from './components/Translate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>}/>
        <Route path='/about' element={<About/>}/>    
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/googleTranslate' element={<Translator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
