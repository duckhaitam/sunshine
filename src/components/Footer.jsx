import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-base md:text-lg text-black/70">
          © {new Date().getFullYear()} Sunshine Legend City - All rights reserved.
        </p>
        <p className="text-sm md:text-base text-black/60">ĐỨC PHÁT LAND</p>
      </div>
    </footer>
  );
}
