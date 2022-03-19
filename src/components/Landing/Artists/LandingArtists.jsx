import axios from "axios";
import React, { useState } from "react";
import { SECTIONS } from "../../../helpers/SECTIONS";
import NetworkError from "../../NetworkError";
import ArtistContainer from "./ArtistContainer";
import BackgroundArtists from "./BackgroundArtists";

const LandingArtists = ({
  sectionOpen,
  songInf,
  artistSelectData,
  changeSection,
  loading,
  setArtistSelectData,
  setSectionOpen,
  setSongInf,
  setLoading,

  inputSearch,
  searchSong,
}) => {
  const [artistData, setArtistData] = useState([]);
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
        setArtistData(data.artists.hits);
      })
      .catch((error) => {
        if (error.message === "Network Error") setNetworkError(true);
      })
      .finally(() => setLoading(false));
  };

  const handleSearchTracks = (e) => {
    let url = "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks";

    let options = {
      params: { id: e.target.id, locale: "en-US" },
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "32ea61c07cmsh0e54b5b205a547fp16232bjsn63e17d86aa3a",
      },
    };

    setLoading(true);
    axios
      .get(url, options)
      .then(({ data }) => {
        setArtistSelectData(data.tracks.slice(0, 5));
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

      <div
        className={`landing_artistSection ${
          sectionOpen === SECTIONS.ARTISTS && "activeSection"
        } ${sectionOpen === SECTIONS.SONGS && "hideSection"}`}
        onClick={changeSection}
      >
        <BackgroundArtists
          sectionOpen={sectionOpen}
          loading={loading}
          songInf={songInf}
          artistSelectData={artistSelectData}
          setArtistSelectData={setArtistSelectData}
          setSectionOpen={setSectionOpen}
          setSongInf={setSongInf}
        />
        {sectionOpen === SECTIONS.ARTISTS && (
          <ArtistContainer
            handleSubmit={handleSubmit}
            handleSearchTracks={handleSearchTracks}
            artistData={artistData}
            loading={loading}
            inputSearch={inputSearch}
            artistSelectData={artistSelectData}
            searchSong={searchSong}
            songInf={songInf}
          />
        )}
      </div>
    </>
  );
};

export default LandingArtists;
