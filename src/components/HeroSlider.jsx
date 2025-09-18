import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, EffectFade} from "swiper/modules";
import "swiper/css"; import "swiper/css/pagination"; import "swiper/css/effect-fade";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

export default function HeroSlider(){
  const slides=[hero1, hero2];
  return (
    <section className="relative h-[70vh] md:h-[80vh]">
      <Swiper modules={[Autoplay,Pagination,EffectFade]} effect="fade" loop
        autoplay={{delay:3500, disableOnInteraction:false}} pagination={{clickable:true}}
        className="absolute inset-0 h-full">
        {slides.map((s,i)=>(
          <SwiperSlide key={i}><img src={s} className="w-full h-full object-cover"/></SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black/35"/>
      <div className="relative z-10 container h-full flex items-center">
        <div>
          <h1 className="text-white text-3xl md:text-5xl font-semibold max-w-3xl">
            
          </h1>
          
        </div>
      </div>
    </section>
  );
}
