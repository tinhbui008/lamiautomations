"use client";

import React, { useEffect, useState } from "react";
import "@/styles/navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@/images/Lami_Logo_7_blue background.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    setFixed();
    window.addEventListener("scroll", setFixed);
    window.removeEventListener("scroll", setFixed);
  }, []);

  return (
    <div className="mt-8">
      <nav
        className={
          "navbar navbar-expand-lg bg-1c4185 navbar-light sticky-top p-0 " +
          (fix ? "navbar-fix" : "")
        }
        style={{ top: fix ? "0" : "-100px" }}
      >
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          {/* <h2 className="m-0 color-f37523">LAMIAUTOMATIONS</h2> */}
          <Image
            style={{ width: "100%", height: "100%" }}
            src={logo}
            alt="logo"
          />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4 bg-white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/about" className="nav-item nav-link text-white">
              About
            </a>
            <a href="/service" className="nav-item nav-link text-white">
              Service
            </a>
            <a href="/project" className="nav-item nav-link text-white">
              Project
            </a>
            {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-up m-0">
                        <a href="feature.html" className="dropdown-item">Feature</a>
                        <a href="quote.html" className="dropdown-item">Free Quote</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div> */}
            <a href="contact" className="nav-item nav-link text-white">
              Contact
            </a>
          </div>
          <button className="py-4 px-lg-5 d-none d-lg-block bg-f37523 text-white btn-quote">
            Get A Quote<i className="fa fa-arrow-right ms-3"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
