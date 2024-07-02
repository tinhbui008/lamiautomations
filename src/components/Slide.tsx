
'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from '@/lib/images'
import "@/styles/slide.css";


export default function Slide() {

  return (
    <section className="h-60">
      <div className="container-fluid">
        <Swiper className="h-60" autoplay={{ delay: 2500, disableOnInteraction: false}} pagination={true}  
          modules={[Autoplay, Pagination, Navigation]}>
          {images.map((image, index) => (
            <SwiperSlide className="h-60" key={index}>
              <div className="slide-item">
                <span>WELCOME TO LAMIAUTOMATIONS</span>
                
              </div>
              <div> 
                <Image
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}