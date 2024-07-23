"use client";

import React, { useEffect, useState } from "react";
import "@/styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { title } from "process";
import Image from "next/image";
import logo from "@/images/Lami_Logo_7_blue background.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navbars = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      link: "/about",
    },
    {
      title: "services",
      link: "/service",
    },
    {
      title: "projects",
      link: "/project",
    },
    {
      title: "blogs",
      link: "/blog",
    },
    {
      title: "contact",
      link: "/contact",
    },
  ];

  const [fix, setFix] = useState(true);

  const setFixed = () => {
    if (window.scrollY >= 300) {
      setFix(true);
      console.log(`fix::::: ${fix}`)
    } else {
      setFix(false);
      console.log(`fix::::: ${fix}`)
    }
  };

  useEffect(() => {
    setFixed();
    window.addEventListener("scroll", setFixed);
    // window.removeEventListener("scroll", setFixed);
  }, [fix]);

  const pathName = usePathname();

  return (
    <div className="mt-8">
      <nav
        className={
          "navbar navbar-expand-lg bg-1c4185 navbar-light sticky-top p-0 " +
          (fix ? "navbar-fixed" : "")
        }
        // style={{ top: fix ? "0" : "-100px" }}
      >
        <a
          href="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
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
            {navbars.map((navbar) => {
              // <a href="/" className="nav-item nav-link active">
              // <a href="/" className="nav-item nav-link text-white">
              //   {navbar.title}
              // </a>

              const isActive = pathName === navbar.link ? true : false;
              console.log(`pathName::: ${pathName}`);
              return (
                <Link
                  key={navbar.title}
                  href={navbar.link}
                  className={`nav-item nav-link ${
                    isActive ? "active" : "text-white"
                  }`}
                >
                  {navbar.title}
                </Link>
              );
            })}
          </div>
          <button className="py-4 px-lg-5 d-none d-lg-block bg-f37523 text-white btn-quote">
            Get A Quote<i className="fa fa-arrow-right ms-3"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
