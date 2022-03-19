import React from "react";

const SongInfCard = ({ song }) => {
  const lyrics = song?.sections[1]?.text;
  const artist = song?.subtitle;
  const title = song?.title;
  const gender = song?.genres?.primary;
  const album = song?.sections[0]?.metadata[0]?.text;
  const year = song?.sections[0]?.metadata[2]?.text;
  const link = song.sections[2]?.youtubeurl?.actions[0]?.uri;

  return (
    <div className="songInfContainer">
      <div className={`imageSongZone ${!lyrics && "noLyric_case"}`}>
        <img
          src={
            song?.images?.coverart
              ? song?.images?.coverart
              : "./images/noSong.jpg"
          }
          alt={song?.title}
        />
      </div>
      {lyrics && (
        <div className="lyricSongZone">
          <h1>LYRICS</h1>
          <div>
            {lyrics.map((el, i) => (
              <p key={i}>{el}</p>
            ))}
          </div>
        </div>
      )}
      <div className={`infSongZone ${!lyrics && "noLyric_case"}`}>
        <p>Artist: {artist}</p>
        <p>Song: {title}</p>
        <p>Gender: {gender}</p>
        {album && <p>Album: {album}</p>}
        <p>Year: {year}</p>
        {link && (
          <p>
            Video: <a href={link}>Click here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SongInfCard;
