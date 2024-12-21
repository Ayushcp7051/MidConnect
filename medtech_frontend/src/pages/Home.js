import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="bg-img"></div>
      <div className="bg-img-txt">
        <div>
          <h1>Enhancing Indian Health Care System</h1>
          <p>
            A comprehensive platform transforming Indian healthcare with
            accessible, affordable solutions, empowering patients with seamless
            care, consultations, and resources.
          </p>
        </div>
      </div>
      <div className="services"></div>
    </div>
  );
}

export default Home;
