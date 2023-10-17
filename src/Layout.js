import { Outlet, Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import { Stack } from "@mui/material";
// import Ngrid from './grid'
import BasicModal from "../components/Modal";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <Stack spacing={5}>
        <div className="home-banner">
          <Appbar />
          <div className="newcontainer">
            <Outlet />
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Layout;
