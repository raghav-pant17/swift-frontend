import React from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/Carousel";
// import Item from "./Item";
import { Button } from "@mui/material";

function Home() {

    return (
        <>
        <Button href="/Payment">go</Button>
        <Carousel/>
        </>
    );
}

export default Home;