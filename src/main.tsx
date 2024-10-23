import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Remove the .tsx extension
import './index.css'; // Ensure this file exists

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
