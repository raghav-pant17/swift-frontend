import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import TheatreMovies from "./pages/TheatreMovies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectSeats from "./pages/SelectSeats";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddLocation from "./pages/admin/AddLocation";
import AddTheatre from "./pages/admin/AddTheatre";
import AddMovie from "./pages/admin/AddMovie";
import AddShow from "./pages/admin/AddShow";
import AdminLogin from "./pages/admin/AdminLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> */}

        {/* <Route index element={<TheatreMovies />} /> */}
        {/* <Route exact path="/select-seats/" element={<SelectSeats />} />
        </Route> */}
        {/* <Route path="" element={<NoPage />} /> */}
        <Route exact path="/" Component={AdminLogin} />
        {/* <Route exact path="/" Component={AdminDashboard} /> */}
        <Route path="/admin-dashboard" Component={AdminDashboard} />
        <Route path="/add-location" Component={AddLocation} />
        <Route path="/add-theatre" Component={AddTheatre} />
        <Route path="/add-movie" Component={AddMovie} />
        <Route path="/add-show" Component={AddShow} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
