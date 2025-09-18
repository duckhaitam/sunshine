// src/components/Overview.jsx
import React from "react";
import big from "../assets/phoi-canh3.jpg";

// Giữ nguyên nội dung bạn đang dùng
const rows = [
  ["Tên dự án", "Sunshine Legend City"],
  ["Vị trí", "Xã Long Hưng, huyện Văn Giang, tỉnh Hưng Yên"],
  ["Chủ đầu tư", "Sunshine Group"],
  ["Diện tích tổng thể", "54 ha"],
  ["Không gian xanh & hồ nước", "11,89 ha (22%)"],
  ["Mật độ xây dựng", "~ 20%"],
  ["Quy mô dân số", "118.300 người"],
  ["Tổng vốn đầu tư", "~ 17.000 tỷ đồng (~670 triệu USD)"],
  ["Khởi công", "Tháng 8/2025"],
];

export default function Overview() {
  return (
    <section className="section">
      {/* Grid 2 cột cân đối; muốn ảnh to hơn một chút có thể đổi 1fr,1.1fr */}
      <div className="lg:grid-cols-[1.1fr,0.9fr]">
        {/* Cột trái: Ảnh */}
        <figure className="card overflow-hidden">
          {/* aspect giúp ảnh luôn gọn gàng, object-contain để KHÔNG crop */}
          <div className="aspect-[3/2] md:aspect-[4/3]">
            <img
              src={big}
              alt="Phối cảnh tổng quan"
              className="w-full h-full object-contain block"
              loading="lazy"
            />
          </div>
        </figure>

        {/* Cột phải: Tiêu đề + mô tả + bảng */}
        <div>
          <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-[#a1000e]">
  TỔNG QUAN DỰ ÁN
</h2>

          <p className="mt-4 text-center text-xl md:text-2xl font-semibold text-black/80">
            Một “thành phố thu nhỏ” với chuẩn mực quốc tế, nơi giao thoa giữa
            kiến trúc Tân cổ điển và cảnh quan xanh – mặt nước tự nhiên, kiến
            tạo phong cách sống đỉnh cao cho thế hệ Millennials.
          </p>

          {/* Bảng thông tin */}
          <div className="mt-6 overflow-hidden rounded-2xl border">
            <table className="w-full text-base md:text-lg">
              <tbody>
                {rows.map(([k, v], i) => (
                  <tr key={i} className={i % 2 ? "bg-rose-50" : "bg-white"}>
                    <td className="p-4 md:p-5 font-semibold border-r">{k}</td>
                    <td className="p-4 md:p-5">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
