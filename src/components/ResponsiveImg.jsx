// src/components/ResponsiveImg.jsx
import React from "react";

export default function ResponsiveImg({
  name,                // tên ảnh (không phần mở rộng), ví dụ "hero-1"
  alt = "",
  className = "",
  sizes = "100vw",     // bạn có thể chỉnh: "(min-width:1024px) 50vw, 100vw"
  fetchpriority,       // "high" cho ảnh LCP/hero
  loading              // để undefined nếu dùng fetchpriority=high
}) {
  const widths = [480, 768, 1200, 1600]; // nếu bạn có 2000 thì thêm vào
  const avif = widths.map(w => `/img/${name}-${w}.avif ${w}w`).join(", ");
  const webp = widths.map(w => `/img/${name}-${w}.webp ${w}w`).join(", ");

  // fallback: dùng 1200.webp (an toàn, nếu bạn có .jpg có thể đổi sang .jpg)
  const fallback = `/img/${name}-1200.webp`;

  // Nếu không truyền loading, mặc định lazy trừ khi bạn đặt fetchpriority="high"
  const computedLoading =
    loading ?? (fetchpriority === "high" ? undefined : "lazy");

  return (
    <picture>
      <source type="image/avif" srcSet={avif} sizes={sizes} />
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        className={className}
        decoding="async"
        fetchpriority={fetchpriority}
        loading={computedLoading}
      />
    </picture>
  );
}
