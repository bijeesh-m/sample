import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incByAmt } from "../features/counterSlice";

const Counter = () => {
    const [value, setValue] = useState(0);

    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className=" flex gap-3 justify-center items-center h-screen">
            <button
                onClick={() => dispatch(decrement())}
                className=" border p-3 rounded font-semibold bg-red-100 text-red-800"
            >
                Dec
            </button>
            <h1 className=" text-5xl">{count}</h1>
            <button
                onClick={() => dispatch(increment())}
                className=" border p-3 rounded font-semibold bg-green-100 text-green-800"
            >
                Inc
            </button>

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="number"
                name=""
                id=""
                className=" border px-3 py-2 bg-amber-300 outline-none rounded"
            />
            <button
                onClick={() => dispatch(incByAmt(Number(value)))}
                className=" border p-3 rounded font-semibold bg-green-100 text-green-800"
            >
                IncBy10
            </button>
        </div>
    );
};

export default Counter;
