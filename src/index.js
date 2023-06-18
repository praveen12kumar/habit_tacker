import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { HabitContext, HabotProvider } from './context/HabitContext';
export {HabitContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HabotProvider>
        <App />
        </HabotProvider>
    </Router>

  </React.StrictMode>
);

