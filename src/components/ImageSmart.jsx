import React, { useEffect } from "react";

/**
 * ImageSmart
 * - name: tên base của ảnh (không kèm đuôi), ví dụ "hero1" => /img/hero1-1200.avif
 * - alt: text thay thế
 * - className: class Tailwind/… cho <img>
 * - sizes: thuộc tính sizes cho srcset (mặc định: "100vw")
 * - priority: true => preload ảnh AVIF (tải sớm) + loading="eager"
 *
 * YÊU CẦU: thư mục public/img phải có các file:
 *  {name}-480.avif, -768.avif, -1200.avif, -1600.avif
 *  {name}-480.webp, -768.webp, -1200.webp, -1600.webp
 */
export default function ImageSmart({
  name,
  alt = "",
  className = "",
  sizes = "100vw",
  priority = false,
}) {
  const avifSet = `/img/${name}-480.avif 480w, /img/${name}-768.avif 768w, /img/${name}-1200.avif 1200w, /img/${name}-1600.avif 1600w`;
  const webpSet = `/img/${name}-480.webp 480w, /img/${name}-768.webp 768w, /img/${name}-1200.webp 1200w, /img/${name}-1600.webp 1600w`;

  // Preload ảnh AVIF nếu priority = true (tải sớm, cho ảnh hero)
  useEffect(() => {
    if (!priority) return;

    const link = document.createElement("link");
    link.setAttribute("rel", "preload");
    link.setAttribute("as", "image");
    link.setAttribute("href", `/img/${name}-1200.avif`);
    link.setAttribute("type", "image/avif");
    link.setAttribute("imagesrcset", avifSet);
    link.setAttribute("imagesizes", sizes);
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, [name, sizes, avifSet, priority]);

  return (
    <picture>
      {/* Ưu tiên AVIF */}
      <source type="image/avif" srcSet={avifSet} sizes={sizes} />
      {/* Fallback WebP */}
      <source type="image/webp" srcSet={webpSet} sizes={sizes} />
      {/* Fallback cuối: WebP 1200 (đa số trình duyệt hiện đại đều hỗ trợ) */}
      <img
        src={`/img/${name}-1200.webp`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
        style={{ contentVisibility: "auto" }}
      />
    </picture>
  );
}
