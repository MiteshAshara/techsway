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
              success. At Techsinfoway , we are committed to
              empowering organizations through cutting-edge web and mobile
              applications, seamless user experiences, and data-driven
              strategies. Our dedicated team strives to deliver scalable,
              secure, and customized digital solutions that drive transformation
              and deliver measurable value.
            </p>

            <div className="social-links d-flex gap-3">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
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
                  <i className="bi bi-geo-alt me-2"></i>
                  R.K. Empire, 1207, 150 Feet Ring Rd,
                  <br />
                  <span className="ms-4">Mavdi Circle, Rajkot, Gujarat</span>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <i className="bi bi-telephone me-2"></i>
                  +1 5589 55488 55
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <i className="bi bi-envelope me-2"></i>
                  techsinfoway@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="col-lg-3 col-md-6">
            <h4>Find Us</h4>
            <div className="map-container mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.1005789141867!2d70.78592736957214!3d22.262744998732106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb1de38ee47f%3A0xc311495dca25c529!2sHodophilia!5e0!3m2!1sen!2sin!4v1747403427863!5m2!1sen!2sin"
                width="100%"
                height="180"
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
