import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [otherState, setOtherState] = useState(false);

    // useEffect(() => {
    //     console.log("Use effect is runnning");
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setUsers(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [otherState]);

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
            <button className=" border rounded-2xl px-4 py-2" onClick={() => setOtherState(!otherState)}>
                Change State(update component)
            </button>

            <div className=" grid grid-cols-4">
                {users.map((user) => {
                    return (
                        <div key={user.id} className=" bg-amber-200 p-4 rounded m-2 ">
                            <p className=" text-xl font-bold">{user.name}</p>
                            <p className=" text-xl font-bold line-clamp-1">{user.email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
