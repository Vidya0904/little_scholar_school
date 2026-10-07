import React from "react";

function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <img src="./images/about/about-img.jpeg" alt="aboutImg" />
            <div className="about-r">
              <h6>About our school</h6>
              <h3>
                Where Learning Feels
                <br /> Like an Adventure
              </h3>
              <p>
                At Little Scholars School, we believe that every child is unique
                and full of potential. Our nurturing and inspiring environment
                helps children build a strong foundation in academics,
                creativity, confidence and social skills. We focus on joyful
                learning, play-based activities and personal attention so that
                every child grows with happiness and curiosity.
              </p>

              <div className="about-card">
                <div className="abt-card-content">
                  <img src="./images/about/leaf.png" alt="leaf" />
                  <h5>Child-Centered Learning</h5>
                  <p>
                    We tailor learning to each child's pace, interests and
                    unique strengths.
                  </p>
                </div>
                <div className="abt-card-content">
                  <img src="./images/about/teacher.png" alt="teacher" />
                  <h5>Caring Teachers</h5>
                  <p>
                    Our experienced and compassionate teachers truly care about
                    every child.
                  </p>
                </div>
                <div className="abt-card-content">
                  <img src="./images/about/safe.png" alt="safe" />
                  <h5>Safe & Happy Environment</h5>
                  <p>
                    We provide a secure, clean and friendly space for children
                    to thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
