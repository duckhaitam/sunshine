import React from "react";

const PHONE = "0389334139";                    // Sửa số điện thoại ở đây
const ZALO_URL = "https://zalo.me/0389334139"; // Hoặc OA: https://zalo.me/<id>

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* Nút Zalo – glow xanh + bounce (có delay) */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="
          flex items-center gap-2 rounded-2xl px-4 py-3
          bg-[#0068ff] text-white
          hover:brightness-110 active:scale-[.98] transition
          btn-glow-blue bounce-soft anim-delay-300
        "
      >
        {/* Icon Zalo */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v11A1.5 1.5 0 0 0 3.5 17H7l4.2 3.36a1 1 0 0 0 1.62-.78V17h7.7A1.5 1.5 0 0 0 22 15.5v-11A1.5 1.5 0 0 0 20.5 3z"/>
        </svg>
        <span className="font-semibold">Chat Zalo</span>
      </a>

      {/* Nút Gọi ngay – glow đỏ + bounce (delay khác) */}
      <a
        href={`tel:${PHONE}`}
        aria-label={`Gọi ${PHONE}`}
        className="
          flex items-center gap-2 rounded-2xl px-4 py-3
          bg-red-600 text-white
          hover:brightness-110 active:scale-[.98] transition
          btn-glow-red bounce-soft anim-delay-600
        "
      >
        {/* Icon Phone */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2z"/>
        </svg>
        <span className="font-semibold">Gọi ngay {PHONE}</span>
      </a>
    </div>
  );
}
