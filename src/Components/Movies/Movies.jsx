import React, { useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import LoadingSpinner from "../Loading/LoadingSpinner";
import MovieCard from "./MovieCard";

const Movies = () => {
    const [query, setQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const apikey = import.meta.env.VITE_MOVIE_API_KEY;

    const fetchMovies = () => {
        setIsLoading(true);
        axiosInstance
            .get(`?apikey=${apikey}&s=${query}`)
            .then((res) => {
                console.log(res);
                if (res.data.Response === "True") {
                    setMovies(res.data.Search);
                    setIsLoading(false);
                    setError("");
                } else {
                    setError(res.data.Error);
                    setIsLoading(false);
                    setMovies([]);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    console.log(error);

    return (
        <div>
            {isLoading && <LoadingSpinner />}
            <div className=" flex flex-col items-center justify-center my-10">
                <div>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        className=" rounded-l-full px-4 py-3 outline-none bg-slate-100 border"
                        type="text"
                        name="searchuQuery"
                        id=""
                    />
                    <button
                        onClick={fetchMovies}
                        className=" border rounded-r-full bg-green-100 text-green-800 px-4 py-3 "
                    >
                        Search movie
                    </button>
                </div>
                <div>
                    <p className="text-red-500 font-bold my-3">{error.length > 0 && error}</p>
                </div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-5 my-5 lg:grid-cols-4 ">
                {movies.length > 0 &&
                    movies.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <MovieCard movie={movie} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Movies;
