import { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("contact");
  const [contactForm, setContactForm] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });
  const [franchiseForm, setFranchiseForm] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    investmentBudget: "",
    reason: "",
  });

  const CONTACT_WHATSAPP_NUMBER = "919875727274";

  const openWhatsAppMessage = (message) => {
    const url = `https://wa.me/${CONTACT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getMissingField = (fields) => {
    const missing = fields.find((field) => !field.value.trim());
    return missing ? missing.label : null;
  };

  const handleContactSubmit = () => {
    const missingField = getMissingField([
      { label: "Full Name", value: contactForm.fullName },
      { label: "Phone Number", value: contactForm.phoneNumber },
      { label: "Email Address", value: contactForm.emailAddress },
      { label: "Your Message", value: contactForm.message },
    ]);

    if (missingField) {
      alert(`Please fill ${missingField}.`);
      return;
    }

    const message = `General Contact Enquiry
Name: ${contactForm.fullName.trim()}
Phone: ${contactForm.phoneNumber.trim()}
Email: ${contactForm.emailAddress.trim()}
Message: ${contactForm.message.trim()}`;

    openWhatsAppMessage(message);
  };

  const handleFranchiseSubmit = () => {
    const missingField = getMissingField([
      { label: "Full Name", value: franchiseForm.fullName },
      { label: "Phone Number", value: franchiseForm.phoneNumber },
      { label: "City", value: franchiseForm.city },
      { label: "Investment Budget", value: franchiseForm.investmentBudget },
      { label: "Franchise Reason", value: franchiseForm.reason },
    ]);

    if (missingField) {
      alert(`Please fill ${missingField}.`);
      return;
    }

    const message = `Franchise Enquiry
Name: ${franchiseForm.fullName.trim()}
Phone: ${franchiseForm.phoneNumber.trim()}
City: ${franchiseForm.city.trim()}
Investment Budget: ${franchiseForm.investmentBudget.trim()}
Reason: ${franchiseForm.reason.trim()}`;

    openWhatsAppMessage(message);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#2FA4D4] to-[#1c7ca8] text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact & Franchise
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-100">
          Get in touch with us or become a part of our growing laundry franchise
          network.
        </p>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Founder"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our founder started this laundry brand with a simple vision — to
              make laundry easy, affordable and premium for everyone. With years
              of experience in service industry, we built a trusted brand that
              focuses on quality, hygiene and timely delivery.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Today, we are expanding through franchises across multiple cities
              and helping entrepreneurs grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT / FRANCHISE FORM ================= */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-center mb-10 gap-4">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-full font-semibold border transition duration-300 hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] ${
                activeTab === "contact"
                  ? "bg-[#2FA4D4] text-white border-transparent shadow"
                  : "bg-white shadow border-[#2FA4D4]/30 text-[#1c3c57]"
              }`}
            >
              General Contact
            </button>

            <button
              onClick={() => setActiveTab("franchise")}
              className={`px-6 py-3 rounded-full font-semibold border transition duration-300 hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] ${
                activeTab === "franchise"
                  ? "bg-[#2FA4D4] text-white border-transparent shadow"
                  : "bg-white shadow border-[#2FA4D4]/30 text-[#1c3c57]"
              }`}
            >
              Franchise Enquiry
            </button>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg">
            {activeTab === "contact" && (
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Full Name"
                  value={contactForm.fullName}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                />
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Phone Number"
                  value={contactForm.phoneNumber}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
                <input
                  className="border p-3 rounded-lg md:col-span-2"
                  placeholder="Email Address"
                  value={contactForm.emailAddress}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      emailAddress: e.target.value,
                    }))
                  }
                />
                <textarea
                  className="border p-3 rounded-lg md:col-span-2"
                  rows="4"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={handleContactSubmit}
                  className="md:col-span-2 bg-[#2FA4D4] text-white py-3 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            )}

            {activeTab === "franchise" && (
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Full Name"
                  value={franchiseForm.fullName}
                  onChange={(e) =>
                    setFranchiseForm((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                />
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Phone Number"
                  value={franchiseForm.phoneNumber}
                  onChange={(e) =>
                    setFranchiseForm((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
                <input
                  className="border p-3 rounded-lg"
                  placeholder="City"
                  value={franchiseForm.city}
                  onChange={(e) =>
                    setFranchiseForm((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                />
                <input
                  className="border p-3 rounded-lg"
                  placeholder="Investment Budget"
                  value={franchiseForm.investmentBudget}
                  onChange={(e) =>
                    setFranchiseForm((prev) => ({
                      ...prev,
                      investmentBudget: e.target.value,
                    }))
                  }
                />
                <textarea
                  className="border p-3 rounded-lg md:col-span-2"
                  rows="4"
                  placeholder="Why do you want our franchise?"
                  value={franchiseForm.reason}
                  onChange={(e) =>
                    setFranchiseForm((prev) => ({
                      ...prev,
                      reason: e.target.value,
                    }))
                  }
                />
                <button
                  type="button"
                  onClick={handleFranchiseSubmit}
                  className="md:col-span-2 bg-[#2FA4D4] text-white py-3 rounded-lg font-semibold border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
                >
                  Apply for Franchise
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= OUR FRANCHISES ================= */}
      <section className="py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Franchises</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              city: "Kesar Vihar Jagatpura, Jaipur",
              desc: "Our flagship franchise delivering premium services across Jaipur.",
              img: "/JagatpuraBranch.jpeg",
              map: "https://maps.app.goo.gl/AH6uyc1UGpXmtjY7A?g_st=ic",
              isHomeBranch: true,
            },
            {
              city: "Sawai Gator Malviya Nagar, Jaipur",
              desc: "Fast growing franchise serving 1000+ customers monthly.",
              img: "/MalviyaBranch.jpeg",
              map: "https://maps.google.com/?q=26.833132,75.815933",
            },
            {
              city: "Partap Nagar Sanganer, Jaipur",
              desc: "Trusted local franchise known for quality and speed.",
              img: "/PartapNagarBranch1.jpeg",
              map: "https://maps.google.com/?q=26.804840,75.838913",
            },
            {
              city: "Partap Nagar Sanganer, Jaipur",
              desc: "Trusted local franchise known for quality and speed.",
              img: "/PartapNagarBranch2.jpeg",
              map: "https://maps.app.goo.gl/Bbnag5Yei6JbwMub6?g_st=ic",
            },
            {
              city: "Meera Marg Mansarovar, Jaipur",
              desc: "Trusted local franchise known for quality and speed.",
              img: "/MansarovarBranch.jpeg",
              map: "https://maps.app.goo.gl/KM5Hb4naa9axyJm16?g_st=ic",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 ${
                item.isHomeBranch
                  ? "bg-[#eaf8ff] ring-2 ring-[#2FA4D4]"
                  : "bg-gray-50"
              }`}
            >
              {item.isHomeBranch && (
                <div className="px-4 py-2 bg-[#2FA4D4] text-white text-xs font-semibold tracking-wide uppercase">
                  Home Branch
                </div>
              )}
              <img src={item.img} alt="" className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{item.city}</h3>

                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

                {/* Location + Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    📍 {item.city}, India
                  </span>

                  <a
                    href={item.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2FA4D4] text-white px-4 py-2 rounded-lg text-sm font-medium border border-transparent hover:bg-white hover:text-[#2FA4D4] hover:border-[#2FA4D4] transition duration-300"
                  >
                    Open on Map
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
