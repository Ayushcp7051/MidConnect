import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="bg-img">
        <div className="bg-img-txt">
          <div>
            <h1>Enhancing Indian Health Care System</h1>
            <p>
              A comprehensive platform transforming Indian healthcare with
              accessible, affordable solutions, empowering patients with
              seamless care, consultations, and resources.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Services</h2>
        <div className="box">
          <p>
            Hospitals information, doctor's information, and appointment at one
            place.
          </p>
        </div>
        <div class="card-container">
          <div class="card">
            <div class="icon">
              <i class="fas fa-hospital"></i>
            </div>
            <h3>Hospital Information</h3>
            <p>Get information about hospitals, their location, and contact</p>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fas fa-user-md"></i>
            </div>
            <h3>Doctor Information</h3>
            <p>
              Get information about doctors, their specialization, and contact
            </p>
          </div>
          <div class="card">
            <div class="icon">
              <i class="fas fa-bed"></i>
            </div>
            <h3>Bed Availability Status</h3>
            <p>
              Get information about bed availability status in hospitals and
              book bed
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>About us</h2>
        <div className="about">
          <div className="left">
            <img src="/images/about.jpg" alt="About Us" />
          </div>
          <div className="right">
            <h3>MedTech</h3>
            <p>
              MedTech is a comprehensive platform transforming Indian healthcare
              with accessible, affordable solutions, empowering patients with
              seamless care, consultations, and resources.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Contact Us</h2>
        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <div class="icon">
                <i class="fas fa-map-marker"></i>
              </div>
              <div class="text">
                <h3>Location</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="text">
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div class="info-item">
              <div class="icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="text">
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form>
              <div class="form-group">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
