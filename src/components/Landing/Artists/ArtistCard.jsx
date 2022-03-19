import React from "react";

const ArtistCard = ({ artist, handleSearchTracks }) => {
  return (
    <div className="artist_card">
      <img
        src={artist?.avatar ? artist?.avatar : "./images/noArtist.jpg"}
        alt={artist?.name}
      />
      <p>{artist?.name}</p>
      <input
        type="button"
        value="Visit"
        id={artist.id}
        onClick={handleSearchTracks}
      />
    </div>
  );
};

export default ArtistCard;
