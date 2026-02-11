import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/top5", label: "Top 5%" },
  { href: "/get-started", label: "Get Started" },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <Link
          href="/"
          className="text-2xl sm:text-3xl tracking-tight text-white font-serif-display hover:opacity-80 transition-opacity"
        >
          hustlr
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all text-base font-serif"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
    </>
  );
};

export default Nav;
