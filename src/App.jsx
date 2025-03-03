import React from "react";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Counter from "./Components/Counter";
import Todo from "./Components/todo/Todo";
import Navbar from "./Components/Header";
import Movies from "./Components/Movies/Movies";


const App = () => {
    return (
        <div>
            <Users />
        </div>
    );
};

export default App;
