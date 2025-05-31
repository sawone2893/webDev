import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-8 m-2">
      <Link to={`/movie/detail?id=${movie.id}`}>
        <img
          className="rounded-t-md"
          src={
            movie.poster["600w"] == undefined
              ? movie.poster
              : movie.poster["600w"]
          }
          alt="Movie Poster"
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/detail?id=${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.disc}
        </p>
      </div>
    </div>
  );
};
