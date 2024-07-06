import ContactCompo from '@/components/ContactCompo'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import TopBar from '@/components/TopBar'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader title="Contact" />
      <ContactCompo />
      <Footer />
    </div>
  )
}