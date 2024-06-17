import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Importing global styles
import reportWebVitals from './reportWebVitals'; // Importing performance measuring tools
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for client-side routing
import App from './App'; // Importing the main App component
import Header from './Components/Header';

// Create the root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Redux and Router
root.render(
    <Router>
    <Header/>
      <App />
    </Router>
);

// Start measuring performance in the app
reportWebVitals();
