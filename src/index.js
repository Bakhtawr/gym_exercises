import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createRoot} from 'react-dom/client';

import React from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <App />
   </BrowserRouter>
);