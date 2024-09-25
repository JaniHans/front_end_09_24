
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";

// Navigeerimiseks (URLi ja sisu vahetuseks)
// 1. npm install react router dom --> lisab vajalikud koodifailid 
// internetist node_modules kausta
// 2. import {BrowserRouter} --> võtab node_modules kaustast, react router dom seest
// BrowserRouteriga seotud looika, mis võimaldab navigeerida
// 3. <BrowserRouter><App/> - ümbritseme App elementi, et selles failis oleks võimalik
// navigeerida
// 4. App. js failis teeme URLI ja failide vahelisi seoseid
// <Route path="/osta-kinkekaart" element={<div>Kinkekaart juba olemas?</div>} />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);