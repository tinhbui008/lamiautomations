import React from "react";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";
import "@/styles/blog.css";

export default function Blog() {
  return (
    <div>
      <div className="blog">
        <div className="img">
          <Image
            src={image}
            alt=""
            style={{ objectFit: "cover", width: "90%", height: "80%" }}
          />
        </div>

        <div className="content">
          <h3 className="title">TITLE BLOG 01</h3>
          <h5 className="createtime">Tuesday, May 10, 2022</h5>
          <p className="description">
            When considering new Automation it is common to go through a Return
            on Investment ROI calculation to decide if the Automation cost is
            worth it. This generally involves basic items such as labour
            savings, increased performance/output. However, there are a
            surprising number of hidden costs and benefits that can
            significantly impact the decision.
          </p>

          <button className="btn-read-more">read more</button>
        </div>
      </div>

      <div className="blog">
        <div className="img">
          <Image
            src={image}
            alt=""
            style={{ objectFit: "cover", width: "90%", height: "80%" }}
          />
        </div>

        <div className="content">
          <h3 className="title">TITLE BLOG 01</h3>
          <span className="createtime">Tuesday, May 10, 2022</span>
          <p className="description">
            When considering new Automation it is common to go through a Return
            on Investment ROI calculation to decide if the Automation cost is
            worth it. This generally involves basic items such as labour
            savings, increased performance/output. However, there are a
            surprising number of hidden costs and benefits that can
            significantly impact the decision.
          </p>

          <button className="btn-read-more">read more</button>
        </div>
      </div>
    </div>
  );
}
