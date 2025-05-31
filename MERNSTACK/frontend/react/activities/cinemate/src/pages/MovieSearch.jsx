import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components";

export const MovieSearch = ({ endPoint }) => {
  const location = useLocation();
  const title = new URLSearchParams(location.search).get("title");

  const { data, error, loading } = useFetch(endPoint, {
    title: title,
  });
  const movies = data.data || [];
  console.log(movies);
  useTitle(`Search result for ${title}`);

  return (
    <div>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${title}'`
            : `Result for '${title}'`}
        </p>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {loading && <p>Loading...</p>}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};
