import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Dashboard = () => {
    return (
        <div className=" flex ">
            <Sidebar />
            <div className=" flex-1 bg-blue-200   min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
