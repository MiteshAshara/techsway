import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title text-center mb-1 py-5 mt-1">
          <span className="subtitle">Contact Us</span>
          <h2 className="title mt-2">Get In Touch With Us</h2>
          <h5 className="text-muted">
            If you have any questions or inquiries, feel free to reach out to
            us. <br /> We are here to help you!
          </h5>
        </div>
        <div className="container mt-2">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="contact-wrapper">
                <div className="row g-0">
                  <div className="col-lg-5">
                    <div className="contact-info">
                      <h2>Get in Touch</h2>
                      <p className="mb-4">
                        We are always open to discussing new projects, creative
                        ideas, or opportunities to be part of your visions.
                      </p>

                      <div className="info-item">
                        <div className="icon-box">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div>
                          <h4>Location:</h4>
                          <p>
                            <a
                              href="https://maps.app.goo.gl/8XYyzSPanTREuCkXA"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-light"
                            >
                              R.K. Empire, 1207, 150 Feet Ring Rd, Mavdi Circle,
                              Rajkot, Gujarat
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="icon-box">
                          <i className="bi bi-envelope"></i>
                        </div>
                        <div>
                          <h4>Email:</h4>
                          <p>
                            <a
                              href="mailto:techsinfoway@gmail.com"
                              className="text-decoration-none text-light"
                            >
                              techsinfoway@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* <div className="info-item">
                        <div className="icon-box">
                          <i className="bi bi-phone"></i>
                        </div>
                        <div>
                          <h4>Call:</h4>
                          <p>+91 9054869699</p>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div className="col-lg-7">
                    <form className="contact-form">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Your Message"
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
