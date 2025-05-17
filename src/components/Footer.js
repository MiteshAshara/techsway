import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Column 1: Company Info */}
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="logo d-flex align-items-center mb-2">
              <h1 className="sitename">Techsinfoway</h1>
            </Link>
            <p className="company-description">
              Delivering innovative technology solutions for business growth and
              success. At Techsinfoway , we are committed to empowering
              organizations through cutting-edge web and mobile applications,
              seamless user experiences, and data-driven strategies. Our
              dedicated team strives to deliver scalable, secure, and customized
              digital solutions that drive transformation and deliver measurable
              value.
            </p>

            <div className="social-links d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=61559284978943"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://www.instagram.com/techsinfoway/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              {/* <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <p className="address-text">
                  <a
                    href="https://maps.app.goo.gl/8XYyzSPanTREuCkXA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="bi bi-geo-alt me-2 "></i>
                    R.K. Empire, 1207, 150 Feet Ring Rd,
                    <br />
                    <span className="ms-4">Mavdi Circle, Rajkot, Gujarat</span>
                  </a>
                </p>
              </div>
              {/* <div className="contact-item">
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  +91 9054869699
                </p>
              </div> */}
              <div className="contact-item">
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  <a
                    href="mailto:techsinfoway@gmail.com"
                    className="text-decoration-none"
                  >
                    techsinfoway@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <i className="bi bi-globe me-2"></i>
                  <a
                    href="https://techsinfoway.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    techsinfoway.vercel.app
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="col-lg-3 col-md-6">
            <h4>Find Us</h4>
            <div className="map-container mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4047981371214!2d70.78454045365768!3d22.262650900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca5dbe7afda3%3A0x6d8e1af5be0f4126!2sRK%20Empire!5e0!3m2!1sen!2sin!4v1747490438717!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Techsinfoway</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
