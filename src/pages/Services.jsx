import { openWhatsAppForService } from "../utils/whatsapp";

const services = [
  {
    title: "Laundry Service",
    image: "LaundryService.png",
    description:
      "We care your clothes. We give quality cleaning service because cleaning matters. Trusted by 10k+ customers.",
  },
  {
    title: "Steam Ironing Service",
    image: "/SteamService.png",
    description:
      "Steam iron for impeccable laundry care, ensuring your clothes look crisp and fresh.",
  },
  {
    title: "Dry Cleaning",
    image: "/DryCleaning.png",
    description:
      "Premium dry cleaning service for delicate and expensive garments.",
  },
  {
    title: "Shoe Cleaning",
    image: "/ShoesCleaning.png",
    description:
      "Professional shoe cleaning and polishing service to restore shine and freshness.",
  },
  {
    title: "Sofa / Carpet Cleaning",
    image: "Sofa&Carpet.png",
    description:
      "Deep cleaning for sofa and carpets to remove dust, stains and bacteria.",
  },
  {
    title: "Curtain Cleaning",
    image: "/Curtains.png",
    description:
      "Quick and efficient curtain cleaning with doorstep pickup and delivery.",
  },
  {
    title: "Blanket Cleaning",
    image: "/BlanketCleaning.png",
    description:
      "Thorough cleaning of blankets and quilts with hygienic treatment.",
  },
  {
    title: "Express Service",
    image: "/ExpressServices.png",
    description: "Same day delivery service for urgent laundry needs.",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                <button
                  onClick={() => openWhatsAppForService(service.title)}
                  className="bg-[#2FA4D4] text-white px-6 py-2 rounded-full font-semibold border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
                >
                  Request Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
