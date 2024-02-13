import React from 'react';

import ReactDOM from 'react-dom/client';
import '@fontsource/poppins';
import './index.css';
import App from './App';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faB } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faB, faCheckSquare, faCoffee);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
