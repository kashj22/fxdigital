import React, { useState, useEffect } from "react";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  let didCancel = true;

  useEffect(() => {
    const getShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/11/episodes");

      if (didCancel) {
        const data = await response.json();
        setEpisodes(data.slice(0, 10));
      }
    };

    getShows();
    console.log(episodes);

    return () => {
      didCancel = false;
    };
  }, []);

  const ShowEpisodes = () => {
    return (
      <>
        <div className="container">
          <div>Gotham Episodes</div>
          {episodes.map((episode) => {
            <ul className="episodelist">
              <li>{episode.title}</li>
            </ul>;
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <ShowEpisodes />
    </div>
  );
};

export default Home;
