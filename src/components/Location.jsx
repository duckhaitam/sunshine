import React from "react";
import mapImg from "../assets/vi-tri.jpg";

export default function Location() {
  return (
    <section id="vitri" className="section">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          {/* Tiêu đề to hơn, đậm hơn */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#a10e0e]">
  VỊ TRÍ KIM CƯƠNG ĐẮT GIÁ
</h2>


          {/* Đoạn văn lớn hơn, line-height thoáng */}
          <p className="mt-4 text-black/70 text-lg md:text-xl font-semibold leading-relaxed">
            Nằm giữa Vành đai 3.5 và Vành đai 4, Sunshine Legend City kết nối
            thuận tiện với trung tâm Hà Nội và các khu đô thị lớn như Ecopark,
            Vinhomes Ocean Park… Vị trí chiến lược giúp cư dân di chuyển nhanh
            tới các tuyến giao thông huyết mạch và mạng lưới tiện ích khu vực.
          </p>

          {/* Danh sách lớn hơn, khoảng cách từng dòng thoáng */}
          <ul className="mt-6 list-disc pl-6 font-semibold text-black/80 text-lg md:text-xl space-y-2">
            <li>3 phút đến Vinhomes Ocean Park</li>
            <li>5 phút nút giao Cổ Linh</li>
            <li>10 phút cầu Vĩnh Tuy</li>
            <li>15 phút Vinhomes Times City</li>
            <li>20 phút Hồ Hoàn Kiếm</li>
            <li>40 phút Sân bay Nội Bài</li>
            <li>45 phút Hải Phòng theo QL5B</li>
          </ul>
        </div>

        <div className="card">
          <img
            src={mapImg}
            className="w-full h-auto object-contain"
            alt="Bản đồ vị trí"
          />
        </div>
      </div>
    </section>
  );
}
