import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import TopBar from "@/components/TopBar";
import React from "react";

export default function page() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
}
