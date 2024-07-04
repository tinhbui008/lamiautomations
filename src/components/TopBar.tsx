import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/topbar.css";

export default function TopBar() {
  return (
    <div>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="me-2">
                <i className="bi bi-geo-alt icon-orange"></i>
              </small>
              <small>Go Vap District, Ho Chi Minh, Viet Nam</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="me-2">
                <i className="bi bi-clock icon-orange"></i>
              </small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+84 339329925</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square bg-white me-1" href="">
                <i className="bi bi-facebook icon-orange"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-1" href="">
                <i className="bi bi-twitter icon-orange"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-1" href="">
                <i className="bi bi-linkedin icon-orange"></i>
              </a>
              <a className="btn btn-sm-square bg-white me-0" href="">
                <i className="bi bi-instagram icon-orange"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
