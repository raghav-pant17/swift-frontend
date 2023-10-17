import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MoviesTheatres from "./pages/MoviesTheatres";
import ShowsList1 from "./pages/ShowsList1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route index element={<TheatreMovies />} /> */}
            {/* <Route exact path ="/select-seats/" element ={<SelectSeats/>}/> */}
            <Route exact path="/city" element={<MoviesTheatres />} />
            <Route exact path="/theatre/shows" element={<ShowsList1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//npx kill-port 3000
