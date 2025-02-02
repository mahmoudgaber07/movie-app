import { useState } from "react";
import { useGetMovieAllQuery } from "../../../services/movies/MoviesServices";
import MovieCard from "./MovieCard";
import Loader from "../../../component/Loader";
const Movies = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [page] = useState(1);
    const { data: movies, isLoading, isError, refetch } = useGetMovieAllQuery({ page: page, search: searchQuery });
    const handleSearchChange = (filterValue: string) => {
        setSearchQuery(filterValue);
    };

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
        <div className='movies'>
            <div className='container mt-10'>
                <h1 className="text-3xl font-bold mb-4">Movies</h1>
                <label className="input input-bordered flex items-center gap-2 mb-5">
                    <input type="text" className="grow" placeholder="Search" value={searchQuery} onChange={(e) => handleSearchChange(e.target.value)} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-10 z-10">
                    {
                        movies.length === 0 ? (
                            <p className="col-span-4 text-center text-2xl font-bold py-10">No Movie Found</p>
                        ) : (
                            <MovieCard data={movies} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Movies