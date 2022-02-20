import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [upcomingAnime, SetUpcomingAnime] = useState([]);
  const [airingAnime, SetAiringAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json());

    SetTopAnime(temp.top.slice(0, 10));
  };

  const GetUpcomingAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    ).then((res) => res.json());

    SetUpcomingAnime(temp.top.slice(0, 5));
  };

  const GetAiringAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/airing"
    ).then((res) => res.json());

    SetAiringAnime(temp.top.slice(0, 5));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=24`
    ).then((res) => res.json());
    console.log(temp.results);
    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
    GetAiringAnime();
    GetUpcomingAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar
          airingAnime={airingAnime}
          upcomingAnime={upcomingAnime}
          topAnime={topAnime}
        />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
