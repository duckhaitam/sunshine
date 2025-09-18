import React from "react";
import g1  from "../assets/tien-ich-1.jpg";
import g2  from "../assets/tien-ich-2.jpg";
import g3  from "../assets/tien-ich-3.jpg";
import g4  from "../assets/tien-ich-4.jpg";
import g5  from "../assets/tien-ich-5.jpg";
import g6  from "../assets/tien-ich-6.jpg";
import g7  from "../assets/tien-ich-7.jpg";
import g8  from "../assets/tien-ich-8.jpg";
import g9  from "../assets/tien-ich-9.jpg";
import g10 from "../assets/tien-ich-10.jpg";

const items = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10];

export default function Gallery() {
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        Thư viện hình ảnh
      </h2>
      <p className="mt-2 text-center text-black/70 text-base md:text-lg">
        Ảnh dự án (minh họa)
      </p>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((src, idx) => (
          <figure key={idx} className="card overflow-hidden">
            {/* khung cố định để không crop ảnh */}
            <div className="w-full aspect-[4/3] flex items-center justify-center bg-white">
              <img
                src={src}
                alt={`Ảnh ${idx + 1}`}
                className="max-w-full max-h-full object-contain block"
                loading="lazy"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
