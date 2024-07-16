import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll"
        style={{
          msOverflowStyle: "none", // Internet Explorer 10+
          scrollbarWidth: "none", // Firefox
        }}
      >
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movies.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
