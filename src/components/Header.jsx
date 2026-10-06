import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img src="./images/logo.png" alt="Logo" width="50" height="50" />
            <div className="logo ms-2">
              <h3 className="mb-0">Little Scholars</h3>
              <h6 className="mb-0">Nursery to 4th Standard</h6>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#classes">
                  Classes
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="#activities">
                  Facilities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#activities">
                  Activities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <a className="apply-btn" href="#contact">
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
