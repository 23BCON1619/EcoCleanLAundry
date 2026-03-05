import { useState } from "react";
import { openWhatsAppForService } from "../utils/whatsapp";

export default function Monthly() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does The Laundry Walas work?",
      answer:
        "Simply choose your service, schedule pickup and delivery. Our team will collect, clean and deliver your clothes fresh and crisp.",
    },
    {
      question: "Is there minimum spending required for free delivery?",
      answer: "Yes, free delivery is available on orders above ₹499.",
    },
    {
      question: "How long will I be without my clothes?",
      answer: "Standard delivery time is 24 hours.",
    },
    {
      question: "Do you wash clothes with other people's clothes?",
      answer: "No. All orders are processed separately to maintain hygiene.",
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept Cash, UPI, Credit/Debit Cards and Net Banking.",
    },
    {
      question: "Do I have to provide my own laundry bag?",
      answer: "No. Our team will provide collection bags at pickup.",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Choose Your Monthly Package
        </h1>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Affordable plans designed to make your laundry hassle-free.
        </p>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-24 bg-[#eaf3f8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* BASIC */}
          <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#1c3c57]">Basic</h3>
            <h2 className="text-3xl font-bold mb-2">₹999</h2>
            <p className="text-sm mb-6 text-gray-500">VALID FOR 1 MONTH</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ 6 PCS. Dry Clean & Ironing</li>
              <li>✔ 22 PCS. Wash & Ironing</li>
              <li className="text-center font-semibold">OR</li>
              <li>✔ 45 PCS. Washing & Ironing</li>
            </ul>

            <button
              onClick={() => openWhatsAppForService("Basic Monthly Package")}
              className="w-full bg-[#1c7ca8] text-white py-3 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-[#1c7ca8] hover:border-[#1c7ca8] transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* STANDARD (HIGHLIGHTED) */}
          <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition duration-300 relative border-2 border-yellow-400">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 text-sm rounded-full shadow">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mb-4 text-[#1c3c57]">
              Standard
            </h3>
            <h2 className="text-3xl font-bold mb-2 text-[#1c3c57]">₹1999</h2>
            <p className="text-sm mb-6 text-gray-500">VALID FOR 1 MONTH</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ 12 PCS. Dry Clean & Ironing</li>
              <li>✔ 45 PCS. Wash & Ironing</li>
              <li className="text-center font-semibold">OR</li>
              <li>✔ 95 PCS. Washing & Ironing</li>
            </ul>

            <button
              onClick={() =>
                openWhatsAppForService("Standard Monthly Package")
              }
              className="w-full bg-[#1c7ca8] text-white py-3 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-[#1c7ca8] hover:border-[#1c7ca8] transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#1c3c57]">
              Premium
            </h3>
            <h2 className="text-3xl font-bold mb-2">₹4999</h2>
            <p className="text-sm mb-6 text-gray-500">VALID FOR 1 MONTH</p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ 35 PCS. Dry Clean & Ironing</li>
              <li>✔ 85 PCS. Wash & Ironing</li>
              <li className="text-center font-semibold">OR</li>
              <li>✔ 230 PCS. Washing & Ironing</li>
            </ul>

            <button
              onClick={() => openWhatsAppForService("Premium Monthly Package")}
              className="w-full bg-[#1c7ca8] text-white py-3 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-[#1c7ca8] hover:border-[#1c7ca8] transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-[#1c3c57]">
            Do you have questions?
          </h2>

          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-6">
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1c3c57]">
                  {item.question}
                </h3>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
