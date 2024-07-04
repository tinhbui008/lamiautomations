import React from "react";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "@/styles/feature.css";

export default function Feature() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center justify-content-center">
                {/* <i className="bi bi-facebook text-primary"></i> */}
                <i className="bi bi-person-check-fill icon-3em"></i>
              </div>
              <h1 className="display-1 text-black text-opacity-50 mb-0">01</h1>
            </div>
            <h5 className="text-bold">Creative Designers</h5>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center justify-content-center">
                {/* <i className="bi bi-facebook text-primary"></i> */}
                <i className="bi bi-check-lg icon-3em"></i>
              </div>
              <h1 className="display-1 text-black text-opacity-50 mb-0">02</h1>
            </div>
            <h5 className="text-bold">Quality Products</h5>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center justify-content-center">
                {/* <i className="bi bi-facebook text-primary"></i> */}
                <i className="bi bi-pen icon-3em"></i>
              </div>
              <h1 className="display-1 text-black text-opacity-50 mb-0">03</h1>
            </div>
            <h5 className="text-bold">Free Consultation</h5>
          </div>

          <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center justify-content-center">
                {/* <i className="bi bi-facebook text-primary"></i> */}
                <i className="bi bi-headphones icon-3em"></i>
              </div>
              <h1 className="display-1 text-black text-opacity-50 mb-0">04</h1>
            </div>
            <h5 className="text-bold">Customer Support</h5>
          </div>
          {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center justify-content-center bg-light">
                        <i className="fa fa-check fa-2x text-primary"></i>
                    </div>
                    <h1 className="display-1 text-danger mb-0">02</h1>
                </div>
                <h5>Quality Products</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center justify-content-center bg-light">
                        <i className="fa fa-drafting-compass fa-2x text-primary"></i>
                    </div>
                    <h1 className="display-1 text-danger mb-0">03</h1>
                </div>
                <h5>Free Consultation</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center justify-content-center bg-light">
                        <i className="fa fa-headphones fa-2x text-primary"></i>
                    </div>
                    <h1 className="display-1 text-danger mb-0">04</h1>
                </div>
                <h5>Customer Support</h5>
            </div> */}
        </div>
      </div>
    </div>
  );
}
