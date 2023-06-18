import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { HabitContext, HabitProvider } from './context/HabitContext';
export {HabitContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HabitProvider>
        <App />
        </HabitProvider>
    </Router>

  </React.StrictMode>
);

