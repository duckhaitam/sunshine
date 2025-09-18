import React from "react";
import riviera from "../assets/phan-khu-riviera-min.jpg";
import legend from "../assets/phan-khu-legend-min.jpg";
import wonder from "../assets/phan-khu-wonder-island-min.jpg";

const cards = [
  {
    title: "PHÂN KHU RIVIERA",
    img: riviera,
    desc:
      "BST biệt thự & shophouse sang trọng dọc đại lộ, tôn vinh giá trị sống tinh hoa giữa thiên nhiên.",
    bullets: [
      "Tổng số sản phẩm: 266 căn",
      "Biệt thự song lập: 40 căn (3 tầng)",
      "Shophouse: 226 căn (5 tầng)",
    ],
  },
  {
    title: "PHÂN KHU LEGEND",
    img: legend,
    desc:
      "Tổ hợp tháp thương mại, dịch vụ, văn phòng và căn hộ cao cấp, trung tâm sôi động của toàn dự án.",
    bullets: ["Số lượng tòa tháp: 21 tòa", "Số lượng căn hộ: ~7.500 căn"],
  },
  {
    title: "PHÂN KHU WONDER ISLAND",
    img: wonder,
    desc:
      "Đảo biệt thự độc đáo giữa lòng dự án, ven hồ & ven kênh; không gian nghỉ dưỡng lấy cảm hứng Á Đông.",
    bullets: [
      "Tổng số sản phẩm: 399 căn",
      "Biệt thự đơn lập & song lập: 155 căn (3 tầng)",
      "Shophouse: 244 căn (5 tầng)",
    ],
  },
];

export default function Districts() {
  return (
    <section id="phankhu" className="section">
      <div className="rounded-2xl border border-white/15 bg-[#5e0b0b] text-white p-6 md:p-8 lg:p-10">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              {/* tiêu đề */}
              <h3 className="px-5 pt-5 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide">
                {c.title}
              </h3>

              {/* ảnh */}
              <div className="mt-4 rounded-xl overflow-hidden bg-white">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-64 md:h-[22rem] object-cover"
                  loading="lazy"
                />
              </div>

              {/* mô tả */}
              <p className="px-5 mt-4 text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                {c.desc}
              </p>

              <hr className="my-5 border-white/20" />

              {/* bullets */}
              <ul className="px-5 pb-6 space-y-2">
                {c.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm md:text-base lg:text-lg leading-relaxed"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
