import React from "react";

const Home = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="hero-content">
                <div className="company-badge d-inline-flex mb-4">
                  <i className="bi bi-code-square me-2"></i>
                  Innovative IT Solutions
                </div>

                <h1 className="mb-4">
                  Transforming Ideas Into <br />
                  <span className="accent-text">Digital Solutions</span>
                </h1>

                <p
                  className="mb-4 mb-md-5 mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  We specialize in creating cutting-edge web applications,
                  mobile solutions, and digital experiences that help businesses
                  thrive in the modern digital landscape.
                </p>

                <div className="hero-buttons d-flex justify-content-center gap-3">
                  <a href="/services" className="btn btn-primary">
                    Explore Services
                    <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                  <a href="/contact" className="btn btn-outline-primary">
                    <i className="bi bi-headset me-1"></i>
                    Get Free Consultation
                  </a>
                </div>

                <div className="achievements-badges mt-5 d-flex justify-content-center gap-4">
                  <div className="achievement-item">
                    <h4>500+</h4>
                    <p>Projects Completed</p>
                  </div>
                  <div className="achievement-item">
                    <h4>98%</h4>
                    <p>Client Satisfaction</p>
                  </div>
                  <div className="achievement-item">
                    <h4>8+</h4>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Complete Business Solutions</h2>
            <p className="lead">
              Comprehensive digital solutions to address all your business needs
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "bi bi-laptop",
                title: "Digital Transformation",
                description:
                  "Modernize your business operations with our digital transformation solutions. We help you leverage the latest technologies to improve efficiency, reduce costs, and enhance customer experience.",
                features: [
                  "Process Automation",
                  "Cloud Migration",
                  "Digital Workflow",
                  "System Integration",
                ],
              },
              {
                icon: "bi bi-pie-chart",
                title: "Business Analytics",
                description:
                  "Make data-driven decisions with our advanced analytics solutions. We help you gather, analyze, and visualize data to uncover insights that drive business growth.",
                features: [
                  "Real-time Analytics",
                  "Predictive Modeling",
                  "Performance Metrics",
                  "Custom Dashboards",
                ],
              },
              {
                icon: "bi bi-shield-lock",
                title: "Cybersecurity",
                description:
                  "Protect your business with our comprehensive security solutions. We implement robust security measures to safeguard your digital assets and maintain data integrity.",
                features: [
                  "Threat Detection",
                  "Data Protection",
                  "Security Audits",
                  "Compliance Management",
                ],
              },
            ].map((solution, index) => (
              <div className="col-lg-4" key={index}>
                <div className="solution-card h-100 p-4 bg-white rounded-4">
                  <div className="solution-icon mb-4">
                    <i className={`${solution.icon} h1 text-primary`}></i>
                  </div>
                  <h3 className="h4 mb-3">{solution.title}</h3>
                  <p className="mb-4">{solution.description}</p>
                  <ul className="feature-list list-unstyled">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check2-circle text-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Approach</h2>
            <p className="lead">
              A systematic approach to delivering exceptional results
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description:
                  "We begin by understanding your business objectives, challenges, and requirements. Our team conducts thorough research and analysis to develop a comprehensive project roadmap.",
                features: [
                  "Requirements Analysis",
                  "Market Research",
                  "Technology Assessment",
                  "Project Planning",
                ],
              },
              {
                number: "02",
                title: "Design & Development",
                description:
                  "Our expert team designs and develops solutions using the latest technologies and best practices. We ensure regular communication and feedback throughout the development process.",
                features: [
                  "UI/UX Design",
                  "Agile Development",
                  "Quality Assurance",
                  "Performance Optimization",
                ],
              },
              {
                number: "03",
                title: "Deployment & Support",
                description:
                  "We ensure smooth deployment of solutions and provide ongoing support and maintenance. Our team is always available to address any concerns and implement updates.",
                features: [
                  "Deployment Strategy",
                  "Performance Monitoring",
                  "Regular Updates",
                  "24/7 Support",
                ],
              },
            ].map((step, index) => (
              <div className="col-lg-4" key={index}>
                <div className="process-card h-100 p-4 rounded-4">
                  <div className="process-number mb-4">
                    <span className="h1 text-primary">{step.number}</span>
                  </div>
                  <h3 className="h4 mb-3">{step.title}</h3>
                  <p className="mb-4">{step.description}</p>
                  <ul className="feature-list list-unstyled">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-arrow-right text-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Impact in Numbers</h2>
            <p className="lead">
              Delivering measurable results for our clients
            </p>
          </div>
          <div className="row stats-row g-4">
            {[
              {
                icon: "bi bi-trophy-fill",
                number: "25+",
                label: "Awards Won",
                description: "International recognition for excellence",
              },
              {
                icon: "bi bi-people-fill",
                number: "1200+",
                label: "Happy Clients",
                description: "Across 30+ countries worldwide",
              },
              {
                icon: "bi bi-graph-up-arrow",
                number: "98%",
                label: "Success Rate",
                description: "In project completion & delivery",
              },
              {
                icon: "bi bi-lightning-fill",
                number: "8+",
                label: "Years Experience",
                description: "Of digital excellence",
              },
            ].map((stat, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="stat-card text-center">
                  <div className="stat-icon-wrapper mb-3">
                    <i className={`${stat.icon} display-4`}></i>
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <h4 className="stat-label">{stat.label}</h4>
                  <p className="text-muted mb-0">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="comprehensive-services py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="title mt-2 mb-3">Our Expertise</h1>
            <h5 className="lead mx-auto" style={{ maxWidth: "800px" }}>
              We offer end-to-end digital solutions tailored to meet your
              business <br /> objectives and drive sustainable growth in today's
              competitive landscape.
            </h5>
          </div>

          <div className="services-grid">
            {[
              {
                category: "Digital Transformation",
                description:
                  "Revolutionize your business operations with cutting-edge digital solutions",
                services: [
                  {
                    title: "Enterprise Solutions",
                    description:
                      "Custom enterprise software development including ERP, CRM, and business process automation systems.",
                    features: [
                      "Scalable Architecture",
                      "Integration Capabilities",
                      "Custom Workflows",
                      "Real-time Analytics",
                    ],
                    technologies: [
                      "Cloud Computing",
                      "Microservices",
                      "API Development",
                    ],
                  },
                  {
                    title: "Digital Workplace Solutions",
                    description:
                      "Modern workplace solutions that enhance collaboration and productivity.",
                    features: [
                      "Remote Work Tools",
                      "Team Collaboration",
                      "Document Management",
                      "Process Automation",
                    ],
                  },
                ],
              },
              {
                category: "Web Development",
                description:
                  "Create powerful web applications that deliver exceptional user experiences",
                services: [
                  {
                    title: "Custom Web Applications",
                    description:
                      "Tailored web solutions built with modern technologies and best practices.",
                    features: [
                      "Responsive Design",
                      "Progressive Web Apps",
                      "Performance Optimization",
                      "Security",
                    ],
                  },
                  {
                    title: "E-commerce Solutions",
                    description:
                      "Complete e-commerce platforms with advanced features and integrations.",
                    features: [
                      "Payment Gateway Integration",
                      "Inventory Management",
                      "Order Processing",
                      "Analytics",
                    ],
                  },
                ],
              },
              {
                category: "Digital Marketing",
                description:
                  "Strategic digital marketing solutions to boost your online presence",
                services: [
                  {
                    title: "SEO & Content Marketing",
                    description:
                      "Comprehensive SEO strategies and content creation services.",
                    features: [
                      "Keyword Research",
                      "Content Strategy",
                      "Link Building",
                      "Performance Tracking",
                    ],
                  },
                  {
                    title: "Social Media Marketing",
                    description:
                      "Engaging social media campaigns and community management.",
                    features: [
                      "Platform Strategy",
                      "Content Creation",
                      "Community Management",
                      "Analytics",
                    ],
                  },
                ],
              },
            ].map((category, index) => (
              <div className="service-category mb-5" key={index}>
                <h3 className="category-title mb-4">{category.category}</h3>
                <p className="category-description mb-4">
                  {category.description}
                </p>
                <div className="row g-4">
                  {category.services.map((service, idx) => (
                    <div className="col-lg-6" key={idx}>
                      <div className="service-detail-card h-100">
                        <h4 className="service-title mb-3">{service.title}</h4>
                        <p className="service-description mb-4">
                          {service.description}
                        </p>
                        <ul className="feature-list list-unstyled">
                          {service.features.map((feature, fidx) => (
                            <li key={fidx}>
                              <i className="bi bi-check2-circle text-primary me-2"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
