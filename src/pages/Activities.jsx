import React from "react";

function Activities() {
  return (
    <>
      <section id="activities" className="activities">
        <div className="container">
          <h6>Learning Beyond Books</h6>
          <h3>Our Activities</h3>

          <div className="act-cards">
            <div className="act-card-content">
              <img src="./images/activity/a1.jpeg" alt="a1" />
              <p>Art & Craft</p>
            </div>
            <div className="act-card-content">
              <img src="./images/activity/a2.jpeg" alt="a2" />
              <p>Music & Dance</p>
            </div>
            <div className="act-card-content">
              <img src="./images/activity/a3.jpeg" alt="a3" />
              <p>Outdoor Play</p>
            </div>
            <div className="act-card-content">
              <img src="./images/activity/a4.jpeg" alt="a4" />
              <p>Story Time</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
