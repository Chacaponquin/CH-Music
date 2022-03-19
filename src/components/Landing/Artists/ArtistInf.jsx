import React from "react";
import Loading from "../../Loading/Loading";
import ArtistInfCard from "./ArtistInfCard";

const ArtistInf = ({ loading, artistSelectData, searchSong }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="artistInfContainer">
          <div className="artistInf_image_section">
            <img
              src={
                artistSelectData[0]?.images?.background
                  ? artistSelectData[0]?.images?.background
                  : "./images/noArtist.jpg"
              }
              alt={artistSelectData[0]?.subtitle}
            />
          </div>
          <div className="artistsInf_tracksCard_container">
            {artistSelectData.map((el) => (
              <ArtistInfCard key={el.key} track={el} searchSong={searchSong} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistInf;
