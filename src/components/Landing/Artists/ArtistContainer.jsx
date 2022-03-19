import React from "react";
import Loading from "../../Loading/Loading";
import SearchSection from "../../SearchSection/SearchSection";
import ArtistCard from "./ArtistCard";
import ArtistInf from "./ArtistInf";
import SongInfCard from "./SongInfCard";

const ArtistContainer = ({
  handleSubmit,
  artistData,
  loading,
  inputSearch,
  handleSearchTracks,
  searchSong,
  artistSelectData,
  songInf,
}) => {
  return (
    <>
      {songInf && <SongInfCard song={songInf} />}
      {artistSelectData && !songInf && (
        <ArtistInf
          loading={loading}
          artistSelectData={artistSelectData}
          searchSong={searchSong}
        />
      )}
      {!artistSelectData && !songInf && (
        <div className="landingArtists_container">
          <SearchSection
            handleSubmit={handleSubmit}
            inputSearch={inputSearch}
          />
          <div className="cards_container">
            {loading ? (
              <Loading />
            ) : (
              artistData.map((el) => (
                <ArtistCard
                  key={el.artist.id}
                  artist={el.artist}
                  handleSearchTracks={handleSearchTracks}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistContainer;
