import React from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import AddTheatre from "./AddTheatre";
import AddLocation from "./AddLocation";
import AddMovie from "./AddMovie";
import AddShow from "./AddShow";

function App() {
  return (
    <div className="App">
      <AdminLogin />
      <hr />
      <AdminDashboard />
      <hr />
      <AddLocation />
      <hr />
      <AddTheatre />
      <hr />
      <AddMovie />
      <hr />
      <AddShow />/<hr />
    </div>
  );
}

export default App;
