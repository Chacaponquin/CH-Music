import React from "react";
import { SECTIONS } from "../../../helpers/SECTIONS";
import Close from "../../svg/Close";
import LeftArrow from "../../svg/LeftArrow";

const BackgroundArtists = ({
  sectionOpen,
  loading,
  songInf,
  artistSelectData,
  setArtistSelectData,
  setSectionOpen,
  setSongInf,
}) => {
  return (
    <>
      {sectionOpen === SECTIONS.ARTISTS &&
        !artistSelectData &&
        !songInf &&
        !loading && (
          <Close
            size={window.innerWidth <= 600 ? 40 : 50}
            setSectionOpen={setSectionOpen}
            sectionOpen={sectionOpen}
          />
        )}
      {sectionOpen === SECTIONS.ARTISTS &&
        (artistSelectData || songInf) &&
        !loading && (
          <LeftArrow
            size={window.innerWidth <= 600 ? 30 : 40}
            setArtistSelectData={setArtistSelectData}
            setSongInf={setSongInf}
            songInf={songInf}
          />
        )}
      <video
        src="./videos/Guitarist - 139.vid"
        autoPlay={true}
        loop={true}
        className={`${sectionOpen === SECTIONS.ARTISTS && "activeSection"} ${
          sectionOpen === SECTIONS.SONGS && "hideSection"
        }`}
      />
      {!sectionOpen && (
        <p className="artistSection textSectionEffect">Artists</p>
      )}
    </>
  );
};

export default BackgroundArtists;
