import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/11/episodes");
      const data = await response.json();
      setEpisodes(data.slice(0, 12));
    };

    getShows();

    console.log(episodes);
  }, []);

  const ShowEpisodes = () => {
    return (
      <>
        <div className="container">
          <h1 className="display-6 fw-bolder text-center">Gotham Episodes</h1>
          <hr />

          <div className="row">
            {episodes.map((episode) => {
              return (
                <>
                  <div className="col-md-4 mb-4">
                    <div
                      className="card text-center p-5"
                      style={{ width: "19rem", height: "19rem" }}
                      key={episode.id}
                    >
                      <img
                        src={episode.image.original}
                        height="250px"
                        width="200px"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{episode.name}</h5>
                        <NavLink
                          to={`/episodes/${episode.id}`}
                          className="btn btn-outline-dark"
                        >
                          More Info
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
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
