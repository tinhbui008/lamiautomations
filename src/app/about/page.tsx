import TopBar from '@/components/TopBar'
import React from 'react'
import "@/styles/topbar.css";
import "@/styles/navbar.css";
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import Feature from '@/components/Feature';
import Footer from '@/components/Footer';



export default function page() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader />
      <Feature />
      <About />
      <Footer />
    </div>
  )
}
