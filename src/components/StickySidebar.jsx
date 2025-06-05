import React from "react";
import { Facebook, Youtube, Instagram, MapPin } from "lucide-react";

const sidebarLinks = [
  {
    icon: <Facebook size={24} />,
    url: "https://www.facebook.com/StudioFiguraWroclawStablowice",
    label: "Facebook",
    bg: "bg-[#3b5998]",
  },
  {
    icon: <Youtube size={24} />,
    url: "https://www.youtube.com/",
    label: "YouTube",
    bg: "bg-[#ff0000]",
  },
  {
    icon: <Instagram size={24} />,
    url: "https://www.instagram.com/",
    label: "Instagram",
    bg: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
  },
  {
    icon: <MapPin size={24} />,
    url: "https://goo.gl/maps/your-location",
    label: "Google Maps",
    bg: "bg-[#34a853]",
  },
];

const StickySidebar = () => (
  <div className="fixed top-1/4 right-0 z-50 flex flex-col gap-4">
    {sidebarLinks.map((link, idx) => (
      <a
        key={idx}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={`flex items-center justify-center w-12 h-12 mb-2 rounded-l-lg shadow-lg text-white hover:scale-110 transition-transform ${link.bg}`}
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default StickySidebar;