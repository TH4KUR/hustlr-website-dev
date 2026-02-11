import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
}

function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-72 bg-black/95 backdrop-blur-md z-50 p-6 border-l border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 mt-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-lg font-serif font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

export default MobileMenu;
