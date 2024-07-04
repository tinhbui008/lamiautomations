import React from "react";
import "@/styles/project.css";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";

export default function Project() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5 font-weight-bold">Projects</h1>
        </div>
        {/* <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                    <li className="mx-2 active" data-filter="*">All</li>
                    <li className="mx-2" data-filter=".first">General Carpentry</li>
                    <li className="mx-2" data-filter=".second">Custom Carpentry</li>
                </ul>
            </div>
        </div> */}
        <div className="row g-4 portfolio-container">
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="rounded overflow-hidden">
              <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">General Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">Custom Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">General Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">Custom Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">General Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="rounded overflow-hidden">
            <div className="position-relative overflow-hidden">
                {/* <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" /> */}
                <Image src={image} alt="" className="img-fluid w-100" />
                <div className="portfolio-overlay">
                  <a
                    className="btn btn-square btn-outline-light mx-1"
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                  >
                    {/* <i className="fa fa-eye"></i> */}
                    <i className="bi bi-eye"></i>
                  </a>
                  <a className="btn btn-square btn-outline-light mx-1" href="">
                    <i className="bi bi-link"></i>
                  </a>
                </div>
              </div>
              <div className="border border-5 border-light border-top-0 p-4">
                <p className="text-primary fw-medium mb-2 text-orangered">Custom Carpentry</p>
                <h5 className="lh-base mb-0">
                  Wooden Furniture Manufacturing And Remodeling
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
