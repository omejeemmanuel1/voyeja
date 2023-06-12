import React from 'react'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <>
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
      <a href="/" className="navbar-brand p-0">
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
        <a href="" className="btn btn-primary rounded-pill py-2 px-4">
          Register
        </a>
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">
              Booking
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Process Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Process
        </h6>
        <h1 className="mb-5">3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-globe fa-3x text-white" />
            </div>
            <h5 className="mt-4">Choose A Destination</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-dollar-sign fa-3x text-white" />
            </div>
            <h5 className="mt-4">Pay Online</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
        <div
          className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="position-relative border border-primary pt-5 pb-4 px-4">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
              style={{ width: 100, height: 100 }}
            >
              <i className="fa fa-plane fa-3x text-white" />
            </div>
            <h5 className="mt-4">Fly Today</h5>
            <hr className="w-25 mx-auto bg-primary mb-1" />
            <hr className="w-50 mx-auto bg-primary mt-0" />
            <p className="mb-0">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Process Start */}
  {/* Booking Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="booking p-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 text-white">
            <h6 className="text-white text-uppercase">Booking</h6>
            <h1 className="text-white mb-4">Online Booking</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
              Read More
            </a>
          </div>
          <div className="col-md-6">
            <h1 className="text-white mb-4">Book A Tour</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent"
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
                      className="form-control bg-transparent"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control bg-transparent datetimepicker-input"
                      id="datetime"
                      placeholder="Date & Time"
                      data-target="#date3"
                      data-toggle="datetimepicker"
                    />
                    <label htmlFor="datetime">Date &amp; Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select bg-transparent" id="select1">
                      <option value={1}>Destination 1</option>
                      <option value={2}>Destination 2</option>
                      <option value={3}>Destination 3</option>
                    </select>
                    <label htmlFor="select1">Destination</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-transparent"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: 100 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-outline-light w-100 py-3"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Booking Start */}
  {/* Footer Start */}
  <Footer />
</>

  )
}

export default Booking