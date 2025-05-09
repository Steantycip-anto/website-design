import { Button } from "../utils"
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ExternalLink, Search } from 'lucide-react';
import React, { useState } from 'react';
import { Menu as MenuIcon, Bell, User, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

// Header Component
export const FirstHeader = () => (
  <header className="w-full bg-white shadow-md z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-2xl">ANTYCIP</div>
      <nav>
        <ul className="flex">
          <li className="ml-8"><a href="#" className="text-black hover:text-red-600 transition-colors">Home</a></li>
          <li className="ml-8"><a href="#" className="text-black hover:text-red-600 transition-colors">Solutions</a></li>
          <li className="ml-8"><a href="#" className="text-black hover:text-red-600 transition-colors">Projects</a></li>
          <li className="ml-8"><a href="#" className="text-black hover:text-red-600 transition-colors">About</a></li>
          <li className="ml-8"><a href="#" className="text-black hover:text-red-600 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export function DarkHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const mainSections = [
    { name: 'Home', link: '/' },
    {
      name: 'Soluzioni',
      link: '/soluzioni',
      subsections: [
        { name: 'Simulazione avanzata', link: '/soluzioni/simulazione' },
        { name: 'Realtà virtuale', link: '/soluzioni/realta-virtuale' },
        { name: 'Visualizzazione 3D', link: '/soluzioni/visualizzazione-3d' }
      ]
    },
    {
      name: 'Expertise',
      link: '/expertise',
      subsections: [
        { name: 'Difesa', link: '/expertise/difesa' },
        { name: 'Industria', link: '/expertise/industria' },
        { name: 'Ricerca', link: '/expertise/ricerca' }
      ]
    },
    { name: 'Progetti', link: '/progetti' },
    { name: 'Chi Siamo', link: '/chi-siamo' },
    { name: 'Contatti', link: '/contatti' }
  ];

  return (
    <header className="bg-black text-white">
      {/* Top contact bar */}
      <div className="hidden md:block bg-gray-900 py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-red-600" />
              <span>+39 123 456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-red-600" />
              <span>info@stengineering-antycip.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-red-600" />
              <span>Milano, Italia</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition">IT</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition">EN</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition">FR</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img src="https://steantycip.com/wp-content/uploads/2024/12/ANT24_Logotype-Master_White-RGB.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {mainSections.map((section, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <a
                    href={section.link}
                    className="text-gray-300 hover:text-white transition font-medium"
                  >
                    {section.name}
                  </a>
                  {section.subsections && (
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform ${activeSection === index ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>

                {/* Dropdown menu */}
                {section.subsections && activeSection === index && (
                  <div className="absolute top-full left-0 bg-black border border-gray-800 rounded mt-1 py-2 min-w-48 z-10">
                    {section.subsections.map((subsection, subindex) => (
                      <a
                        key={subindex}
                        href={subsection.link}
                        className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition"
                      >
                        {subsection.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA and mobile menu */}
          <div className="flex items-center gap-4">
            <a
              href="/contatti"
              className="hidden md:block bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors"
            >
              Richiedi Demo
            </a>
            <button
              className="md:hidden text-white hover:text-red-600 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Red accent line */}
      <div className="h-1 bg-gradient-to-r from-red-600 to-red-800"></div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full z-50 bg-black border-t border-gray-800 transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <div className="px-4 py-4">
          {mainSections.map((section, index) => (
            <div key={index} className="mb-4">
              <a href={section.link} className="block text-gray-300 hover:text-white transition font-medium">
                {section.name}
              </a>
              {section.subsections && (
                <div className="ml-4 mt-2">
                  {section.subsections.map((subsection, subindex) => (
                    <a
                      key={subindex}
                      href={subsection.link}
                      className="block text-gray-400 hover:text-white transition py-1"
                    >
                      {subsection.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>

  );
}


export function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Chi Siamo', link: '/chi-siamo' },
    { name: 'Expertise', link: '/expertise' },
    { name: 'Soluzioni', link: '/soluzioni' },
    { name: 'News', link: '/news' },
    { name: 'Contatti', link: '/contatti' },
  ];

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      {/* Red line on top */}
      <div className="h-1 bg-red-600 w-full"></div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-black rounded-sm flex items-center justify-center">
              <div className="h-6 w-6 bg-red-600 rounded-sm"></div>
            </div>
            <div>
              <div className="font-bold tracking-tight">ST ENGINEERING</div>
              <div className="text-red-600 text-sm font-medium tracking-wider">ANTYCIP</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex h-full">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="h-full flex items-center relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.link}
                  className="px-4 h-full flex items-center text-black hover:text-red-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-red-600 w-full transform transition-transform duration-300 ${hoveredItem === index ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`}
                ></div>
              </div>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="/contatti"
              className="hidden md:flex items-center gap-1 text-red-600 hover:text-red-700 font-medium"
            >
              Area Clienti
              <ExternalLink size={16} />
            </a>
            <button
              className="bg-black text-white px-4 py-2 hover:bg-red-600 transition"
            >
              Contattaci
            </button>
            <button
              className="md:hidden text-black hover:text-red-600 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white absolute w-full px-4 shadow-md transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}
      >
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="py-3 border-b border-gray-100 last:border-b-0 text-black hover:text-red-600"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/area-clienti"
            className="py-3 mt-2 flex items-center gap-1 text-red-600 font-medium"
          >
            Area Clienti
            <ExternalLink size={16} />
          </a>
        </nav>
      </div>

      {/* Shadow line that appears when scrolling */}
      <div className="h-px w-full bg-gray-200 shadow-sm"></div>
    </header>
  );
}

export function AnimatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: 'Chi siamo',
      link: '/chi-siamo',
      submenu: [
        { name: 'Storia', link: '/chi-siamo/storia' },
        { name: 'Team', link: '/chi-siamo/team' },
        { name: 'Valori', link: '/chi-siamo/valori' }
      ]
    },
    {
      name: 'Expertise',
      link: '/expertise',
      submenu: [
        { name: 'Simulazione', link: '/expertise/simulazione' },
        { name: 'Training', link: '/expertise/training' },
        { name: 'Ricerca & Sviluppo', link: '/expertise/ricerca-sviluppo' }
      ]
    },
    {
      name: 'Soluzioni',
      link: '/soluzioni',
      submenu: [
        { name: 'Industria', link: '/soluzioni/industria' },
        { name: 'Difesa', link: '/soluzioni/difesa' },
        { name: 'Trasporti', link: '/soluzioni/trasporti' }
      ]
    },
    { name: 'News', link: '/news' },
    { name: 'Contatti', link: '/contatti' }
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar con info di contatto */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>info@stengineering-antycip.com | +39 123 456 7890</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600 transition">IT</a>
            <a href="#" className="hover:text-red-600 transition">EN</a>
            <a href="#" className="hover:text-red-600 transition">FR</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-600 rounded-md flex items-center justify-center text-white font-bold text-2xl">ST</div>
            <div className="ml-3">
              <div className="font-bold text-lg">ST Engineering</div>
              <div className="text-red-600 font-medium text-sm -mt-1">Antycip</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  className="flex items-center text-black hover:text-red-600 transition py-2"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Dropdown menu */}
                {item.submenu && activeDropdown === index && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-10 mt-1">
                    {item.submenu.map((subitem, subindex) => (
                      <a
                        key={subindex}
                        href={subitem.link}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-red-600"
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and menu buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-red-600 transition">
              <Search size={20} />
            </button>
            <button
              className="md:hidden text-black hover:text-red-600 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a
              href="/contatti"
              className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Richiedi Demo
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white absolute w-full left-0 shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2 border-b border-gray-100 last:border-b-0">
              <button
                className="flex items-center justify-between w-full text-black"
                onClick={() => toggleDropdown(index)}
              >
                <span>{item.name}</span>
                {item.submenu && (
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Mobile submenu */}
              {item.submenu && activeDropdown === index && (
                <div className="pl-4 mt-2 border-l-2 border-red-600">
                  {item.submenu.map((subitem, subindex) => (
                    <a
                      key={subindex}
                      href={subitem.link}
                      className="block py-2 text-gray-700 hover:text-red-600"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <a
              href="/contatti"
              className="block w-full bg-red-600 text-white px-4 py-2 rounded-md text-center hover:bg-red-700 transition"
            >
              Richiedi Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


//2 lines

export function TechMenuDesign1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col w-full">
        {/* Top row with logo and search */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-red-600 rounded flex items-center justify-center text-white font-bold">TL</div>
            <span className="font-bold text-xl">TECH LOGO</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 border border-gray-700 rounded-md px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Bottom row with navigation */}
        <div className="flex px-6 py-3">
          <nav className="flex space-x-8">
            {['Home', 'Products', 'Solutions', 'Services', 'About Us', 'Contact', 'Support'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-red-500 font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-sm">TL</div>
            <span className="font-bold">TECH LOGO</span>
          </div>

          <div className="flex items-center space-x-3">
            <Search className="text-gray-300" size={20} />
            <button onClick={toggleMenu} className="text-gray-300">
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-gray-900 px-4 py-2">
            <div className="mb-4 pt-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 w-full border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <nav className="flex flex-col space-y-3 pb-4">
              {['Home', 'Products', 'Solutions', 'Services', 'About Us', 'Contact', 'Support'].map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:text-red-500 py-1 border-b border-gray-800">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export function TechMenuDesign2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const mainLinks = ['Home', 'Products', 'Solutions', 'Resources'];
  const secondaryLinks = ['Support', 'About Us', 'Careers', 'Contact'];

  return (
    <div className="bg-gray-900 text-white w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Top row with main navigation */}
        <div className="bg-black px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-red-600 flex items-center justify-center rounded-full">
              <span className="font-bold text-lg">TL</span>
            </div>
            <span className="font-bold text-xl tracking-tight">TECHNOLAB</span>
          </div>

          <div className="flex items-center space-x-8">
            {mainLinks.map((link) => (
              <a key={link} href="#" className="font-medium hover:text-red-500 transition-colors flex items-center space-x-1">
                <span>{link}</span>
                {link !== 'Home' && <ChevronDown size={16} />}
              </a>
            ))}
          </div>

          <div className={`relative transition-all duration-300 ${searchFocused ? 'w-64' : 'w-48'}`}>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Bottom row with secondary navigation */}
        <div className="bg-gray-800 px-8 py-2 flex justify-end">
          <nav className="flex space-x-6 text-sm">
            {secondaryLinks.map((link) => (
              <a key={link} href="#" className="text-gray-300 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3 bg-black">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">TL</div>
            <span className="font-bold">TECHNOLAB</span>
          </div>

          <div className="flex items-center space-x-3">
            <Search className="text-gray-300" size={20} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-gray-800">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 w-full border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="border-t border-gray-700">
              <nav className="flex flex-col">
                {[...mainLinks, ...secondaryLinks].map((item) => (
                  <a key={item} href="#" className="flex justify-between items-center px-4 py-3 border-b border-gray-700 hover:bg-gray-700">
                    <span>{item}</span>
                    {!['Home', 'About Us', 'Careers', 'Contact', 'Support'].includes(item) && (
                      <ChevronDown size={18} className="text-gray-400" />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TechMenuDesign3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const topNavItems = ['Products', 'Solutions', 'Services', 'Resources'];
  const bottomNavItems = ['Company', 'Partners', 'Blog', 'Events', 'Contact'];

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="w-full text-white">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col w-full">
        {/* Top bar */}
        <div className="bg-black px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-10 w-10">
              <div className="h-8 w-8 bg-red-600 transform rotate-45"></div>
              <span className="absolute font-bold text-sm">NT</span>
            </div>
            <span className="font-bold text-xl tracking-wide">NEOTEC</span>
          </div>

          <div className="flex space-x-8">
            {topNavItems.map((item) => (
              <div
                key={item}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="font-medium hover:text-red-500 transition-colors">
                  {item}
                </a>
                {hoveredCategory === item && (
                  <div className="absolute top-full left-0 bg-gray-900 shadow-lg rounded mt-1 p-4 w-64 z-50">
                    <div className="flex flex-col space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <a
                          key={i}
                          href="#"
                          className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded transition-colors"
                        >
                          <span>{item} Category {i}</span>
                          <ChevronRight size={14} className="ml-auto" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-red-500 focus:w-64 transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-gray-900 px-6 py-2 flex">
          <nav className="flex space-x-6 text-sm">
            {bottomNavItems.map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-4 py-3 bg-black">
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center justify-center h-8 w-8">
              <div className="h-6 w-6 bg-red-600 transform rotate-45"></div>
              <span className="absolute font-bold text-xs">NT</span>
            </div>
            <span className="font-bold">NEOTEC</span>
          </div>

          <div className="flex items-center space-x-3">
            <Search className="text-gray-300" size={20} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-gray-900">
            <div className="p-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 w-full border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="border-t border-gray-700">
              <div className="py-2 px-4 bg-gray-800 text-gray-400 text-sm font-medium">Main Navigation</div>
              {topNavItems.map((item) => (
                <a key={item} href="#" className="flex justify-between items-center px-4 py-3 border-b border-gray-700 hover:bg-gray-800">
                  <span>{item}</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </a>
              ))}
              <div className="py-2 px-4 bg-gray-800 text-gray-400 text-sm font-medium">Secondary Navigation</div>
              {bottomNavItems.map((item) => (
                <a key={item} href="#" className="flex justify-between items-center px-4 py-3 border-b border-gray-700 hover:bg-gray-800">
                  <span>{item}</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </a>
              ))}
              <div className="flex justify-between px-4 py-4">
                <a href="#" className="text-gray-300 hover:text-white">Sign In</a>
                <a href="#" className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700">Register</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

//new menu

const menuFirstRow = [{ text: 'Blog', href: "/blog" }, { text: 'Careers', href: "/career" }, { text: 'News', href: "/news" }, { text: 'About', href: "/about" }, { text: 'Corporate', href: "/corporate" }];
const menuSecondRow = [{ text: 'Solution/Offer', href: '/solution-offer' }, { text: 'Products & Services', href: '/products-services' }, { text: 'Markets', href: '/markets' }, { text: 'Projects', href: '/projects' }, { text: 'Events', href: '/events' }];

export function VariantOne() {
  return (
    <header className="w-full bg-black text-white">
      <div className="px-6 py-3 flex justify-between items-center gap-6">
        {/* Left Column: Logo */}
        <div className="h-full flex items-center">
          <a href="/" className="flex items-center">
            <Image src="https://steantycip.com/wp-content/uploads/2024/12/ANT24_Logotype-Master_White-RGB.png" alt="Logo" width={300} height={80} />
          </a>
        </div>

        {/* Right Column: Menu */}
        <div className="flex-1 flex flex-col items-end">
          <div className="flex-1 w-full flex items-center justify-between border-b border-gray-800 text-sm py-2">
            <div className="flex-1 flex justify-center items-center gap-6">
              <ul className="flex gap-6">
                {menuFirstRow.map((item) => (
                  <li key={item} className="hover:text-red-500 cursor-pointer">
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-1 rounded-xl transition-all">
                <a href="/contact-us">
                  Contact Us
                </a>
              </button>
            </div>
            <div className="flex items-center gap-4 ml-6">
              <Input placeholder="Search..." className="bg-gray-900 text-white border-none w-48" />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                  <Globe className="w-4 h-4" /> EN
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>EN</DropdownMenuItem>
                  <DropdownMenuItem>IT</DropdownMenuItem>
                  <DropdownMenuItem>FR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex justify-end py-3">
            <ul className="flex gap-8 text-lg">
              {menuSecondRow.map((item) => (
                <li key={item} className="hover:text-red-500 cursor-pointer">
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export function VariantTwo() {
  return (
    <header className="w-full bg-black text-white">
      <div className="flex flex-col text-gray-300">
        <div className="bg-gray-900 px-6 py-2 text-xs flex justify-between items-center border-b border-gray-700">
          <ul className="flex gap-5">
            {menuFirstRow.map((item) => (
              <li key={item} className="hover:text-red-400 cursor-pointer">{item}</li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Input placeholder="Search..." className="bg-black text-white border border-gray-600 px-2" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                <Globe className="w-4 h-4" /> EN
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>EN</DropdownMenuItem>
                <DropdownMenuItem>IT</DropdownMenuItem>
                <DropdownMenuItem>FR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="bg-black px-6 py-4 flex justify-between items-center">
          <Image src="https://steantycip.com/wp-content/uploads/2024/12/ANT24_Logotype-Master_White-RGB.png" alt="Logo" width={100} height={36} />
          <ul className="flex gap-6 text-base">
            {menuSecondRow.map((item) => (
              <li key={item} className="hover:text-red-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export function VariantThree() {
  return (
    <header className="w-full bg-black text-white">
      <div className="bg-black text-white">
        <div className="flex justify-between items-center px-6 py-2 border-b border-gray-800">
          <ul className="flex gap-4 text-sm">
            {menuFirstRow.map((item) => (
              <li key={item} className="hover:text-red-600 cursor-pointer">{item}</li>
            ))}
          </ul>
          <div className="flex gap-3 items-center">
            <Input placeholder="Search site..." className="bg-gray-800 text-white px-2 py-1" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <Globe className="h-4 w-4" /> EN
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>EN</DropdownMenuItem>
                <DropdownMenuItem>IT</DropdownMenuItem>
                <DropdownMenuItem>DE</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
          <Image src="https://steantycip.com/wp-content/uploads/2024/12/ANT24_Logotype-Master_White-RGB.png" alt="Logo" width={110} height={38} />
          <ul className="flex gap-10 text-base">
            {menuSecondRow.map((item) => (
              <li key={item} className="hover:text-red-500 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
