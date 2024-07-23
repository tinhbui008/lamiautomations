"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import image_service_01 from "@/images/service_01.jpg";
import image_service_02 from "@/images/service_02.jpg";
import image_service_03 from "@/images/service_03.jpg";
import image_service_04 from "@/images/service_04.jpg";
import image_service_05 from "@/images/service_05.jpg";
import image_service_06 from "@/images/service_06.jpg";
import "@/styles/service.css";
const services = [
  {
    id: 1,
    title: "Custom Machinery Design And ManuFacture",
    imageUrl: image_service_01,
  },
  {
    id: 2,
    title: "Concept Design And Rapid 3D Modeling",
    imageUrl: image_service_02,
  },
  {
    id: 3,
    title: "Automation Support And Maintenance",
    imageUrl: image_service_03,
  },
  {
    id: 4,
    title: "Electrical And Mechanical Installation",
    imageUrl: image_service_04,
  },
  {
    id: 5,
    title: "Robots And Robotic Automation",
    imageUrl: image_service_05,
  },
  {
    id: 6,
    title: "Safety Cover",
    imageUrl: image_service_06,
  },
];
export default function Service() {
  useEffect(() => {
    console.log("Service");
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5 font-weight-bold color-f37523">
            Our Services
          </h1>
        </div>
        <div className="row g-4">
          {services.map((item) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image src={item.imageUrl} alt="" className="img-fluid" />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h6 className="mb-3 color-1c4185">{item.title}</h6>
                  {/* <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p> */}
                  <a
                    className="fw-medium text-decoration-none text-orangered"
                    href={`/service/${item.id}`}
                  >
                    Read More
                    <i className="bi bi-arrow-right px-2 font-weight-bold"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
