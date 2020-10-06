import React, { useState } from "react";
import axios from "axios";
import "./JobSearch.css";

function JobSearch() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");

  let handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  let handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  let handleSearch = () => {
    axios
      .get(`http://localhost:8080/jobs/${location}/${position}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((jsonRes) => {
        console.log(jsonRes);
      });
  };

  return (
    <div className="base">
      <div className="form-base">
        <input
          type="text"
          value={position}
          placeholder="Position"
          onChange={handlePositionChange}
        />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={handleLocationChange}
        />
        <input type="button" value="Search" onClick={handleSearch} />
      </div>
      <div className="search-result">
        <div className="jobs-list"></div>
        <div className="job-description"></div>
      </div>
    </div>
  );
}

export default JobSearch;
