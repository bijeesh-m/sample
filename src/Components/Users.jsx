import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log(res);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1 className=" text-2xl my-5 px-5 font-bold">Users</h1>
            <div className=" grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
                {users.map((user) => {
                    return (
                        <div
                            onClick={() => navigate(`/home/user/${user.id}`)}
                            className=" border bg-amber-50 rounded-2xl p-5 space-y-2"
                            key={user.id}
                        >
                            <h1>{user.name}</h1>
                            <p className=" line-clamp-2">{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
