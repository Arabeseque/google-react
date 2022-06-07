import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/StateContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>

)
