import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Ảnh (giữ đúng như cấu trúc bạn đang dùng)
import shop1 from "../assets/shop1.jpg";
import shop3 from "../assets/shop3.jpg";
import shop4 from "../assets/shop4.jpg";
import shop2 from "../assets/shop2.jpg";

import lk1 from "../assets/lk1.jpg";
import lk2 from "../assets/lk2.jpg";
import lk3 from "../assets/lk3.jpg";

import c1 from "../assets/chung-cu-1.jpg";
import c2 from "../assets/chung-cu-2.jpg";
import c3 from "../assets/chung-cu-3.jpg";
import c4 from "../assets/chung-cu-4.jpg";

const groups = [
  {
    title: "SHOPHOUSE",
    specs: ["Diện tích: 90–170m²", "Mật độ xây dựng: ~65–80%", "Thiết kế: 5 tầng"],
    imgs: [shop1, shop2, shop3, shop4],
  },
  {
    title: "BIỆT THỰ",
    specs: ["Diện tích: 200–500m²", "Mật độ xây dựng: ~50–55%", "Thiết kế: 3 tầng"],
    imgs: [lk1, lk2, lk3],
  },
  {
    title: "CHUNG CƯ",
    specs: [
      "Diện tích: 35–450m²",
      "Loại hình: Studio, 1PN, 1PN+, 2PN, 3PN, Penthouse (2PN+, 4PN, 5PN)",
    ],
    imgs: [c1, c2, c3, c4],
  },
];

export default function Products() {
  return (
    <div className="space-y-10">
      {/* tiêu đề lớn hơn */}
      <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-[#a10e0e]">
        SẢN PHẨM CHÍNH
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {groups.map((g, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8"
          >
            {/* tiêu đề khối to hơn */}
            <h3 className="text-2xl md:text-3xl font-semibold">{g.title}</h3>

            {/* list to hơn */}
            <ul className="mt-3 text-black/80 text-base md:text-lg list-disc pl-5 space-y-1">
              {g.specs.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl overflow-hidden bg-white/10">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
              >
                {g.imgs.map((src, k) => (
                  <SwiperSlide key={k}>
                    <img
                      src={src}
                      alt={`${g.title} ${k + 1}`}
                      className="w-full h-[260px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
