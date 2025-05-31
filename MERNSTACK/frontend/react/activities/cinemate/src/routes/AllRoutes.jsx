import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, MovieSearch, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList endPoint="/movie" title="Latest Movies" />}
        />
        <Route
          path="movie/detail"
          element={<MovieDetail endPoint="/detail" />}
        />
        <Route
          path="movies/latest-series"
          element={<MovieList endPoint="/series" title="Latest Series" />}
        />
        <Route
          path="movies/popular-movie"
          element={<MovieList endPoint="/popularMovie" title="Popular Movie" />}
        />
        <Route
          path="movies/popular-series"
          element={
            <MovieList endPoint="/popularSeries" title="Popular Series" />
          }
        />
        <Route path="search" element={<MovieSearch endPoint="/search" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
