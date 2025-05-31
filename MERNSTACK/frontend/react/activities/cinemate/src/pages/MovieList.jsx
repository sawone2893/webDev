import { MovieCard } from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ endPoint, title }) => {
  const { data, error, loading } = useFetch(endPoint);
  const movies = data.data;
  useTitle(title);
  return (
    <section className="max-w-7xl  mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};
