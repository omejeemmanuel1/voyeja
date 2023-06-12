
import React from 'react'
import Team1 from '../../assets/img/team-1.jpg'
import Team2 from '../../assets/img/team-2.jpg'
import Team3 from '../../assets/img/team-3.jpg'
import Team4 from '../../assets/img/team-4.jpg'
const Team = () => {
  return (
    <div>
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Travel Guide
        </h6>
        <h1 className="mb-5">Meet Our Guide</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={Team1} alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={Team2} alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={Team3} alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="overflow-hidden">
              <img className="img-fluid" src={Team4} alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-19px" }}
            >
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-square mx-1" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}

    </div>
  )
}

export default Team