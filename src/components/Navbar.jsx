import React from "react";
import logo from "../assets/logo.png";

const nav = [
  { href: "#gioithieu", label: "Giới thiệu" },
  { href: "#vitri", label: "Vị trí" },
  { href: "#matbang", label: "Mặt bằng" },
  { href: "#phankhu", label: "Phân khu" },
  { href: "#sanpham", label: "Sản phẩm" },
  { href: "#tienich", label: "Tiện ích" },
  { href: "#noithat", label: "Nội thất" },
  { href: "#lienhe", label: "Liên hệ" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-8 w-auto" />
          <span className="font-semibold text-base md:text-lg">
            SUNSHINE LEGEND CITY
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm md:text-base hover:opacity-70"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0389334139"
          className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm md:text-base"
        >
          Hotline: 0389 334 139
        </a>
      </div>
    </header>
  );
}
