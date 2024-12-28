import React from "react";
import MovieCard from "./MovieCard";
import movies from "../data";

const MovieList = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Liste des films</h1>
      <div style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
