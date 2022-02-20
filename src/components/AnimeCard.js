import React from "react";

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt=" " />
        </figure>
        <h3>{anime.title}</h3>
        <h3>
          <strong>Type: </strong>
          {anime.type}
        </h3>
        <h3>
          <strong> Episodes: </strong>
          {anime.episodes}
        </h3>
        <h3>
          <strong>Overall Rating: </strong>
          {anime.score}/10
        </h3>
      </a>
    </article>
  );
}

export default AnimeCard;
