import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TopBar from "@/components/TopBar";
import React from "react";

export default function page() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader title="Blog" />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <Blog />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
