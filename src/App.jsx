import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Home from "./pages/Home";
import UserDetails from "./components/UserDetails";
import Counter from "./components/Counter";

const App = () => {
    return (
        <div>
            {/* <Header /> */}
            <Routes>
                <Route path="/home" element={<Home />}>
                    <Route path="/home/users" element={<Users />} />
                    <Route path="/home/user/:userId" element={<UserDetails />} />
                    <Route path="/home/posts" element={<Posts />} />
                    <Route path="/home/counter" element={<Counter />} />
                </Route>
                {/* <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} /> */}
            </Routes>
        </div>
    );
};

export default App;
