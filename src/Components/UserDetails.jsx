import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const [user, setUser] = useState({});
    const { userId } = useParams();

    console.log(userId);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className=" flex h-screen items-center justify-center ">
            <div className=" p-5 border shadow-lg">
                <p className=" text-xl ">{user.name}</p>
                <p className=" text-xl ">{user.email}</p>
                <p className=" text-xl ">{user.phone}</p>
                <p className=" text-xl ">{user.website}</p>
            </div>
        </div>
    );
};

export default UserDetails;
