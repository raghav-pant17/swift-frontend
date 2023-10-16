import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import MoviePage from "./pages/MoviePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Movie />} />
        <Route path="/movie/:movieListId" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
