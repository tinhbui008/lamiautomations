import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";
import "@/styles/servicedetail.css";
import "@/app/globals.css";
import Footer from "@/components/Footer";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const services = [
    {
      id: 1,
      title: "Custom Machinery Design And ManuFacture",
    },
    {
      id: 2,
      title: "Concept Design And Rapid 3D Modeling",
    },
    {
      id: 3,
      title: "Automation Support And Maintenance",
    },
    {
      id: 4,
      title: "Electrical And Mechanical Installation",
    },
    {
      id: 5,
      title: "Robots And Robotic Automation",
    },
    {
      id: 6,
      title: "Safety Cover",
    },
  ];

  return (
    <div>
      <Navbar />
      <PageHeader title="Detail" />
      <div className="container-flluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div>
              <ul className="services">
                <li className="title">Services</li>
                {services.map((item) => (
                  <li key={item.id} className="item">
                    <a href="">{item.title}</a>
                  </li>
                ))}
                {/* <li className="item">Concept Design And Rapid 3D Modeling</li>
                <li className="item">Automation Support And Maintenance</li>
                <li className="item">Electrical And Mechanical Installation</li>
                <li className="item">Robots And Robotic Automation</li>
                <li className="item">Safety Cover</li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-8">
            <div className="service-wrapper">
              <h3 className="title">Custom Machinery Design And ManuFacture</h3>
              <div className="description">
                <p>
                  Fast Automation maintenance contracts include guaranteed
                  response times, 24-hour site presence and tailor-made shift
                  patterns with the options of weekly or annual contracts as
                  well as holiday cover.
                </p>
                <p>
                  Fast Automation maintenance contracts include guaranteed
                  response times, 24-hour site presence and tailor-made shift
                  patterns with the options of weekly or annual contracts as
                  well as holiday cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content product detail {params.id} */}

      <Footer />
    </div>
  );
}
