import React from "react";

const LeftArrow = ({ size, setArtistSelectData, setSongInf, songInf }) => {
  const handleBack = () => {
    if (songInf) {
      setSongInf(null);
      return;
    }

    if (setArtistSelectData) {
      setArtistSelectData(null);
    }
  };

  return (
    <div className="backArtist_section">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        onClick={handleBack}
      >
        <path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
      </svg>
    </div>
  );
};

export default LeftArrow;
