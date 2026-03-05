import { useState } from "react";

export default function Pricing() {
  const [activeService, setActiveService] = useState("dry");
  const [openCategory, setOpenCategory] = useState(null);

  // ==========================
  // ADD YOUR COMPLETE PRICE LIST HERE
  // (Main sample structure de raha hoon)
  // ==========================

  const services = {
    dry: {
      title: "Dry Cleaning",
      description:
        "Cleaned, steam ironed & returned on hanger (Priced per item)",
      categories: [
        {
          name: "Men's Wear",
          icon: "👔",
          items: [
            { name: "Shirt", price: "₹50" },
            { name: "Pant", price: "₹60" },
            { name: "T-Shirt", price: "₹50" },
            { name: "Kurta", price: "₹90" },
            { name: "Pajama", price: "₹60" },
            { name: "Kurta + Pajama", price: "₹150" },
            { name: "Sherwani", price: "₹400-1000" },
            { name: "Coat + Pant", price: "₹250" },
            { name: "Blazer", price: "₹200" },
          ],
        },
        {
          name: "Women's Wear",
          icon: "👗",
          items: [
            { name: "Saree", price: "₹150-250" },
            { name: "Kurti + Pajama", price: "₹150-180" },
            { name: "One Piece", price: "₹150-180" },
            { name: "Gown", price: "₹200-300" },
            { name: "Top", price: "₹80-150" },
            { name: "Sharara", price: "₹100-300" },
            { name: "Blouse", price: "₹60" },
            { name: "Skirt", price: "₹60-100" },
            { name: "Lehenga + ...", price: "₹600-1500" },
            { name: "Odhani + Blouse", price: "₹200-400" },
            { name: "Dupatta", price: "₹80-150" },
          ],
        },
        {
          name: "Steam Iron Only",
          icon: "♨️",
          items: [
            { name: "Shirt", price: "₹15" },
            { name: "Pant", price: "₹15" },
            { name: "T-Shirt", price: "₹15" },
            { name: "Kurta + Pajama", price: "₹40" },
            { name: "Sherwani", price: "₹120-180" },
            { name: "Coat + Pant", price: "₹40" },
            { name: "Saree", price: "₹60" },
            { name: "Kurti + Pajama", price: "₹20-30" },
            { name: "Ladies Suit(2PCS.)", price: "₹40" },
            { name: "Ladies Suit(3PCS.)", price: "₹60" },
            { name: "Gown", price: "₹80-120" },
            { name: "Lengha", price: "₹150" },
          ],
        },
        {
          name: "Winter Wear",
          icon: "❄️",
          items: [
            { name: "Jacket", price: "₹200" },
            { name: "Half Jacket", price: "₹160" },
            { name: "Two Side Jacket", price: "₹350" },
            { name: "Full Coat", price: "₹300" },
            { name: "Sweater", price: "₹150" },
            { name: "Half Sweater", price: "₹120" },
            { name: "Sweat-Shirt", price: "₹150" },
            { name: "Hudi", price: "₹180" },
            { name: "Muflar", price: "₹60" },
          ],
        },
        {
          name: "Household",
          icon: "🏠",
          items: [
            { name: "Single Bed Blanket", price: "₹300" },
            { name: "Double Bed Blanket", price: "₹400" },
            { name: "Bedsheet Single", price: "₹150" },
            { name: "Bedsheet Double", price: "₹200" },
            { name: "Curtain", price: "₹80-600" },
            { name: "Quilt", price: "₹400" },
            { name: "Dohar", price: "₹250-350" },
            { name: "Foot Mate", price: "₹100-200" },
            { name: "Carpet", price: "₹20/-Sq.Feet" },
          ],
        },
        {
          name: "Shoes & Bags",
          icon: "👜",
          items: [
            { name: "Sports Shoes", price: "₹350" },
            { name: "Jordan Shoes", price: "₹450" },
            { name: "Leather Shoes", price: "₹550" },
            { name: "Soft Leather Shoes", price: "₹400" },
            { name: "Sandal", price: "₹300" },
            { name: "Sleeper", price: "₹250" },
            { name: "School Bag", price: "₹250-300" },
            { name: "Trolly Bag", price: "₹500-1000" },
          ],
        },
      ],
    },

    wash: {
      title: "Wash, Fold & Iron",
      description: "Priced per KG",
      categories: [
        {
          name: "Laundry Services",
          icon: "🧺",
          items: [
            { name: "Wash & Fold", price: "₹85/KG" },
            { name: "Wash & Iron", price: "₹110/KG" },
            { name: "Steam Iron", price: "₹15 per item" },
          ],
        },
      ],
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {/* ================= STICKY SERVICE SELECTOR ================= */}
      <div className="sticky top-0 bg-gray-100 z-10 px-4 py-6">
        <div className="flex justify-center gap-4">
          {["wash", "dry"].map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveService(key);
                setOpenCategory(null);
              }}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition ${
                activeService === key
                  ? "bg-[#2FA4D4] text-white shadow-lg border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4]"
                  : "bg-white border border-[#2FA4D4]/30 text-[#1c3c57] hover:bg-[#2FA4D4] hover:text-white hover:border-[#2FA4D4] hover:shadow"
              }`}
            >
              {key === "wash" ? "Wash & Iron" : "Dry Cleaning"}
            </button>
          ))}
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-blue-50 rounded-3xl p-6 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {services[activeService].title}
          </h2>

          <p className="text-gray-600 text-center mb-10 text-sm md:text-base">
            {services[activeService].description}
          </p>

          {/* ================= CATEGORY GRID ================= */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services[activeService].categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                {/* CATEGORY HEADER */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setOpenCategory(openCategory === index ? null : index)
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>

                  <span className="md:hidden text-xl">
                    {openCategory === index ? "-" : "+"}
                  </span>
                </div>

                {/* ITEM LIST */}
                <div
                  className={`mt-6 space-y-3 text-sm md:text-base ${
                    openCategory === index || window.innerWidth >= 768
                      ? "block"
                      : "hidden md:block"
                  }`}
                >
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between border-b pb-2">
                      <span>{item.name}</span>
                      <span className="text-sky-600 font-semibold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ================= NOTE ================= */}
          {/* ================= WASH SPECIAL INSTRUCTIONS ================= */}
          {activeService === "wash" && (
            <div className="mt-12 bg-gray-200 rounded-3xl p-6 md:p-8 shadow-md">
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                Not Sure How Much You Have?
              </h4>

              <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  If in doubt – Don’t worry, our driver carries a scale and can
                  help you weigh your clothes before collection.
                </p>

                <p>
                  <strong>Undergarments / Socks / Masks / Hankey</strong> will
                  only go in per piece pricing and not KG based.
                </p>

                <p>
                  Safewash is extra. This amount is taken to complete the
                  service within
                  <strong> 48–72 hours.</strong>
                </p>

                <p>
                  We ensure no mix washing – your clothes are washed separately
                  and never combined with other customers’ laundry. Hygiene and
                  care are our top priority.
                </p>
              </div>
            </div>
          )}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold mb-3 text-center">
              Important Instructions
            </h4>
            <ul className="text-gray-600 text-sm space-y-2 text-center">
              <li>✔ Please remove valuables from pockets.</li>
              <li>✔ Inform us about delicate fabrics.</li>
              <li>✔ Heavy stains may incur extra charges.</li>
              <li>✔ Delivery within 24–48 hours.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
