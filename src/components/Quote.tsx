import React from "react";
import "@/styles/quote.css";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";

export default function Quote() {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <Image src={image} style={{ objectFit: "cover" }} className="position-absolute img-fluid w-100 h-100" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 quote-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4 font-weight-bold color-f37523">Free Quote</h1>
              </div>
              <p className="mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Mobile"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select
                      defaultValue={2}
                      className="form-select border-0"
                      style={{ height: "55px" }}
                    >
                      <option selected>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Note"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="w-100 py-3 btn-submit bg-1c4185"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
