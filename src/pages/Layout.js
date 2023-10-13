import { Outlet, Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Button, Stack } from "@mui/material";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import "./Layout.css";


const Layout = () => {
  var navigate = useNavigate();

  // const func=()=>{
  //   navigate("/select-seats/", { state: {show_id:2, numSeats: 5}})
  // }

  return (
    <div>
      <Stack spacing={5}>
        <div className="home-banner">
          <Appbar />
            <Outlet />
        </div>
      </Stack>
    </div>
  );
};

export default Layout;
