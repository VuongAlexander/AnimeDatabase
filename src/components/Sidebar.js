import React from "react";

function Sidebar({ upcomingAnime, airingAnime, topAnime }) {
  return (
    <div>
      <aside>
        <nav>
          <h3>
            <strong>Top Upcoming Anime</strong>
          </h3>
          {upcomingAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noreferrer"
            >
              {anime.title}
            </a>
          ))}
          <h3>
            <strong>Top Airing Anime</strong>
          </h3>
          {airingAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noreferrer"
            >
              {anime.title}
            </a>
          ))}
          <h3>
            <strong>Most Popular Anime</strong>
          </h3>
          {topAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              key={anime.mal_id}
              rel="noreferrer"
            >
              {anime.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
