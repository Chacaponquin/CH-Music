import React, { useState } from "react";
import { SECTIONS } from "../../../helpers/SECTIONS";
import SearchSongSection from "./SearchSongSection";
import SongInfCard from "../Artists/SongInfCard";
import BackgroundSongs from "./BackgroundSongs";

const LandingSongs = ({
  sectionOpen,
  changeSection,
  loading,
  songInf,
  setSectionOpen,
  setSongInf,
  inputSearch,
  setLoading,
  searchSong,
}) => {
  const [songSearchData, setSongSearchData] = useState(null);

  return (
    <>
      <div
        className={`landing_songsSection ${
          sectionOpen === SECTIONS.SONGS && "activeSection"
        } ${sectionOpen === SECTIONS.ARTISTS && "hideSection"}`}
        onClick={changeSection}
      >
        <BackgroundSongs
          sectionOpen={sectionOpen}
          songInf={songInf}
          loading={loading}
          setSectionOpen={setSectionOpen}
          setSongInf={setSongInf}
        />
        {sectionOpen === SECTIONS.SONGS && !songInf && (
          <SearchSongSection
            inputSearch={inputSearch}
            loading={loading}
            setLoading={setLoading}
            searchSong={searchSong}
            songSearchData={songSearchData}
            setSongSearchData={setSongSearchData}
          />
        )}
        {sectionOpen === SECTIONS.SONGS && songInf && (
          <SongInfCard song={songInf} />
        )}
      </div>
    </>
  );
};

export default LandingSongs;
