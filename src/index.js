import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root'); // Obtain a reference to the root DOM element

ReactDOM.createRoot(rootElement).render( // Use createRoot and then call render on it
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
