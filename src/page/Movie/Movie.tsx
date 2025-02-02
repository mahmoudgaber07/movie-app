import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../services/movies/MoviesServices";
import Loader from "../../component/Loader";
const Movie = () => {
    const movieId:any = useParams().id;
    const { data: movie, isLoading, isError, refetch } = useGetMovieByIdQuery({ id: movieId });
    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (isError) {
        return (
            <div>Something went wrong please <button onClick={() => refetch()}>Reload</button> </div>
        )
    }

    return (
        <div className='movie'>
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-contain rounded-md" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-[#e50914] mb-5">{movie.original_title || movie.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {movie?.overview}
                            </p>
                            <div className="flex mb-4 items-center">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Vote: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.vote_average}</span>
                                    <div className="rating rating-sm py-3 mx-2">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <input
                                                key={starIndex}
                                                type="radio"
                                                name={`rating-${movie.id}`}
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked={starIndex < movie.vote_average}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Language: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.original_language || movie.language}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Country: </span>
                                <span className="font-bold text-gray-700 dark:text-gray-300">{movie.origin_country}</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Genre:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                        {movie.genres.map((genre: any) => genre.name).join(', ') || movie.genres[0].name}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {movie.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie