import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1 className=" text-2xl my-5 px-5 font-bold">Posts</h1>
            <div className=" grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3  gap-5 my-5">
                {posts.map((post) => {
                    return (
                        <div className=" border bg-amber-50 rounded-2xl p-5 space-y-2" key={post.id}>
                            <h1 className=" font-bold ">{post.title}</h1>
                            <p className=" line-clamp-3">{post.body}</p>
                            <p className=" italic">Post Id :{post.id}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Posts;
