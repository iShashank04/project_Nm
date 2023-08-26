import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from 'react-router-dom';

const Contact = ({ onSubmit }) => {
  const navigate = useNavigate();
  
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number, email, org });
    navigate('/DetailsPage');
  }
  return (
    <div><h1>Contact Us</h1>
    <div className="form">
      <h3>Contact Details</h3>
      <p>Please fill your information .</p>
      <hr></hr>
    <form onSubmit={handleSubmit}>
      <div className="forminner">
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="field"><label htmlFor="org">Organization:</label>
        <input
          type="text"
          id="org"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        /></div>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Contact;
