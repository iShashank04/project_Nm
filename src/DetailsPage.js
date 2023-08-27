import { useNavigate } from 'react-router-dom';
import "./DetailsPage.css";
import React, { useState } from "react";
import logo from "./logo_nm.png";

function DetailsPage({ details }) {
  const navigate = useNavigate();
  const navigateHome = () => {

    navigate('/');
  };
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div>
      <div className="detail">
        <img className="logo" src={logo} />
        <div>
        <h1>Details</h1>
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        </div>
      </div>
      <div className="upload1">
      <h2>Add Image:</h2>
            <input className="upload"type="file" onChange={handleChange} />
            <img src={file} />
      </div>
      <button onClick={navigateHome}>Return</button>
    </div>
  );
}
export default DetailsPage;
