import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className=" bg-black h-[100px] flex items-center gap-12 px-10">
                <Link to={"/users"}>
                    <h1 className=" font-bold text-2xl text-white">Users</h1>
                </Link>
                <Link to={"/posts"}>
                    <h1 className=" font-bold text-2xl text-white">Posts</h1>
                </Link>
                <h1 className=" font-bold text-2xl text-white">About</h1>
            </nav>
        </div>
    );
};

export default Header;
