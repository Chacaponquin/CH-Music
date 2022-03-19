import React from "react";

const ArtistInfCard = ({ track, searchSong }) => {
  return (
    <>
      <div className="artistsInf_tracksCard">
        <img
          src={
            track?.images?.coverart
              ? track?.images?.coverart
              : "./images/noSong.jpg"
          }
          alt=""
        />
        <div className="artistInf_options">
          <p>{track?.title}</p>
          <input
            type="button"
            value="Inf"
            id={track?.key}
            onClick={searchSong}
          />
        </div>
      </div>
    </>
  );
};

export default ArtistInfCard;
