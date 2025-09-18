// src/components/Hero.jsx
import hero from "../assets/hero1.jpg"; // đổi tên ảnh theo thư mục của bạn

export default function Hero() {
  return (
    <section className="relative full-bleed">
      {/* Ảnh full màn */}
      <img
        src={hero}
        alt="Sunshine Legend City"
        className="block w-full h-[70vh] md:h-[90vh] object-cover"
      />

      {/* Overlay chữ */}
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <h1 className="text-white font-bold leading-tight
                         text-[10vw] md:text-7xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            SUNSHINE LEGEND CITY
          </h1>

          <p className="mt-4 max-w-3xl text-white/95 text-base md:text-xl font-medium
                        drop-shadow-[0_3px_12px_rgba(0,0,0,0.6)]">
            MỖI KHÔNG GIAN LÀ 1 LÁT CẮT VĂN HÓA NƠI THẾ HỆ TRẺ GÌN GIỮ QUÁ KHỨ VÀ HƯỚNG TỚI TƯƠNG LAI.
          </p>
        </div>
      </div>
    </section>
  );
}
