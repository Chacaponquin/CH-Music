import React from "react";

const SongSearchCard = ({ song, searchSong }) => {
  return (
    <>
      <div className="songSearch_card">
        <img
          src={
            song?.images?.coverart
              ? song?.images?.coverart
              : "./images/noSong.jpg"
          }
          alt={song?.title}
        />
        <div className="songSearch_card_inf">
          <p>{song?.subtitle}</p>
          <p>{song?.title}</p>
        </div>
        <input type="button" value="Inf" id={song.key} onClick={searchSong} />
      </div>
    </>
  );
};

export default SongSearchCard;
