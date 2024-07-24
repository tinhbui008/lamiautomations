import React from "react";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";
import "@/styles/navbar.css";
import "@/styles/about.css";
import "@/app/globals.css";

export default function About() {
  return (
    <div>
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
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
                  <h1 className="display-5 mb-4 font-weight-bold color-f37523">
                    About Us
                  </h1>
                  <p>
                    My name is <b>Nguyen Van Lam</b>, a mechanical design engineer who
                    graduated from the Ho Chi Minh City University of Technology
                    and Education in 2015 ...
                  </p>
                </div>
                {/* <p className="mb-4 pb-2">
                  My name is <b>Nguyen Van Lam</b>, a mechanical design engineer
                  who graduated from the Ho Chi Minh City University of
                  Technology and Education in 2015. Since graduating, I have
                  accumulated over 10 years of experience in the field of design
                  and mechanical engineering, having held various positions
                  across different companies.
                </p>

                <p className="mb-4 pb-2">
                  My career journey includes the following phases:
                </p>

                <p className="mb-4 pb-2">
                  <b>2014-2015:</b> I began my career at Elip Company, located
                  in the Long Hau Industrial Park, Long An. Here, I learned and
                  developed fundamental skills in the industry, from designing
                  machine parts to assembly and maintenance
                </p>

                <p className="mb-4 pb-2">
                  <b>2015-2017:</b> I moved on to work at IDEA Company as a CAD
                  employee. During this period, I mastered advanced design
                  software and participated in complex projects, contributing
                  significantly to the company's development.
                </p>

                <p className="mb-4 pb-2">
                  <b>2017-2019:</b> I had the opportunity to work at TSS Company
                  in Toyama Prefecture, Japan. This phase allowed me to learn a
                  great deal from Japan's professional and modern working
                  environment, enhancing my design and project management
                  skills.
                </p>

                <p className="mb-4 pb-2">
                  <b>2019-2021:</b> I returned to IDEA Company and continued to
                  contribute to major projects. The experience I gained in Japan
                  helped me improve work processes and increase work efficiency.
                </p>

                <p className="mb-4 pb-2">
                  <b>2021-2023:</b> I decided to work freelance and engage in
                  various projects worldwide. During this period, I collaborated
                  with many clients from Canada, Australia, the USA, India, the
                  UK, and Japan, expanding my network and enhancing my
                  international communication skills.
                </p>

                <p className="mb-4 pb-2">
                  With these valuable experiences, I decided to establish my own
                  company. On <b>June 9, 2023, LAM MINH ENGINEERING SOLUTIONS CO.</b>,
                  LTD was officially founded. Although it is a startup, my team
                  and I are committed to delivering the most advanced and
                  effective engineering solutions to our clients. We
                  continuously learn and update the latest industry knowledge to
                  ensure that every project we undertake meets the highest
                  standards.
                </p>

                <p className="mb-4 pb-2">
                  We understand that each business has unique needs and
                  challenges, and we are ready to listen, analyze, and provide
                  the most suitable solutions. With a team of experienced and
                  enthusiastic professionals, we are confident in our ability to
                  meet the most stringent requirements of our clients.
                </p>

                <p className="mb-4 pb-2">
                  Please do not hesitate to contact us to discuss your technical
                  needs and the solutions we can provide for your business. We
                  look forward to collaborating with you and contributing to
                  your success.
                </p> */}

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
                <a
                  href="/about"
                  className="btn-explore py-3 px-5 text-white bg-1c4185"
                >
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
