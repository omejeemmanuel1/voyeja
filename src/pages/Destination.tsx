
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"


const Destination = () => {
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
      <Link to="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Voyeja
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </Link>
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
              Destination
            </h1>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
  {/* Destination Start */}
  <div className="container-xxl py-5 destination">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Destination
        </h6>
        <h1 className="mb-5">Popular Destination</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  30% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Thailand
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  25% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Malaysia
                </div>
              </a>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  35% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Australia
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/destination-4.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
              20% OFF
            </div>
            <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
              Indonesia
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Destination Start */}
  {/* Footer Start */}
  <Footer />
</>

  )
}

export default Destination
