import React from "react";
import { SECTIONS } from "../../helpers/SECTIONS";

const Close = ({ size, setSectionOpen, sectionOpen }) => {
  const handleClose = () => {
    setSectionOpen(null);
  };

  return (
    <div
      className={
        sectionOpen === SECTIONS.ARTISTS
          ? "closeSectionArtist"
          : "closeSectionSongs"
      }
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          onClick={handleClose}
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
        </svg>
      </div>
    </div>
  );
};

export default Close;
