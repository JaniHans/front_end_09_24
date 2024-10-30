import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// let muutuja = 2
//. toast background color: green; 
import ReactDOM from 'react-dom/client';
import './index.css';
// muutuja = 3 
// .toast background-color: bolt green
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import './i18n';



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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
