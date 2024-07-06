import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import Service from '@/components/Service'
import TopBar from '@/components/TopBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader title="Service" />
      <Service />
      <Footer />
    </div>
  )
}
