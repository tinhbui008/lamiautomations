import React from "react";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";
import "@/styles/service.css";

export default function Service() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5 font-weight-bold color-f37523">Our Services</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="overflow-hidden">
                {/* <img className="img-fluid" src="img/service-1.jpg" alt="" /> */}

                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">General Carpentry</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="overflow-hidden">
                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">Furniture Manufacturing</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  {/* <i className="fa fa-arrow-right ms-2"></i> */}
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item">
              <div className="overflow-hidden">
                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">Furniture Remodeling</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  {/* <i className="fa fa-arrow-right ms-2"></i> */}
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item">
              <div className="overflow-hidden">
                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">Wooden Floor</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  {/* <i className="fa fa-arrow-right ms-2"></i> */}
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item">
              <div className="overflow-hidden">
                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">Wooden Furniture</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  {/* <i className="fa fa-arrow-right ms-2"></i> */}
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item">
              <div className="overflow-hidden">
                <Image src={image} alt="" className="img-fluid" />
              </div>
              <div className="p-4 text-center border border-5 border-light border-top-0">
                <h4 className="mb-3 color-1c4185">Custom Work</h4>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a className="fw-medium text-decoration-none text-orangered" href="">
                  Read More
                  <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
