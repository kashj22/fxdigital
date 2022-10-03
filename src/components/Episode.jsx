import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const Episode = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getEpisode = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/11/episodes/${id}`
      );
      setEpisode(await response.json());
    };

    getEpisode();

    // console.log(episode);
  }, []);

  const ShowEpisode = () => {
    return (
      <>
        <div className="container">
          <h1>Episode Synopsis</h1>
          <div className="col-md-6" key={episode.id}>
            <img src={episode.image.original} height="400px" width="400px" />
          </div>

          <div className="col-md-6">
            <h1 className="display-5">{episode.name}</h1>
            <p className="lead">Rating: {episode.rating.average}/10</p>
            <p className="lead">{episode.summary}</p>
            <NavLink to="/" className="btn btn-dark ms-2 px-3 py-2">
              Back to Episodes
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <ShowEpisode />
    </>
  );
};

export default Episode;
