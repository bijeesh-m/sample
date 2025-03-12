import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className=" w-[250px] bg-red-200 h-screen">
            <nav className=" bg-black h-full  flex flex-col gap-4 px-10 py-10">
                <Link to={"/home/users"}>
                    <h1 className=" font-bold text-2xl text-white">Users</h1>
                </Link>
                <Link to={"/home/posts"}>
                    <h1 className=" font-bold text-2xl text-white">Posts</h1>
                </Link>
                <Link to={"/home/counter"}>
                    <h1 className=" font-bold text-2xl text-white">Counter</h1>
                </Link>
                <h1 className=" font-bold text-2xl text-white">About</h1>
            </nav>
        </div>
    );
};

export default SideBar;
