import React from "react";
import "../styles/About.css";

const About = () => {
  const services = [
    {
      icon: "bi bi-palette",
      title: "Graphic Design",
      description: "Creative design solutions including logos, branding, marketing materials, and user interfaces.",
      features: ["Logo Design", "Brand Identity", "Print Design", "UI/UX Design"]
    },
    {
      icon: "bi bi-code-slash",
      title: "Web Development",
      description: "Building responsive and functional websites tailored to your business needs.",
      features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: "bi bi-bar-chart",
      title: "Digital Marketing",
      description: "Strategies to enhance your online presence and drive traffic to your website.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Creation", "Email Campaigns"]
    },
    {
      icon: "bi bi-phone",
      title: "App Development",
      description: "Custom mobile applications for iOS and Android platforms.",
      features: ["Native Apps", "Cross-Platform Apps", "App Maintenance", "App Store Optimization"]
    }
  ];

  return (
    <>
      <main className="main">
        <section id="about" className="about section">
          <div className="container">
            <div className="section-title text-center mb-5 py-5 mt-2">
              <span className="subtitle">
                Who We Are
              </span>
              <h2 className="title mb-3 mt-2">About Us</h2>
              <p className="text-muted">
                We are a team of passionate professionals dedicated to providing top-notch services to our clients.<br/> Our mission is to help businesses grow and succeed in the digital world.
              </p>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="about-content">
                  <h3 className="mb-4">Comprehensive Digital Solutions for Modern Businesses</h3>
                  
                  <div className="service-block mb-5">
                    <h4 className="text-primary mb-3">Website Design & Development</h4>
                    <p>Our web development team combines creativity with technical expertise to deliver exceptional digital experiences. We specialize in creating responsive, user-friendly websites that not only look stunning but also drive results. From simple business websites to complex e-commerce platforms, we handle projects of all scales with the same level of dedication and precision.</p>
                    <p>Using cutting-edge technologies and following industry best practices, we ensure your website is fast, secure, and scalable. Our development process includes thorough testing, optimization, and ongoing support to keep your digital presence running smoothly.</p>
                  </div>

                  <div className="service-block mb-5">
                    <h4 className="text-primary mb-3">Search Engine Optimization (SEO)</h4>
                    <p>In today's digital landscape, visibility is key to success. Our SEO experts employ data-driven strategies to improve your website's search engine rankings and drive organic traffic. We conduct thorough keyword research, optimize on-page elements, and build quality backlinks to enhance your online presence.</p>
                    <p>Our comprehensive SEO services include technical SEO audits, content optimization, local SEO, and regular performance monitoring. We stay updated with the latest search engine algorithms to ensure your website maintains its competitive edge.</p>
                  </div>

                  <div className="service-block mb-5">
                    <h4 className="text-primary mb-3">Graphic Design & Branding</h4>
                    <p>Visual communication is crucial for brand success. Our creative team crafts compelling designs that capture your brand's essence and resonate with your target audience. From logo design and brand identity to marketing materials and social media graphics, we deliver visually stunning solutions that help your business stand out.</p>
                    <p>We understand that effective design goes beyond aesthetics. Our approach combines artistic creativity with strategic thinking to create designs that drive engagement and support your business objectives.</p>
                  </div>

                  <div className="service-block mb-5">
                    <h4 className="text-primary mb-3">Digital Marketing</h4>
                    <p>Our digital marketing strategies are tailored to reach your target audience and achieve measurable results. We offer comprehensive services including social media marketing, content marketing, email campaigns, and PPC advertising. Our team analyzes market trends and consumer behavior to develop effective campaigns that drive engagement and conversions.</p>
                  </div>

                  <div className="service-block mb-5">
                    <h4 className="text-primary mb-3">E-commerce Solutions</h4>
                    <p>We help businesses establish and grow their online retail presence through custom e-commerce solutions. From platform selection and setup to payment integration and inventory management, we provide end-to-end e-commerce services that optimize the online shopping experience and maximize sales.</p>
                  </div>

                  <div className="why-choose-us mt-5">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <h3 className="mb-4 text-center text-secondary">Why Choose Us?</h3>
                        <p className="lead mb-4">With over a decade of experience in digital solutions, we've helped hundreds of businesses achieve their online goals. Our commitment to excellence and innovation sets us apart.</p>
                        
                        <div className="benefits-grid mb-4">
                          <div className="benefit-item mb-4">
                            <h5><i className="bi bi-check-circle-fill text-primary me-2"></i>Industry Expertise</h5>
                            <p className="ms-4 text-muted">Expert team with years of industry experience in delivering cutting-edge digital solutions.</p>
                          </div>
                          
                          <div className="benefit-item mb-4">
                            <h5><i className="bi bi-check-circle-fill text-primary me-2"></i>Customized Approach</h5>
                            <p className="ms-4 text-muted">Tailored solutions designed specifically for your business needs and goals.</p>
                          </div>
                          
                          <div className="benefit-item mb-4">
                            <h5><i className="bi bi-check-circle-fill text-primary me-2"></i>Proven Success</h5>
                            <p className="ms-4 text-muted">Track record of successful projects and satisfied clients across various industries.</p>
                          </div>
                          
                          <div className="benefit-item mb-4">
                            <h5><i className="bi bi-check-circle-fill text-primary me-2"></i>Quality Assurance</h5>
                            <p className="ms-4 text-muted">Rigorous quality control and testing processes to ensure perfect delivery.</p>
                          </div>
                          
                          <div className="benefit-item">
                            <h5><i className="bi bi-check-circle-fill text-primary me-2"></i>Ongoing Support</h5>
                            <p className="ms-4 text-muted">Dedicated support team available 24/7 to assist with any concerns or updates.</p>
                          </div>
                        </div>
                        
                        <div className="stats-row row g-4 mt-2">
                          <div className="col-6">
                            <div className="stat-item text-center p-3">
                              <h2 className="text-primary mb-0">500+</h2>
                              <p className="mb-0">Projects Completed</p>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="stat-item text-center p-3">
                              <h2 className="text-primary mb-0">98%</h2>
                              <p className="mb-0">Client Satisfaction</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        <div className="why-choose-image">
                          <img 
                            src="assets/img/about-2.webp" 
                            alt="Why Choose Us" 
                            className="img-fluid rounded-4 shadow-sm" 
                          />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="testimonials section"
        >
          <div className="container section-title">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container">
            <div className="row g-5">
              {[
                {
                  name: "Saul Goodman",
                  position: "Client",
                  image: "testimonials-1.jpg",
                  quote:
                    "Est laborum et doloribus et dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
                },
                {
                  name: "Sara Wilsson",
                  position: "Client",
                  image: "testimonials-2.jpg",
                  quote:
                    "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore.",
                },
                {
                  name: "Jena Karlis",
                  position: "Client",
                  image: "testimonials-3.jpg",
                  quote:
                    "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
                }
              ].map((testimonial, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="testimonial-item">
                    <img
                      src={`assets/img/testimonials/${testimonial.image}`}
                      className="testimonial-img"
                      alt={testimonial.name}
                    />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.position}</h4>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i className="bi bi-star-fill" key={i}></i>
                      ))}
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{testimonial.quote}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
