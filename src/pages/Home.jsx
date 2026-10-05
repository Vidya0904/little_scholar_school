import React from "react";

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-section-content">
            <h6>Welcome to</h6>
            <h1>Little Scholars School</h1>
            <h5>Nursery to 4th Standard</h5>
            <ul>
              <li>Learn</li>
              <li>Play</li>
              <li>Grow</li>
            </ul>
            <p>
              We provide a safe, happy and nurturing environment where every
              child learns, explores and grows with confidence
            </p>

            <a className="apply-btn" href="#contact">
              Apply for Admission
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
