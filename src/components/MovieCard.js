import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ textAlign: 'center', color: '#333' , padding: '20px', backgroundColor: '#f0f0f0', margin: '10px',alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} style={{width:"800px", height:"1000px"}}/>
      <Link to={`/movie/${movie.id}`}>Voir les détails</Link>
    </div>
  );
};

export default MovieCard;
