import Slide from "@/components/Slide";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import Feature from "@/components/Feature";
import About from "@/components/About";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Quote from "@/components/Quote";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
      <Navbar />
      <Slide />
      <Feature />
      <About />
      <Service />
      <Project />
      <Quote />
      <Testimonial />
      <Footer />
    </main>
  );
}


