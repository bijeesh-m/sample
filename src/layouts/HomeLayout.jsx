import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <div>
                    <Link to={"/users"}>Users</Link>
                </div>
                <div></div>
                <div></div>
            </nav>
            <Outlet />
        </div>
    );
};

export default HomeLayout;
