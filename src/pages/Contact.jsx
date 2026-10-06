import React from "react";
import Activities from "../pages/Activities";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="cntct-content">
            <div className="cntct-content-form">
              <div>
                <label>Student Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="studentName"
                  placeholder="Enter Student Name"
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  id="dob"
                  placeholder="Enter Student Name"
                />
              </div>
              <div>
                <label>Class Applying For</label>
                <select className="form-select" id="class">
                  <option selected>Select Class</option>
                  <option value="1">Nursery</option>
                  <option value="2">Jr. KG</option>
                  <option value="3">Sr. KG</option>
                  <option value="4">1st Standard</option>
                  <option value="5">2nd Standard</option>
                  <option value="6">3rd Standard</option>
                  <option value="7">4t Standard</option>
                </select>
              </div>
              <div>
                <label>Parent Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="parentName"
                  placeholder="Enter Parent Name"
                />
              </div>
              <div>
                <label>Mobile Number</label>
                <input
                  className="form-control"
                  type="number"
                  id="mobile"
                  placeholder="Enter Mobile number"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="Enter Email address"
                />
              </div>
              <div>
                <label>Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  className="form-control"
                  id="msg"
                  placeholder="Enter Message"
                />
              </div>
            </div>
            <button className="submit-btn">Submit Query</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
