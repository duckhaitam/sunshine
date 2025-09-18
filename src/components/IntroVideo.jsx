import React from "react";

export default function IntroVideo() {
  return (
    <section className="space-y-6 md:space-y-10">
      {/* Tiêu đề to hơn */}
      <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-[#a10e0e]">
        SUNSHINE LEGEND CITY
      </h2>

      {/* Đoạn mô tả to hơn + dễ đọc */}
      <p className="mt-4 text-center text-xl md:text-2xl font-semibold text-black/80">
        Sunshine Legend City là khu đô thị sinh thái quy mô 54 ha tại Văn Giang, Hưng Yên,
        lấy cảm hứng từ tinh thần lịch sử – văn hoá Phố Hiến, kết hợp hệ sinh thái tiện ích
        đa dạng và kiến trúc mang hơi thở Đông Dương. Dự án hướng đến cộng đồng sống chuẩn quốc tế,
        vừa lưu giữ ký ức, vừa đón nhịp sống hiện đại.
      </p>

      {/* Khung video bo góc + full responsive 16:9 */}
      <div className="rounded-2xl overflow-hidden border shadow-sm">
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full"
             src="https://www.youtube.com/embed/P2zT2J2Al3A?start=3"
            title="Video Sunshine Legend City"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
