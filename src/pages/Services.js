import React, { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      icon: "bi bi-palette",
      title: "Graphic Design",
      description: "Creative design solutions including logos, branding, marketing materials, and user interfaces.",
      features: ["Logo Design", "Brand Identity", "Print Design", "UI/UX Design"]
    },
    {
      icon: "bi bi-code-square",
      title: "Website Development",
      description: "Custom website development using latest technologies and best practices.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Web Applications"]
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "SEO Services",
      description: "Comprehensive SEO strategies to improve your website's visibility and ranking.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: "bi bi-gear-wide-connected",
      title: "IT Consulting",
      description: "Expert IT consulting services to help your business grow and succeed.",
      features: ["IT Strategy", "System Integration", "Cloud Solutions", "Security Services"]
    }
  ];

  return (
    <section id="services" className="services section mt-2">
      <div className="container">
        <div className="section-title text-center py-3 mt-5">
          <span className="subtitle">What We Offer</span>
          <h2 className="title mb-3">Our Services</h2>
          <p className="text-muted">Comprehensive IT Solutions for Your Business</p>
        </div>

        <div className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
          <p className="lead py-3">
            We provide cutting-edge technology solutions to help businesses thrive in the digital age. 
            Our expert team delivers innovative services tailored to your specific needs, ensuring 
            your success in today's competitive market.
          </p>
          <h4 className='text-muted py-3'>
            Explore our range of services below and discover <br/> how we can help transform your business.
          </h4>
        </div>

        <div className="service-sections">
          {/* Core Services Section */}
          <div className="service-section mb-5">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="service-detail">
                  <h3 className="text-primary mb-4">Web Development Excellence</h3>
                  <p className="lead">Transform your digital presence with our cutting-edge web development solutions.</p>
                  <p>Our expert team combines innovative design with powerful functionality to create websites that drive results. Using the latest technologies and frameworks, we ensure your website is not just visually stunning but also performs exceptionally.</p>
                  <ul className="feature-list mt-4">
                    <li><i className="bi bi-check2-circle me-2"></i>Custom Website Development</li>
                    <li><i className="bi bi-check2-circle me-2"></i>E-commerce Solutions</li>
                    <li><i className="bi bi-check2-circle me-2"></i>Progressive Web Apps</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-detail">
                  <h3 className="text-primary mb-4">Digital Marketing Solutions</h3>
                  <p className="lead">Boost your online presence and reach your target audience effectively.</p>
                  <p>We develop comprehensive digital marketing strategies that align with your business goals. From SEO to social media management, our approaches are data-driven and results-oriented.</p>
                  <ul className="feature-list mt-4">
                    <li><i className="bi bi-check2-circle me-2"></i>Search Engine Optimization</li>
                    <li><i className="bi bi-check2-circle me-2"></i>Social Media Marketing</li>
                    <li><i className="bi bi-check2-circle me-2"></i>Content Marketing Strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Services Section */}
          <div className="service-section mb-5 p-5 rounded-4">
            <h2 className="text-center mb-5">Advanced Technology Solutions</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="tech-feature text-center">
                  <i className="bi bi-code-square display-4 text-primary mb-3"></i>
                  <h4>Custom Software Development</h4>
                  <p>Tailored solutions designed to streamline your business operations and improve efficiency.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tech-feature text-center">
                  <i className="bi bi-phone display-4 text-primary mb-3"></i>
                  <h4>Mobile App Development</h4>
                  <p>Native and cross-platform mobile applications that engage users and drive growth.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tech-feature text-center">
                  <i className="bi bi-cloud display-4 text-primary mb-3"></i>
                  <h4>Cloud Solutions</h4>
                  <p>Scalable cloud infrastructure and services to power your digital transformation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="process-section mb-5">
            <h2 className="text-center mb-5">Our Development Process</h2>
            <div className="row g-4">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your requirements and business goals" },
                { step: "02", title: "Planning", desc: "Developing strategy and project roadmap" },
                { step: "03", title: "Design", desc: "Creating user-centered design solutions" },
                { step: "04", title: "Development", desc: "Building robust and scalable solutions" }
              ].map((phase, index) => (
                <div className="col-md-3" key={index}>
                  <div className="process-step text-center">
                    <div className="step-number mb-3">{phase.step}</div>
                    <h4>{phase.title}</h4>
                    <p>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="technologies-section p-5 rounded-4 mb-5">
            <h2 className="text-center mb-5">Technologies We Excel In</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="tech-category">
                  <h5 className="mb-4"><i className="bi bi-braces-asterisk me-2"></i>Frontend</h5>
                  <ul className="tech-list">
                    <li><i className="bi bi-filetype-jsx text-primary me-2"></i>React.js</li>
                    <li><i className="bi bi-diagram-2 text-primary me-2"></i>Angular</li>
                    <li><i className="bi bi-code-slash text-primary me-2"></i>Vue.js</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tech-category">
                  <h5 className="mb-4"><i className="bi bi-server me-2"></i>Backend</h5>
                  <ul className="tech-list">
                    <li><i className="bi bi-code-slash text-primary me-2"></i>Node.js</li>
                    <li><i className="bi bi-filetype-py text-primary me-2"></i>Python</li>
                    <li><i className="bi bi-filetype-php text-primary me-2"></i>PHP</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tech-category">
                  <h5 className="mb-4"><i className="bi bi-phone me-2"></i>Mobile</h5>
                  <ul className="tech-list">
                    <li><i className="bi bi-phone-flip text-primary me-2"></i>React Native</li>
                    <li><i className="bi bi-phone-vibrate text-primary me-2"></i>Flutter</li>
                    <li><i className="bi bi-apple text-primary me-2"></i>Swift</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tech-category">
                  <h5 className="mb-4"><i className="bi bi-database me-2"></i>Database</h5>
                  <ul className="tech-list">
                    <li><i className="bi bi-database-check text-primary me-2"></i>MongoDB</li>
                    <li><i className="bi bi-database-fill text-primary me-2"></i>MySQL</li>
                    <li><i className="bi bi-database-add text-primary me-2"></i>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
