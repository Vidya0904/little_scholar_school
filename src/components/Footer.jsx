import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="container">
          <div className="footer-content">
            <a className="d-flex align-items-center" href="#home">
              <img src="./images/logo.png" alt="Logo" width="50" height="50" />
              <div className="logo-w ms-2">
                <h3 className="mb-0">Little Scholars</h3>
                <h6 className="mb-0">Nursery to 4th Standard</h6>
              </div>
            </a>
            <div className="footer-r">
              <div className="footer-contact">
                <div>
                  <h4 className="mb-2">Contact Us</h4>
                  <ul>
                    <li>+91 8976564323</li>
                    <li>demo@demo.com</li>
                    <li>Maharashtra</li>
                  </ul>
                </div>
              </div>
              <div className="footer-contact">
                <div>
                  <h4 className="mb-2">Follow Us</h4>
                  <ul className="footer-social d-flex  gap-2">
                    <li>
                      <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-square-instagram"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i class="fa-brands fa-youtube"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
