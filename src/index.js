import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Transfer from "./components/Transfer";
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId='ySe9d7VKbWNE0MAkYEPnGT3jiSB6lU4SHkxKyh2j' serverUrl='https://kumh9jz8tiis.usemoralis.com:2053/server'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
