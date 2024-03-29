import React from "react";

const links = [
  { name: "Hair Salon", link: "" },
  { name: "Barbershop", link: "" },
  { name: "Nail Salon", link: "" },
  { name: "Skin Care", link: "" },
  { name: "Eyebrows & Lashes", link: "" },
  { name: "Massage", link: "" },
  { name: "Makeup Artist", link: "" },
  { name: "Day Spa", link: "" },
  { name: "More...", link: "" },
];

export default function HeroBottom() {
  return (
    <section className="flex flex-row gap-3 items-center justify-between text-[0.85rem] text-white font-medium">
      {links.map((link, index) => (
        <a
          href="/"
          key={index}
          className={`${
            index !== links.length - 1 &&
            "hover:underline hover:decoration-white hover:decoration-solid hover:decoration-2 hover:underline-offset-[18px]"
          }`}
        >
          {link.name}
        </a>
      ))}
    </section>
  );
}
