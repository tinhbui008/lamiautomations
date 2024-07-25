import React from "react";
import "@/styles/blogdetail.css";
import Image from "next/image";
import image from "@/images/carousel-1.jpg";
import "@/styles/navbar.css";

export default function BlogDetail() {
  return (
    <div className="detail">
      <Image
        className="img-content"
        src={image}
        alt=""
        style={{ objectFit: "cover", width: "70%", height: "100%" }}
      />

      <h2 className="title">When considering new Automation it is common</h2>

      <p className="createdtime">Tuesday, May 10, 2022</p>

      {/* 
        <p className="description">
          When considering new Automation it is common to go through a Return on
          Investment ROI calculation to decide if the Automation cost is worth
          it. This generally involves basic items such as labour savings,
          increased performance/output. However, there are a surprising number
          of hidden costs and benefits that can significantly impact the
          decision.
        </p> */}

      <p className="content">
        When considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision. When
        considering new Automation it is common to go through a Return on
        Investment ROI calculation to decide if the Automation cost is worth it.
        This generally involves basic items such as labour savings, increased
        performance/output. However, there are a surprising number of hidden
        costs and benefits that can significantly impact the decision.
      </p>
    </div>
  );
}
