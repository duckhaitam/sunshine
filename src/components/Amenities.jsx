// src/components/Amenities.jsx
import React from "react";

// 4 ảnh đầu (không crop)
import t1 from "../assets/tien-ich-1.jpg";
import t2 from "../assets/tien-ich-2.jpg";
import t3 from "../assets/tien-ich-3.jpg";
import t4 from "../assets/tien-ich-4.jpg";

// ảnh tổng mặt bằng tiện ích (2 tấm)
import tong from "../assets/tong-tien-ich.jpg";
import below from "../assets/1000-tien-ich.jpg";

// 6 ảnh mosaic
import i5 from "../assets/tien-ich-5.jpg";
import i6 from "../assets/tien-ich-6.jpg";
import i7 from "../assets/tien-ich-7.jpg";
import i8 from "../assets/tien-ich-8.jpg";
import i9 from "../assets/tien-ich-9.jpg";
import i10 from "../assets/tien-ich-10.jpg";

export default function Amenities() {
  const four = [t1, t2, t3, t4];
  const mosaic = [i5, i6, i7, i8, i9, i10];

  const captions = [
    "Lấy cảm hứng Dòng Sông Di Sản",
    "Sống hiện đại, giữ hồn xưa — Phố Hiến hồi sinh giữa lòng Hà Nội mới",
    "Mỗi không gian là một lát cắt văn hoá | Nơi thế hệ trẻ gìn giữ quá khứ và hướng đến tương lai",
    "Ký ức truyền thống không chỉ để lưu giữ, mà còn hiện diện trọn vẹn trong từng nhịp sống",
  ];

  return (
    <div className="space-y-16">
      {/* Tiêu đề lớn + mô tả mở đầu */}
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#a10e0e] tracking-wide">
          TIỆN ÍCH ĐẲNG CẤP 6 SAO
        </h2>
        <p className="mt-4 text-center text-xl md:text-2xl font-semibold text-black/80">
          Hệ sinh thái tiện ích toàn diện đáp ứng mọi nhu cầu sống hiện đại: vui
          chơi – giải trí – thể thao – giáo dục – chăm sóc sức khỏe. Mỗi tiện
          ích được quy hoạch khoa học, mang tính biểu tượng và gắn kết với
          không gian sông nước đặc trưng của dự án.
        </p>
      </div>

{/* 4 ảnh – 2x2, to hơn + caption to hơn, không viền/bo góc */}
{/* 4 ảnh — 2x2, ảnh to hơn, caption to, giữ cân đối */}
<section className="section">
  <div
    className="
      mx-auto max-w-[1920px]
      px-2 sm:px-4
      grid grid-cols-1 md:grid-cols-2 gap-6
    "
  >
    {four.map((src, i) => (
      <figure key={i} className="w-full">
        {/* Làm ảnh cao hơn để nhìn to hơn */}
        <div className="w-full aspect-square sm:aspect-[5/4] lg:aspect-[6/5] flex items-center justify-center">
          <img
            src={src}
            alt={`Tiện ích ${i + 1}`}
            className="w-full h-full object-contain block"
            loading="lazy"
          />
        </div>

        {/* Caption đã to sẵn, vẫn giữ — có thể tăng nhẹ nữa nếu muốn */}
        <figcaption className="mt-4 text-center text-xl md:text-2xl font-semibold text-black/80">
          {captions[i]}
        </figcaption>
      </figure>
    ))}
  </div>
</section>



      {/* Tổng mặt bằng tiện ích */}
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-wide text-[#a10e0e]">
  TỔNG MẶT BẰNG TIỆN ÍCH
</h3>

        <div className="mt-6 card">
          <img
            src={tong}
            className="w-full h-auto object-contain"
            alt="Tổng mặt bằng tiện ích"
            loading="lazy"
          />
        </div>
        <div className="mt-6 card">
          <img
            src={below}
            className="w-full h-auto object-contain"
            alt="Phối cảnh tiện ích"
            loading="lazy"
          />
        </div>
      </div>

      {/* Mosaic 6 ảnh (có thể crop cho đẹp ô lưới) + mô tả */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mosaic.map((src, i) => (
          <div key={i} className="card">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={`Mosaic ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Đoạn giới thiệu cuối – chữ to hơn */}
      <div className="mt-2 grid md:grid-cols-2 gap-8 font-semibold text-black/80">
        <p className="text-lg md:text-xl leading-relaxed">
          Phố Hiến – thương cảng cổ bên dòng sông Hồng, từng “thứ nhất Kinh Kỳ,
          thứ nhì Phố Hiến”, không chỉ là trung tâm giao thương sầm uất mà còn
          là nơi giao thoa văn hóa rực rỡ. Tinh thần di sản ấy được tái hiện
          sống động tại Sunshine Legend City.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Tuyến phố đi bộ ven sông gợi nhớ “phiên chợ thời đại mới” với chuỗi
          boutique, ẩm thực, bến thuyền, nhà chòi, thủy đình phản chiếu ánh đèn
          lộng lẫy — mang đến nhịp sống lễ hội rộn ràng suốt bốn mùa.
        </p>
      </div>
    </div>
  );
}
