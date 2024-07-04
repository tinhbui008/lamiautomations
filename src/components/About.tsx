import React from "react";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";
import "@/styles/about.css";

export default function About() {
  return (
    <div>
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                {/* <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg" 
                style={{objectFit: "cover"}} alt="" /> */}
                <Image
                  src={image}
                  alt=""
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4 font-weight-bold">About Us</h1>
                </div>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4 mb-4 pb-2">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        {/* <i className="fa fa-users fa-2x text-primary"></i> */}
                        <i className="bi bi-people-fill icon-2em"></i>
                      </div>
                      <div className="ms-3">
                        <h2
                          className="text-darkorange mb-1"
                          data-toggle="counter-up"
                        >
                          1234
                        </h2>
                        <p className="fw-medium mb-0">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: "60px", height: "60px" }}
                      >
                        <i className="bi bi-check-lg icon-2em"></i>
                      </div>
                      <div className="ms-3">
                        <h2
                          className="text-darkorange mb-1"
                          data-toggle="counter-up"
                        >
                          1234
                        </h2>
                        <p className="fw-medium mb-0">Projects Done</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn-explore py-3 px-5 text-white">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
