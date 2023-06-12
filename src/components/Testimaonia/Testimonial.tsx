import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonial1 from "../../assets/img/testimonial-1.jpg";
import Testimonial2 from "../../assets/img/testimonial-2.jpg";
import Testimonial3 from "../../assets/img/testimonial-3.jpg";
import Testimonial4 from "../../assets/img/testimonial-4.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20
  }
};

const Testimonial = () => {
  const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
    <button className="carousel-custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );

  const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
    <button className="carousel-custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );

  return (
    <div>
      {/* Testimonial Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <Carousel
            responsive={responsive}
            partialVisible={true}
            showDots={false}
            arrows={true}
            
          >
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={Testimonial1}
                style={{ width: 80, height: 80 }}
                alt="Testimonial 1"
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={Testimonial2}
                style={{ width: 80, height: 80 }}
                alt="Testimonial 2"
              />
              <h5 className="mb-0">Jane Smith</h5>
              <p>Los Angeles, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={Testimonial3}
                style={{ width: 80, height: 80 }}
                alt="Testimonial 3"
              />
              <h5 className="mb-0">Michael Johnson</h5>
              <p>Chicago, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={Testimonial4}
                style={{ width: 80, height: 80 }}
                alt="Testimonial 4"
              />
              <h5 className="mb-0">Sarah Wilson</h5>
              <p>Miami, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default Testimonial;
