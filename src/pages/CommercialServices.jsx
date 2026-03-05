import { openWhatsAppForService } from "../utils/whatsapp";

export default function CommercialServices() {
  const services = [
    {
      title: "Airbnb Laundry",
      desc: "Fast turnaround laundry for Airbnb hosts with premium folding and packaging.",
      img: "ArbnLaundry.png",
    },
    {
      title: "Restaurant Laundry",
      desc: "Professional cleaning for uniforms, aprons, table covers & kitchen linens.",
      img: "/RestaurantLaundry.png",
    },
    {
      title: "Workwear Laundry",
      desc: "Industrial & corporate uniform washing with stain treatment.",
      img: "/WorkWeare.png",
    },
    {
      title: "Cafe Laundry",
      desc: "Aprons, napkins & tablecloth cleaning with hygienic processing.",
      img: "/CafeLaundry.png",
    },
    {
      title: "Hotel Laundry",
      desc: "Bedsheets, pillow covers, towels & guest laundry services.",
      img: "/HotelLaundry.png",
    },
    {
      title: "Spa Laundry",
      desc: "Soft towel & robe cleaning with fragrance-safe washing.",
      img: "/SpaLaundry.png",
    },
    {
      title: "Gym Laundry",
      desc: "Towel and activewear cleaning with anti-bacterial wash.",
      img: "/GymLaundry.png",
    },
    {
      title: "Medical Laundry",
      desc: "Sanitized washing with hospital-grade hygiene standards.",
      img: "/MeadicalLaundry.png",
    },
    {
      title: "Towel Laundry",
      desc: "Bulk towel washing service for businesses & events.",
      img: "/TowelLaundry.png",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Commercial Laundry Services
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-lg opacity-90">
          Reliable, hygienic & fast commercial laundry solutions tailored for
          your business.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-52 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button
                  onClick={() => openWhatsAppForService(service.title)}
                  className="bg-[#2FA4D4] text-white px-5 py-2 rounded-lg border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need Custom Commercial Package?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us for bulk pricing & long-term service contracts.
        </p>
        <button
          onClick={() => openWhatsAppForService("Commercial Laundry Package")}
          className="bg-[#2FA4D4] text-white px-8 py-3 rounded-full shadow-lg border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] hover:shadow-xl transition duration-300"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
