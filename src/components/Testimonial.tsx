import React from "react";
import "@/styles/testimonial.css";
import Image from "next/image";
import image from "@/images/team-2.jpg";

export default function Testimonial() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5 font-weight-bold color-f37523">Testimonial</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                {/* <img className="img-fluid" src="img/team-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid" />

                {/* <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0 color-1c4185">Client Name</h5>
                <small>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                {/* <img className="img-fluid" src="img/team-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid" />

                {/* <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0 color-1c4185">Client Name</h5>
                <small>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                {/* <img className="img-fluid" src="img/team-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid" />

                {/* <div className="team-social">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div> */}
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0 color-1c4185">Client Name</h5>
                <small>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </small>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}
