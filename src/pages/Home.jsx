import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
    return (
        <div className=" text-2xl font-black flex  text-fuchsia-800  h-screen ">
            <SideBar />
            <div className=" flex-1 bg-fuchsia-200 overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
