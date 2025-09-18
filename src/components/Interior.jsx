import React, { useState } from "react";
import i1 from "../assets/thiet-ke-1.jpg";
import i2 from "../assets/thiet-ke-2.jpg";
import { sendLead } from "../lib/sendLead";

export default function Interior() {
  const [loading, setLoading] = useState(false);

  // các khung giờ minh hoạ – giữ nguyên như bạn đang dùng
  const slots = ["07:00", "09:00", "11:00", "14:00", "16:00", "19:00"];

  async function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const name = f.get("name")?.trim() || "";
    const phone = f.get("phone")?.trim() || "";
    const date = f.get("date")?.trim() || "";     // YYYY-MM-DD
    const slot = f.get("slot")?.trim() || "";
    const hp = f.get("hp")?.trim() || "";         // honeypot chống bot (ẩn)

    // ghép message để lưu sạch vào Sheet
    const message = [
      "Đăng ký tham quan căn hộ mẫu",
      date ? `ngày ${new Date(date).toLocaleDateString("vi-VN")}` : "",
      slot ? `lúc ${slot}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    if (!name || !phone) {
      alert("Vui lòng nhập Họ tên và Số điện thoại.");
      return;
    }

    try {
      setLoading(true);
      const res = await sendLead({
        name,
        phone,
        email: "",     // phần Interior không có email, để trống
        message,
        hp,            // nếu hp có giá trị → coi như bot, server sẽ bỏ qua
      });

      if (res?.ok) {
        alert("Gửi thành công!");
        e.currentTarget.reset();
      } else {
        alert(`Gửi không thành công: ${res?.error || "unknown"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Có lỗi mạng. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Ảnh minh họa 1 */}
      <div className="space-y-4">
        <div className="card">
          <img src={i1} alt="Nội thất mẫu 1" className="w-full h-auto object-contain" loading="lazy" />
        </div>
        <p className="mt-4 text-black/70 text-lg md:text-xl font-semibold leading-relaxed">
          Căn hộ được bàn giao với vật liệu hoàn thiện cao cấp, tích hợp giải pháp Smart Living
          linh hoạt về nội thất, tối ưu chi phí hoàn thiện và cá nhân hoá không gian sống.
        </p>
      </div>

      {/* Ảnh minh họa 2 + Form đăng ký */}
      <div className="space-y-4">
        <div className="card">
          <img src={i2} alt="Nội thất mẫu 2" className="w-full h-auto object-contain" loading="lazy" />
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border p-6 grid gap-3 bg-white">
          <h3 className="text-lg md:text-xl font-semibold text-center">
            ĐĂNG KÝ THAM QUAN CĂN HỘ MẪU
          </h3>

          {/* honeypot ẩn chống bot (server cũng có kiểm tra) */}
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />

          <input
            name="name"
            placeholder="Họ và tên *"
            className="rounded-xl border p-3 text-base"
            required
          />

          <input
            name="phone"
            placeholder="Số điện thoại *"
            className="rounded-xl border p-3 text-base"
            required
          />

          <input
            name="date"
            type="date"
            className="rounded-xl border p-3 text-base"
          />

          <select
            name="slot"
            className="rounded-xl border p-3 text-base"
            defaultValue={slots[0]}
          >
            {slots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <button
            disabled={loading}
            className="px-5 py-3 rounded-xl bg-red-600 text-white text-base"
          >
            {loading ? "Đang gửi..." : "ĐĂNG KÝ"}
          </button>
        </form>
      </div>
    </div>
  );
}
