import { Link } from "react-router";
type MovieCardProps = { data: any };
const MovieCard = ({ data }: MovieCardProps) => {
    return (
        <>
            {
                data.length > 1 ? (
                    data.map((movie: any) => {
                        return (
                            <div key={movie.id} className="card group bg-base-100 ease-out duration-300 transition-all">
                                <div className="relative">
                                    <Link to={`/movie/${movie.id}`}>
                                        <figure>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.original_title}
                                                className="rounded-xl object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105" />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="card-body items-center text-center p-2">
                                    <h2 className="card-title text-sm min-h-10">{movie.original_title}</h2>
                                    <p className="text-red-400 font-bold text-lg">{movie.popularity}</p>
                                    <div className="rating rating-sm py-3">
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
                            </div>
                        );
                    })
                ) : (
                    <div key={data.id} className="card group bg-base-100 ease-out duration-300 transition-all">
                        <div className="relative">
                            <Link to={`/movie/${data.id}`}>
                                <figure>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                        alt={data.original_title}
                                        className="rounded-xl object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-105" />
                                </figure>
                            </Link>
                        </div>
                        <div className="card-body items-center text-center p-2">
                            <h2 className="card-title text-sm min-h-10">{data.Title}</h2>
                            <p className="text-primary font-bold text-md">{data.Genre}</p>
                            <p className="text-red-400 font-bold text-lg">{data.popularity}</p>
                            <div className="rating rating-sm py-3 ">
                                {[...Array(5)].map((_, starIndex) => (
                                    <input
                                        key={starIndex}
                                        type="radio"
                                        name={`rating-${data.id}`}
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked={starIndex < data.vote_average}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default MovieCard