import axios from "axios";
import { useRef, useState } from "react";
import LandingArtists from "./components/Landing/Artists/LandingArtists";
import LandingSongs from "./components/Landing/Songs/LandingSongs";
import { SECTIONS } from "./helpers/SECTIONS";
import "./styles/bodyStyles.css";
import "./styles/landingStyles.css";

function App() {
  const [sectionOpen, setSectionOpen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [artistSelectData, setArtistSelectData] = useState(null);
  const [songInf, setSongInf] = useState(null);

  const inputSearch = useRef();

  const changeSection = (e) => {
    if (e.target.classList.contains("artistSection")) {
      setSectionOpen(SECTIONS.ARTISTS);
    }

    if (e.target.classList.contains("songsSection")) {
      setSectionOpen(SECTIONS.SONGS);
    }
  };

  const searchSong = (e) => {
    let url = "https://shazam.p.rapidapi.com/songs/get-details";

    var options = {
      params: { key: e.target.id, locale: "en-US" },
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "32ea61c07cmsh0e54b5b205a547fp16232bjsn63e17d86aa3a",
      },
    };

    setLoading(true);
    axios
      .get(url, options)
      .then(({ data }) => {
        setSongInf(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="landingContainer">
      <div className="landingPresentation_container">
        <LandingArtists
          sectionOpen={sectionOpen}
          loading={loading}
          inputSearch={inputSearch}
          songInf={songInf}
          artistSelectData={artistSelectData}
          setSectionOpen={setSectionOpen}
          setLoading={setLoading}
          setArtistSelectData={setArtistSelectData}
          setSongInf={setSongInf}
          searchSong={searchSong}
          changeSection={changeSection}
        />
        <LandingSongs
          sectionOpen={sectionOpen}
          loading={loading}
          songInf={songInf}
          inputSearch={inputSearch}
          setSectionOpen={setSectionOpen}
          setLoading={setLoading}
          setSongInf={setSongInf}
          changeSection={changeSection}
          searchSong={searchSong}
        />
      </div>
    </div>
  );
}

export default App;
