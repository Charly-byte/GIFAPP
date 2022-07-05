import React from 'react';
import { GifApp } from './App';
import ReactDOM from 'react-dom/client';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);

