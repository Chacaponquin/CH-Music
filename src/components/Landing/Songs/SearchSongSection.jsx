import { useState } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import NetworkError from "../../NetworkError";
import SearchSection from "../../SearchSection/SearchSection";
import SongSearchCard from "./SongSearchCard";

const SearchSongSection = ({
  inputSearch,
  loading,
  setSongSearchData,
  songSearchData,
  setLoading,
  searchSong,
}) => {
  const [networkError, setNetworkError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let url = "https://shazam.p.rapidapi.com/search";

    let options = {
      params: {
        term: `${inputSearch.current.value}`,
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "32ea61c07cmsh0e54b5b205a547fp16232bjsn63e17d86aa3a",
      },
    };

    setLoading(true);
    axios
      .get(url, options)
      .then(({ data }) => {
        setSongSearchData(data.tracks.hits);
      })
      .catch((error) => {
        if (error.message === "Network Error") setNetworkError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {networkError && (
        <NetworkError
          networkError={networkError}
          setNetworkError={setNetworkError}
        />
      )}

      <div className="landingSongs_container">
        <SearchSection handleSubmit={handleSubmit} inputSearch={inputSearch} />
        {loading ? (
          <Loading />
        ) : (
          <div className="songsCard_container">
            {songSearchData &&
              songSearchData.map((el) => (
                <SongSearchCard
                  key={el.track.key}
                  song={el.track}
                  searchSong={searchSong}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchSongSection;
