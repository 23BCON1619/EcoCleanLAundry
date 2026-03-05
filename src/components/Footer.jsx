import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaPinterestP,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import { openWhatsAppForService } from "../utils/whatsapp";

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    bgClass: "bg-[#3b5998]",
    href: "https://www.facebook.com/rjsonu7272",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    bgClass: "bg-[#1DA1F2]",
    href: "https://x.com/rjsonu7272",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    bgClass: "bg-[#E1306C]",
    href: "https://www.instagram.com/rjsonu7272",
  },
  {
    icon: FaTelegramPlane,
    label: "Telegram",
    bgClass: "bg-[#0088cc]",
    href: "https://t.me/rjsonu7272",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    bgClass: "bg-[#FF0000]",
    href: "https://www.youtube.com/@rjsonu7272",
  },
  {
    icon: FaPinterestP,
    label: "Pinterest",
    bgClass: "bg-[#E60023]",
    href: "https://in.pinterest.com/rjsonu7272",
  },
];

const CONTACT_ITEMS = [
  {
    icon: FaClock,
    text: "7 days a week 7:00 AM to 11:00 PM",
    label: "Working hours",
  },
  {
    icon: FaPhoneAlt,
    text: "(+91)98757 27274",
    label: "Phone number",
    href: "tel:+919875727274",
  },
  {
    icon: FaEnvelope,
    text: "rjsonu7272@gmail.com",
    label: "Email address",
    href: "mailto:rjsonu7272@gmail.com",
  },
  {
    icon: FaEnvelope,
    text: "thelaundrywalas@gmail.com",
    label: "Email address",
    href: "mailto:thelaundrywalas@gmail.com",
  },
];

const OUR_SERVICES = [
  "Laundry Service",
  "Dry Cleaning",
  "Ironing",
  "Alteration & Repairs",
  "Shoe Repairs",
  "Dry Cleaners",
  "Laundromat & Laundrette",
  "Shirt Service",
  "All Services",
];

const QUICK_LINKS = [
  { label: "About Us", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const COMMERCIAL_SERVICES = [
  "Airbnb Laundry",
  "Restaurant Laundry",
  "Workwear Laundry",
  "Cafe Laundry",
  "Hotel Laundry",
  "Spa Laundry",
  "Gym Laundry",
  "Medical Laundry",
  "Towel Laundry",
];

function FooterList({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F4C81] text-white pt-12 sm:pt-14 lg:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-5 sm:mb-6 inline-flex rounded-xl bg-white/95 p-2 shadow-[0_8px_22px_rgba(0,0,0,0.25)] ring-1 ring-white/20">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-24 sm:w-28 h-auto object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-5 sm:mb-6">
            {SOCIAL_LINKS.map(({ icon: Icon, label, bgClass, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bgClass} p-2.5 sm:p-3 rounded-full hover:opacity-90 transition`}
                aria-label={label}
              >
                <Icon className="text-sm sm:text-base" />
              </a>
            ))}
          </div>

          <p className="font-semibold text-sm sm:text-base mb-4">
            FOLLOW US ON SOCIAL MEDIA
          </p>

          <ul className="space-y-2.5 sm:space-y-3 text-sm">
            {CONTACT_ITEMS.map(({ icon: Icon, text, label, href }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon aria-label={label} className="shrink-0" />
                {href ? (
                  <a
                    href={href}
                    className="break-all sm:break-normal hover:text-[#8ed9f7] transition"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="break-all sm:break-normal">{text}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-7 sm:mt-8">
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Discover our app
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="h-9 sm:h-10 w-auto"
                alt="Download on the App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="h-9 sm:h-10 w-auto"
                alt="Get it on Google Play"
              />
            </div>
            <p className="mt-3 text-sm">Coming soon.</p>
          </div>
        </div>

        <FooterList title="Our Services">
          {OUR_SERVICES.map((service) => (
            <li key={service}>
              <button
                type="button"
                onClick={() => openWhatsAppForService(service)}
                className="text-left hover:text-[#8ed9f7] transition"
              >
                {service}
              </button>
            </li>
          ))}
        </FooterList>

        <FooterList title="Quick Links">
          {QUICK_LINKS.map((item) => (
            <li key={item.label}>
              <Link to={item.path} className="hover:text-[#8ed9f7] transition">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterList>

        <FooterList title="Commercial Services">
          {COMMERCIAL_SERVICES.map((service) => (
            <li key={service}>
              <button
                type="button"
                onClick={() => openWhatsAppForService(service)}
                className="text-left hover:text-[#8ed9f7] transition"
              >
                {service}
              </button>
            </li>
          ))}
        </FooterList>
      </div>

      <div className="border-t border-white/20 mt-12 sm:mt-14 lg:mt-16 py-5 sm:py-6 text-center text-xs sm:text-sm px-4">
        © {currentYear} All Rights Reserved. Designed by The Laundry walas
      </div>
    </footer>
  );
}
