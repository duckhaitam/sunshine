import React, { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setDone(false);

    const formEl = e.target;
    const form = new FormData(formEl);

    // Honeypot (nếu có input name="website" ẩn)
    if (form.get('website')) return;

    // BẮT BUỘC: kèm secret & thông tin phụ
    form.append('secret', import.meta.env.VITE_GS_SECRET);
    form.append('ua', navigator.userAgent);
    form.append('source', 'contact');

    try {
      setLoading(true);
      const res  = await fetch(import.meta.env.VITE_GS_WEBAPP, {
        method: 'POST',
        body: form,             // KHÔNG set headers -> tránh preflight
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || res.status);

      setDone(true);
      formEl.reset();
    } catch (err) {
      alert('Lỗi kết nối: ' + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

 return (
  <div
    className="
      card p-6 md:p-10
      bg-gradient-to-br from-rose-50 to-amber-50/40
      shadow-xl ring-1 ring-amber-100/60
    "
  >
    <h2 className="text-2xl md:text-4xl font-extrabold text-center tracking-wide">
      ĐĂNG KÝ NHẬN THÔNG TIN CHI TIẾT &amp; BẢNG GIÁN
    </h2>

    {/* Thông báo khi gửi xong */}
    {done && (
      <div className="mt-4 rounded-xl bg-green-50 text-green-700 px-4 py-2 text-lg text-center shadow-sm">
        Gửi thành công! Chúng tôi sẽ liên hệ sớm.
      </div>
    )}

    <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-5">
      {/* Honeypot chống bot */}
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        className="hidden"
      />

      {/* Họ tên */}
      <input
        name="name"
        placeholder="Họ và tên *"
        required
        className="
          card p-4 text-lg
          focus:outline-none focus:ring-2 focus:ring-rose-300
        "
      />

      {/* Số điện thoại */}
      <input
        name="phone"
        placeholder="Số điện thoại *"
        required
        pattern="^[0-9+\-\s]{8,}$"
        title="Vui lòng nhập số hợp lệ"
        className="
          card p-4 text-lg
          focus:outline-none focus:ring-2 focus:ring-rose-300
        "
      />

      {/* Email */}
      <input
        name="email"
        placeholder="Email (nếu có)"
        className="
          card p-4 text-lg md:col-span-2
          focus:outline-none focus:ring-2 focus:ring-rose-300
        "
      />

      {/* Nhu cầu */}
      <textarea
        name="message"
        placeholder="Nhu cầu của bạn"
        rows={5}
        className="
          card p-4 text-lg md:col-span-2
          focus:outline-none focus:ring-2 focus:ring-rose-300
        "
      />

      {/* CTA */}
      <div className="md:col-span-2 flex justify-center">
        <div className="relative inline-flex">
          {/* Hiệu ứng nhấp nháy/ping chỉ hiển thị khi KHÔNG loading */}
          {!loading && (
            <>
              <span className="absolute -inset-3 rounded-2xl bg-red-500/15 blur-md animate-pulse" />
              <span className="absolute inset-0 rounded-2xl ring-2 ring-red-400/60 animate-ping opacity-70" />
            </>
          )}

          <button
            disabled={loading}
            className="
              relative z-10
              px-8 py-3 rounded-2xl
              bg-red-600 hover:bg-red-700
              text-white font-semibold
              shadow-lg hover:shadow-xl
              transition
              focus:outline-none focus:ring-4 focus:ring-red-300
              disabled:opacity-60 disabled:cursor-not-allowed
              animate-pulse
            "
          >
            {loading ? 'Đang gửi...' : 'Gửi thông tin'}
          </button>
        </div>
      </div>
    </form>
  </div>
);
}
