import React from "react";
import "@/styles/contactcompo.css";
import "@/app/globals.css";

export default function ContactCompo() {
  return (
    <div
      className="container-fluid bg-light overflow-hidden px-lg-0"
      style={{ margin: "6rem 0" }}
    >
      <div className="container-fluid contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 contact-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4 color-f37523">Contact Us</h1>
              </div>
              {/* <p className="mb-4">The contact form is currently inactive. 
                        Get a functional and working contact form with Ajax & PHP 
                        in a few minutes. Just copy and paste the files, 
                        add a little code and you're done. 
                      <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label>Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label>Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label>Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label>Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="w-100 py-3 btn-send-message bg-f37523"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">

              <iframe
                className="position-absolute w-100 h-100"
                style={{ objectFit: "cover" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62698.27404302812!2d106.62400481173846!3d10.838675152819917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1721881238874!5m2!1svi!2s"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
