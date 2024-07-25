"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { images } from "@/lib/images";
import "@/styles/slide.css";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

export default function Slide() {
  const [emblaRef] = useEmblaCarousel();

  return (
    // <div className="embla" ref={emblaRef}>
    //   <div className="embla__container">
    //     <div className="embla__slide">Slide 1</div>
    //     <div className="embla__slide">Slide 2</div>
    //     <div className="embla__slide">Slide 3</div>
    //   </div>
    // </div>

    <section className="h-60vh">
      <Swiper
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide className="h-50vh position-relative" key={index}>
            <div className="h-50vh">
              <Image src={image.src} alt={image.alt} />
            </div>
            <div className="slide-item overlay">
              <div className="slide-content">
                <h5 className="title">WELCOME TO LAMIAUTOMATIONS</h5>
                <h1 className="color-f37523">
                  Best Carpenter & Craftsman Services
                </h1>
                <p className="text-white description">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <motion.button
                  className="read_more-button"
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  Read more
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
