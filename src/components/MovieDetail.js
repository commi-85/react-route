import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  return (
    <div style={{ textAlign: 'center', color: '#333' , padding: '20px', backgroundColor: '#f0f0f0', margin: '10px',alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetail;
