import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PageHeader title="Blog" />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Blog />
          </div>
          {/* <div className="col-4">Recent Blogs</div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
