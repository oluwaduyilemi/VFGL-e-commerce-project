
"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ChevronDown} from "lucide-react";

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { id: "about", label: "About Us", href: "/about" },
      { id: "careers", label: "Careers", href: "/careers" },
      { id: "blog", label: "Blog", href: "/blog" },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop",
    links: [
      { id: "men", label: "Men", href: "/shop/men" },
      { id: "women", label: "Women", href: "/shop/women" },
      { id: "accessories", label: "Accessories", href: "/shop/accessories" },
      { id: "new-arrivals", label: "New Arrivals", href: "/shop/new" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: "faqs", label: "FAQs", href: "/faqs" },
      { id: "shipping", label: "Shipping & Returns", href: "/shipping" },
      { id: "privacy", label: "Privacy Policy", href: "/privacy" },
      { id: "terms", label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-400 px-6 py-14 ">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-dashed border-gray-800 pb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={140}
              height={40}
              className="rounded-sm"
            />
          </div>

           <div className="flex items-center border-b border-dashed border-gray-300 pb-2 max-w-xs">
              <input
                type="email"
                placeholder="Get latest offers to your inbox"
                className="flex-1 bg-transparent text-[#787A7C] outline-none text-[13px]"
              />
              <button
                className="bg-black text-white p-2 rounded-md hover:bg-gray-900"
                aria-label="Subscribe"
              >
                <ChevronDown className="rotate-[-90deg]" size={16} />
              </button>
            </div>
      
          <div className="flex items-center gap-4 pt-3">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-7 h-7 bg-[#FFFFFF] p-1.5 text-[#121212] rounded-2xl transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-7 h-7 bg-[#FFFFFF] p-1.5 text-[#121212] rounded-2xl transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-7 h-7 bg-[#FFFFFF] p-1.5 text-[#121212] rounded-2xl transition-colors" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-7 h-7 bg-[#FFFFFF] p-1.5 text-[#121212] rounded-2xl transition-colors" />
            </Link>
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-[#121212] text-[13px] font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-[12px] text-[#141414]">
              {section.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className=" transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="container m-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-[#3E3E59]">
        <p>© John Lewis plc 2001 - 2024</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="#" className="hover:text-white">
           English
          </Link>
          <Link href="#" className="hover:text-white">
           USD
          </Link>
        
        </div>
      </div>
    </footer>
  );
}
