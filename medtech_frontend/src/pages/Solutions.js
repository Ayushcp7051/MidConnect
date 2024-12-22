import React from "react";
import "./Solutions.css";

function Solutions() {
  return (
    <div className="solutions">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          ></input>
          <button type="submit" className="searchButton">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img src="/images/telemedicine.jpg" alt="Telemedicine" />
        </div>
      </div>
    </div>
  );
}

export default Solutions;
