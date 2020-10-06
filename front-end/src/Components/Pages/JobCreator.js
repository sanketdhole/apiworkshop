import React, { useState } from "react";
import "./JobCreator.css";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

function JobCreator() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [skills, setSkills] = useState([]);

  let handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  let handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  let handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  let handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  let handleDateChange = (event) => {
    setDate(event.target.value);
  };

  let handleSkillsChange = (event) => {
    setSkills(event.target.value.split(","));
  };

  let submitPost = (event) => {
    event.preventDefault();
    let data = {
      companyName,
      jobTitle,
      description,
      location,
      expiryDate: date,
      skills,
    };
    console.log(JSON.stringify(data));
    axios
      .post("http://localhost:8080/jobs", JSON.stringify(data))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <h2>Create Job Post</h2>
      <div className="form-container-new">
        <table>
          <tr className="form-group">
            <th>
              <label htmlFor="companyName">Comapny Name</label>
            </th>
            <th>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </th>
          </tr>
          <tr className="form-group">
            <td>
              <label htmlFor="jobTitle">Job Title</label>
            </td>
            <td>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
            </td>
          </tr>
          <tr className="form-group">
            <td>
              <label htmlFor="description">Description</label>
            </td>
            <td>
              <textarea
                name="description"
                id="description"
                rows="10"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </td>
          </tr>
          <tr className="form-group">
            <td>
              <label htmlFor="location">Location</label>
            </td>
            <td>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
            </td>
          </tr>
          <tr className="form-group">
            <td>
              <label htmlFor="expiryDate">Expiry Date</label>
            </td>
            <td>
              <input
                type="date"
                name="expiryDate"
                placeholder="Date"
                value={date}
                onChange={handleDateChange}
              />
            </td>
          </tr>
          <tr className="form-group">
            <td>
              <label htmlFor="skills">Skills</label>
            </td>
            <td>
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={skills.join(",")}
                onChange={handleSkillsChange}
              />
            </td>
          </tr>
        </table>
        <input type="button" value="Create Post" onClick={submitPost} />
      </div>
    </div>
  );
}

export default JobCreator;
