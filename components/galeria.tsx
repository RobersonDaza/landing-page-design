"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './galeria.css';

export default function Galeria() {
  const items = [
    { type: 'img', src: 'https://picsum.photos/600/400?random=1' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { type: 'img', src: 'https://picsum.photos/600/400?random=2' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
  ];

  // Función simplificada para pausar videos
  const pauseAllVideos = () => {
    const videos = document.querySelectorAll('.media-item video');
    videos.forEach((video) => {
      (video as HTMLVideoElement).pause();
    });
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t bg-background">
      <div className="container px-4 mx-auto flex flex-col items-center">
        
        <div className="section-header mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Nuestra Galería</h1>
          <p className="text-muted-foreground mt-4 max-w-175 mx-auto">
            Explora nuestros proyectos.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={pauseAllVideos} // Al cambiar, pausamos
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="mySwiper w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-item">
                {item.type === 'img' ? (
                  <img src={item.src} alt={`Proyecto ${index + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cta-container mt-12 md:mt-20 w-full flex justify-center">
          <a href="#" className="btn-primary-custom">
            Ver portafolio completo
          </a>
        </div>
      </div>
    </section>
  );
}