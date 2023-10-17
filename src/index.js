import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TheatreMovies from "./pages/TheatreMovies"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectSeats from "./pages/SelectSeats"
import Payment from '../src/pages/payment/Payment'
import Upinext from './components/payment-component/Upinext';
import Qrgen from './components/payment-component/Qrgen';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route index element={<TheatreMovies />} /> */}
      <Route path="/Payment" element={<Payment/>}></Route>
      <Route exact path ="/select-seats/" element ={<SelectSeats/>}/>
      <Route exact path='/Scan' element={<Qrgen/>}></Route>
      <Route exact path="/UpiId" element={<Upinext/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
