import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export const MovieDetail = ({ endPoint }) => {
  const location = useLocation();
  const movieId = new URLSearchParams(location.search).get("id");

  const { data, loading } = useFetch(`${endPoint}?id=${movieId}`);
  const movie = data.data;
  console.log(movie);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="flex justify-around flex-wrap py-5">
      <div className="max-w-sm">
        <img
          className="rounded"
          src={
            movie.poster && movie.poster["600w"]
              ? movie.poster["600w"]
              : movie.poster
              ? movie.poster
              : ""
          }
          alt="Poster"
        />
      </div>
      <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
        <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
          {movie.title}
        </h1>
        <div className="flex items-center mt-8">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
            {movie.rating}
          </p>
        </div>
        <p className="my-4">
          <span className="mr-2 font-bold">IMDB Code:</span>
          <span>{movie.id}</span>
        </p>
        <p className="my-4">{movie.disc}</p>
        <span class="inline-grid grid-cols-3 gap-4">
          {movie.genre
            ? movie.genre.map((gen) => (
                <span className="mr-2 text-center border border-gray-200 rounded dark:border=gray-700 p-2">
                  {gen}
                </span>
              ))
            : ""}
        </span>
      </div>
    </section>
  );
};
