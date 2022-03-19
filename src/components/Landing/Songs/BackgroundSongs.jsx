import React from "react";
import { SECTIONS } from "../../../helpers/SECTIONS";
import Close from "../../svg/Close";
import LeftArrow from "../../svg/LeftArrow";

const BackgroundSongs = ({
  sectionOpen,
  songInf,
  loading,
  setSectionOpen,

  setSongInf,
}) => {
  return (
    <>
      {sectionOpen === SECTIONS.SONGS && !songInf && !loading && (
        <Close
          size={window.innerWidth <= 600 ? 35 : 50}
          setSectionOpen={setSectionOpen}
          sectionOpen={sectionOpen}
        />
      )}
      {sectionOpen === SECTIONS.SONGS && !loading && songInf && (
        <LeftArrow
          size={window.innerWidth <= 600 ? 25 : 40}
          setSongInf={setSongInf}
          songInf={songInf}
        />
      )}
      <video
        src="./videos/Songs.mp4"
        autoPlay={true}
        loop={true}
        className={`${sectionOpen === SECTIONS.SONGS && "activeSection"} ${
          sectionOpen === SECTIONS.ARTISTS && "hideSection"
        }`}
      />
      {!sectionOpen && <p className="songsSection textSectionEffect">Songs</p>}
    </>
  );
};

export default BackgroundSongs;
