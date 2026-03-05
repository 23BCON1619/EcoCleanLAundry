import { useEffect, useState } from "react";
import { openWhatsAppForService } from "../utils/whatsapp";

export default function About() {
  const [count, setCount] = useState(0);

  // Simple counter animation
  useEffect(() => {
    let start = 0;
    const end = 10000;
    if (start === end) return;

    let duration = 2000;
    let incrementTime = 20;
    let step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Our Laundry Service
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          We provide premium quality laundry, dry cleaning and doorstep pickup
          services with 100% customer satisfaction.
        </p>
      </section>

      {/* ================= COMPANY INTRO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <img
              src="/WhoWeAre.png"
              alt="Laundry"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a professional laundry service company dedicated to
              providing fast, reliable, and affordable laundry solutions. Our
              expert team ensures every cloth is treated with care using modern
              machines and eco-friendly detergents.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With thousands of satisfied customers, we have built trust through
              quality service, timely delivery, and affordable pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#2FA4D4]">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To make laundry effortless for everyone by providing reliable,
              fast and affordable services with the highest quality standards.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#2FA4D4]">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the most trusted and customer-loved laundry brand by
              continuously improving service quality and customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-24 bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          <div>
            <h2 className="text-4xl font-bold">{count}+</h2>
            <p className="mt-2">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">5+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">24 Hours</h2>
            <p className="mt-2">Fast Delivery</p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            "Free Pickup & Delivery",
            "Affordable Pricing",
            "Premium Quality Cleaning",
            "On-Time Delivery",
            "Eco-Friendly Products",
            "100% Satisfaction Guarantee",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Premium Laundry?
        </h2>
        <button
          onClick={() => openWhatsAppForService("Premium Laundry Service")}
          className="bg-[#2FA4D4] text-white px-10 py-4 rounded-full font-semibold shadow-lg border border-transparent hover:scale-105 hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
        >
          Book Now
        </button>
      </section>
    </div>
  );
}
