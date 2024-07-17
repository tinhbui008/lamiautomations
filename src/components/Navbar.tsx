"use client";

import React, { useEffect, useState } from "react";
import "@/styles/navbar.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "@/images/Lami_Logo_7_blue background.png";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { title } from "process";

export default function Navbar() {
  const navbars = [
    {
      title: "home",
    },
    {
      title: "about",
    },
    {
      title: "services",
    },
    {
      title: "projects",
    },
    {
      title: "blogs",
    },
    {
      title: "contact",
    },
  ];

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
            {navbars.map((navbar) => (
              // <a href="/" className="nav-item nav-link active">
              <a href="/" className="nav-item nav-link text-white">
                {navbar.title}
              </a>
            ))}
          </div>
          <button className="py-4 px-lg-5 d-none d-lg-block bg-f37523 text-white btn-quote">
            Get A Quote<i className="fa fa-arrow-right ms-3"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
