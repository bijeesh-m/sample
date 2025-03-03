const MovieCard = ({ movie }) => {
    console.log(movie);
    return (
        <div className="max-w-sm rounded-2xl h-96 overflow-hidden shadow-lg bg-white border border-gray-200">
            <img className="w-full h-64 object-cover" src={movie.Poster} alt={movie.Title} />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{movie.Title} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, harum ut! Animi amet quis consequatur dolor iste deleniti explicabo incidunt odio illo porro reprehenderit, provident ducimus perspiciatis maxime earum rerum.</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
