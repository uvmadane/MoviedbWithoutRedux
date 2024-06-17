import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Importing global styles
import reportWebVitals from './reportWebVitals'; // Importing performance measuring tools
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for client-side routing

import { Provider } from 'react-redux'; // Importing Redux provider for state management
import store from './store/store'; // Importing Redux store
import App from './App'; // Importing the main App component

// Create the root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Redux and Router
root.render(
    <Router>
      <App />
    </Router>
);

// Start measuring performance in the app
reportWebVitals();
