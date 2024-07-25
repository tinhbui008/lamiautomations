import BlogDetail from "@/components/BlogDetail";
import BlogRelated from "@/components/BlogRelated";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <PageHeader title="Blog Detail" />
      {/* <div className="container">
        <div className="row">
          <div className="col-9">
            <BlogDetail />
          </div>

          <div className="col-3">
            <BlogRelated />
          </div>
        </div>
      </div> */}
    </div>
  );
}
