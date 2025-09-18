// src/App.jsx
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import Location from "./components/Location";
import Masterplan from "./components/Masterplan";     // ← MẶT BẰNG
import Amenities from "./components/Amenities";
import Overview from "./components/Overview";
import Districts from "./components/Districts";
import Products from "./components/Products";
import Interior from "./components/Interior";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import FloatingButtons from "./components/FloatingButtons"; // gọi & Zalo

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main className="container mx-auto px-4 space-y-16">
        <IntroVideo />

        <section id="vitri">
          <Location />
        </section>

        {/* MẶT BẰNG */}
        <section id="matbang">
          <Masterplan />
        </section>

        <section id="tienich">
          <Amenities />
        </section>

        <section id="tongquan">
          <Overview />
        </section>

        <section id="phankhu">
          <Districts />
        </section>

        <section id="sanpham">
          <Products />
        </section>

        <section id="noithat">
          <Interior />
        </section>

        <section id="lienhe">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
