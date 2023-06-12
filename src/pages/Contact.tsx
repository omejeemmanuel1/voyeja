import React from 'react'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />
              Victoria Island Lagos
            </small>
            <small className="me-3 text-light">
              <i className="fa fa-phone-alt me-2" />
              +012 345 6789
            </small>
            <small className="text-light">
              <i className="fa fa-envelope-open me-2" />
                sabiFlexhq@gmail.com
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: 45 }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-instagram fw-normal" />
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
              href=""
            >
              <i className="fab fa-youtube fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}
        
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Voyeja
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/package" className="nav-item nav-link">
            Packages
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
            <Link to="/destination" className="dropdown-item">
                Destination
              </Link>

              <Link to="/booking" className="dropdown-item">
                Booking
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">
          Login
        </Link>
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              Contact Us
            </h1>           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Contact Us
        </h6>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5>Get In Touch</h5>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos
          </p>
          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Office</h5>
              <p className="mb-0">123 Street, New York, USA</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Mobile</h5>
              <p className="mb-0">+012 345 67890</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Email</h5>
              <p className="mb-0">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ minHeight: 300, border: 0 }}
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
  <Footer />
</>

  )
}

export default Contact