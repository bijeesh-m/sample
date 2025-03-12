import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../features/couterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Counter:{count}</h1>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleIncrement}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Increment
                    </button>
                    <button
                        onClick={handleDecrement}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
