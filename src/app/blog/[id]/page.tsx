import BlogDetail from "@/components/BlogDetail";
import BlogRelated from "@/components/BlogRelated";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PageHeader title="Blog Detail" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-xs-12">
            <BlogDetail />
          </div>

          <div className="col-lg-4 col-md-4 col-xs-12">
            <BlogRelated />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
