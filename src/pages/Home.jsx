import { useEffect, useRef } from "react";
import { openWhatsAppForService } from "../utils/whatsapp";
import Monthly from "./Monthly";

export default function Home() {
  const scrollRef = useRef(null);
  const reviews = [
    "Best laundry nearby me.. I have visited recently, staff also too much good 😊 , highly recommended ✅ …",
    "Best laundry near me , usually i visit it. Staff also too much good 🥰 ….",
    "Good service and response by eco clean laundry and its operations team i wishes there bright future in this segment with customer priority.",
    "Known for timely pickup and delivery, professional staff, and meticulous dry cleaning and packaging.",
    "Best laundry , I have visited recently , staff also too much good 😊 , highly recommended ✅ for everyone.. .",
  ];
  const VIEW_MORE_REVIEWS_LINK =
    "https://www.google.com/maps/place/Eco+Clean+Laundry/@26.8340167,75.8580389,14z/data=!4m8!3m7!1s0x396dc9002bd5714d:0x730d3f6ed8d87535!8m2!3d26.8284543!4d75.8472242!9m1!1b1!16s%2Fg%2F11xv5f2th8!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";

  // Infinite auto-scroll for reviews
  useEffect(() => {
    const container = scrollRef.current;
    let animation;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 0.6;
        const halfwayPoint = container.scrollWidth / 2;
        if (container.scrollLeft >= halfwayPoint) {
          container.scrollLeft = 0;
        }
      }
      animation = requestAnimationFrame(scroll);
    };

    animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Premium Laundry Service <br />
              <span className="text-yellow-300">At Your Doorstep</span>
            </h1>

            <p className="text-lg mb-8 text-gray-100">
              Fast Pickup & Delivery within 24 Hours. <br />
              Trusted by 10,000+ Happy Customers.
            </p>

            <button
              onClick={() => openWhatsAppForService("Premium Laundry Service")}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg border border-transparent hover:scale-105 hover:bg-[#2FA4D4] hover:text-white hover:border-white transition duration-300"
            >
              Book Now
            </button>
          </div>

          <div className="hidden md:block">
            <img
              src="/Home.png"
              alt="Laundry"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW WE MAKE LIFE EASY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How We Make Your Life Easy</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {[
            {
              title: "Sofa & Carpet Cleaning",
              img: "/Sofa&CarpetHome.png",
            },
            {
              title: "Laundry Service",
              img: "/LaundryService.png",
            },
            {
              title: "Dry Cleaning",
              img: "/DryCleaning.png",
            },
            {
              title: "Clothing Alteration",
              img: "/ClothingAlteration.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-3 cursor-pointer"
            >
              <img
                src={item.img}
                alt=""
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => openWhatsAppForService("Laundry Service")}
            className="bg-[#2FA4D4] text-white px-8 py-3 rounded-full font-semibold shadow-lg border border-transparent hover:scale-105 hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ================= ON DEMAND PREMIUM ================= */}
      <section className="py-20 bg-[#2FA4D4] text-white">
        <div className="text-center mb-14 px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            On Demand Laundry, <br className="md:hidden" />
            Dry Cleaning and Ironing Service
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 px-6">
          {[
            {
              name: "Mens Wear",
              subtitle: "Shirts, Trousers & Jeans",
              price: "₹70",
              old: "₹100",
            },
            {
              name: "Suits",
              subtitle: "Womens & Mens Wear",
              price: "₹199",
              old: "₹249",
            },
            {
              name: "Womens Wear",
              subtitle: "Saree & Lehenga",
              price: "₹149",
              old: "₹249",
            },
            {
              name: "Household",
              subtitle: "Blankets & Bedsheets",
              price: "₹349",
              old: "₹399",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-[40px] p-6 text-center shadow-xl 
                   hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* ICON PLACEHOLDER */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-3xl">👕</span>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{item.name}</h3>

              <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-3"></div>

              <p className="text-sm text-gray-500 mb-3">{item.subtitle}</p>

              <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-4"></div>

              <div className="flex justify-center items-center gap-3">
                <span className="text-xl font-bold text-[#2FA4D4]">
                  {item.price}
                </span>
                <span className="text-gray-400 line-through">{item.old}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notes */}
        <div className="mt-14 text-white px-6 space-y-3 text-sm md:text-base">
          <p>✅ Eco-Friendly Washing with Skin-Safe Detergents.</p>
          <p>✅ Free Pickup & Delivery Within 24 Hours.</p>
          <p>✅ Same Day Express Laundry Service Available.</p>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-24 bg-gray-100">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold">Rated Excellent by Google</h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-6 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <p className="text-gray-600 mb-6">{review}</p>
              <div className="text-yellow-400 text-xl">★★★★★</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={VIEW_MORE_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2FA4D4] text-white px-8 py-3 rounded-full font-semibold shadow-lg border border-transparent hover:scale-105 hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
          >
            View More Reviews
          </a>
        </div>
      </section>
      <Monthly />
    </div>
  );
}
