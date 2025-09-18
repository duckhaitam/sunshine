// src/components/Masterplan.jsx
import React from "react";
import plan from "../assets/mat-bang-tong-the.jpg";
import zones from "../assets/tong-the-phan-khu.jpg";

export default function Masterplan() {
  return (
    <section className="space-y-8">
      {/* Tiêu đề to hơn */}
      <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-[#a10e0e]">
        MẶT BẰNG TỔNG THỂ
      </h2>

      {/* Mobile xếp dọc, desktop 2 cột */}
      <div className="grid gap-8 md:grid-cols-1">
        <figure className="card">
          <img
            src={plan}
            alt="Mặt bằng tổng thể"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          {/* Caption to hơn */}
          <figcaption className="px-4 py-4 text-center text-lg md:text-xl text-black/80 font-medium">
            Mặt bằng tổng thể dự án
          </figcaption>
        </figure>

        <figure className="card">
          <img
            src={zones}
            alt="Tổng thể các phân khu"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          {/* Caption to hơn */}
          <figcaption className="px-4 py-4 text-center text-lg md:text-xl text-black/80 font-medium">
            Tổng thể các phân khu
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
