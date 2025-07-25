'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    // Matches base path or root path for hash anchors
    return pathname === href || pathname === href.split('#')[0];
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/profilepic.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-md font-semibold text-gray-800">SHANNON PETRE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${
                isActive(href)
                  ? 'text-black font-semibold underline underline-offset-4'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <Image
            src={menuOpen ? '/close.svg' : '/menu.svg'}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 shadow">
          <ul className="flex flex-col space-y-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition ${
                    isActive(href)
                      ? 'text-black font-semibold underline underline-offset-4'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
