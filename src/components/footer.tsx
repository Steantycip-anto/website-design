import { useState, useEffect } from 'react';

export function MinimalColumnFooter() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const offices = [
    {
      country: "United Kingdom",
      address: "45 Tech Square, London EC2A 1NT",
      phone: "+44 20 7123 4567",
      email: "uk@techcompany.com"
    },
    {
      country: "Italy",
      address: "Via dell'Innovazione 28, 20121 Milan",
      phone: "+39 02 8765 4321",
      email: "italy@techcompany.com"
    },
    {
      country: "France",
      address: "15 Rue de la Technologie, 75008 Paris",
      phone: "+33 1 2345 6789",
      email: "france@techcompany.com"
    }
  ];
  
  const navLinks = {
    company: [
      { name: "About Us", url: "/about" },
      { name: "Our Team", url: "/team" },
      { name: "Careers", url: "/careers" },
      { name: "News", url: "/news" },
      { name: "Investors", url: "/investors" }
    ],
    services: [
      { name: "Software Development", url: "/services/software" },
      { name: "AI Solutions", url: "/services/ai" },
      { name: "Digital Transformation", url: "/services/digital" },
      { name: "Cybersecurity", url: "/services/security" },
      { name: "Cloud Services", url: "/services/cloud" }
    ],
    resources: [
      { name: "Blog", url: "/blog" },
      { name: "Case Studies", url: "/cases" },
      { name: "Whitepapers", url: "/resources" },
      { name: "Documentation", url: "/docs" },
      { name: "Support Center", url: "/support" }
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
      { name: "Cookie Policy", url: "/cookies" },
      { name: "GDPR Compliance", url: "/gdpr" },
      { name: "Accessibility", url: "/accessibility" }
    ]
  };
  
  const socialIcons = [
    { name: "LinkedIn", icon: "󰌻" },
    { name: "Twitter", icon: "󰕄" },
    { name: "Facebook", icon: "󰈌" },
    { name: "Instagram", icon: "󰋾" },
    { name: "YouTube", icon: "󰗃" }
  ];
  
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo and company tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-800 pb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">TC</div>
              <h3 className="ml-3 text-xl font-bold">TECH COMPANY</h3>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Transforming ideas into reality through innovative technology solutions. 
              Building the future, one byte at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg transform transition-all duration-300 hover:bg-gray-800">
                <h4 className="font-bold text-red-500 mb-2">{office.country}</h4>
                <address className="not-italic text-sm text-gray-400">
                  <p>{office.address}</p>
                  <p className="mt-2">
                    <a href={`tel:${office.phone}`} className="transition hover:text-red-500">{office.phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${office.email}`} className="transition hover:text-red-500">{office.email}</a>
                  </p>
                </address>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(navLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold uppercase mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-red-500 transition duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar with social links and copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialIcons.map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-900 hover:bg-red-600 transition-all duration-300"
                onMouseEnter={() => setHoveredIcon(social.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <span className="text-xl">{social.icon}</span>
                {hoveredIcon === social.name && (
                  <span className="absolute -top-8 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    {social.name}
                  </span>
                )}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Tech Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function GeometricGridFooter() {
  const [animateIn, setAnimateIn] = useState(false);
  const [activeTab, setActiveTab] = useState('company');
  
  useEffect(() => {
    setAnimateIn(true);
  }, []);
  
  const offices = [
    {
      country: "United Kingdom",
      city: "London",
      address: "45 Tech Square, London EC2A 1NT",
      phone: "+44 20 7123 4567",
      email: "uk@techcompany.com",
      coordinates: "51.5074° N, 0.1278° W"
    },
    {
      country: "Italy",
      city: "Milan",
      address: "Via dell'Innovazione 28, 20121 Milan",
      phone: "+39 02 8765 4321",
      email: "italy@techcompany.com",
      coordinates: "45.4642° N, 9.1900° E"
    },
    {
      country: "France",
      city: "Paris",
      address: "15 Rue de la Technologie, 75008 Paris",
      phone: "+33 1 2345 6789",
      email: "france@techcompany.com",
      coordinates: "48.8566° N, 2.3522° E"
    }
  ];
  
  const navCategories = {
    company: [
      { name: "About Us", url: "/about" },
      { name: "Our Mission", url: "/mission" },
      { name: "Leadership", url: "/leadership" },
      { name: "Careers", url: "/careers" },
      { name: "News", url: "/news" },
      { name: "Investors", url: "/investors" },
      { name: "Sustainability", url: "/sustainability" }
    ],
    solutions: [
      { name: "Enterprise Solutions", url: "/solutions/enterprise" },
      { name: "Small Business", url: "/solutions/small-business" },
      { name: "Startups", url: "/solutions/startups" },
      { name: "Digital Transformation", url: "/solutions/transformation" },
      { name: "Technology Consulting", url: "/solutions/consulting" },
      { name: "Product Innovation", url: "/solutions/innovation" }
    ],
    resources: [
      { name: "Blog", url: "/blog" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Whitepapers", url: "/whitepapers" },
      { name: "Documentation", url: "/docs" },
      { name: "API Reference", url: "/api" },
      { name: "Support Center", url: "/support" },
      { name: "Training", url: "/training" }
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
      { name: "Cookie Policy", url: "/cookies" },
      { name: "Data Protection", url: "/data-protection" },
      { name: "GDPR Compliance", url: "/gdpr" },
      { name: "Accessibility", url: "/accessibility" }
    ]
  };
  
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-red-600 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border-2 border-gray-700 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Top section with company info and offices */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className={`transition-all duration-1000 delay-100 transform ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-red-600 rotate-45 flex items-center justify-center">
                  <div className="h-6 w-6 bg-black"></div>
                </div>
                <h3 className="ml-4 text-xl font-bold tracking-wider">TECH<span className="text-red-600">NEXUS</span></h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Pioneering technological advancements and digital innovation for enterprises worldwide. 
                Our mission is to create solutions that transform businesses and elevate human experiences.
              </p>
              
              <div className="flex space-x-4 mb-8">
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-red-600 transition-colors duration-300 hover:text-red-600">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-red-600 transition-colors duration-300 hover:text-red-600">
                  <span className="text-sm">X</span>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-red-600 transition-colors duration-300 hover:text-red-600">
                  <span className="text-sm">fb</span>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-red-600 transition-colors duration-300 hover:text-red-600">
                  <span className="text-sm">ig</span>
                </a>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>© {new Date().getFullYear()} TechNexus Inc.</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-red-500">Global Offices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-900 bg-opacity-60 p-6 backdrop-blur border-t border-gray-800 transition-all duration-700 transform ${
                    animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="font-bold">{office.city}</h5>
                    <span className="text-xs text-gray-500">{office.coordinates}</span>
                  </div>
                  
                  <address className="not-italic text-sm text-gray-400 mb-4">
                    {office.address}
                  </address>
                  
                  <div className="flex flex-col space-y-2 text-sm">
                    <a href={`tel:${office.phone}`} className="text-gray-400 hover:text-red-500 transition-colors">
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tab navigation for links */}
        <div className="mb-12">
          <div className="border-b border-gray-800 flex overflow-x-auto scrollbar-hide">
            {Object.keys(navCategories).map((category) => (
              <button
                key={category}
                className={`px-6 py-3 text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                  activeTab === category ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="pt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
              {navCategories[activeTab].map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1 h-1 bg-red-600 mr-2"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Newsletter and bottom info */}
        <div className="border-t border-gray-800 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on technology trends and company news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border border-gray-700 text-white px-4 py-2 flex-grow focus:outline-none focus:border-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="text-right text-sm text-gray-500">
            <p className="mb-2">ISO 27001 Certified</p>
            <p className="mb-2">Carbon Neutral Company</p>
            <div className="flex justify-end space-x-4 mt-4">
              <a href="/sitemap" className="hover:text-red-500 transition-colors">Sitemap</a>
              <a href="/contact" className="hover:text-red-500 transition-colors">Contact Us</a>
              <a href="/press" className="hover:text-red-500 transition-colors">Press Kit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FuturisticInteractiveFooter() {
  const [expandedOffice, setExpandedOffice] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  
  useEffect(() => {
    setShowAnimation(true);
  }, []);
  
  const offices = [
    {
      id: "uk",
      country: "United Kingdom",
      city: "London",
      address: "45 Tech Square, London EC2A 1NT",
      phone: "+44 20 7123 4567",
      email: "uk@quantumtech.com",
      teamSize: 120,
      services: ["AI Research", "Cloud Infrastructure", "Business Intelligence"]
    },
    {
      id: "it",
      country: "Italy",
      city: "Milan",
      address: "Via dell'Innovazione 28, 20121 Milan",
      phone: "+39 02 8765 4321",
      email: "italy@quantumtech.com",
      teamSize: 85,
      services: ["UI/UX Design", "Mobile Development", "Digital Marketing"]
    },
    {
      id: "fr",
      country: "France",
      city: "Paris",
      address: "15 Rue de la Technologie, 75008 Paris",
      phone: "+33 1 2345 6789",
      email: "france@quantumtech.com",
      teamSize: 95,
      services: ["Cybersecurity", "Data Analytics", "IoT Solutions"]
    }
  ];
  
  const navLinks = {
    aboutUs: [
      { name: "Company Overview", url: "/about" },
      { name: "Our Mission", url: "/mission" },
      { name: "Leadership Team", url: "/leadership" },
      { name: "Our History", url: "/history" },
      { name: "Awards & Recognition", url: "/awards" }
    ],
    solutions: [
      { name: "AI & Machine Learning", url: "/solutions/ai" },
      { name: "Cloud Infrastructure", url: "/solutions/cloud" },
      { name: "Cybersecurity", url: "/solutions/security" },
      { name: "Data Analytics", url: "/solutions/analytics" },
      { name: "Digital Transformation", url: "/solutions/transformation" },
      { name: "IoT Solutions", url: "/solutions/iot" }
    ],
    industries: [
      { name: "Finance", url: "/industries/finance" },
      { name: "Healthcare", url: "/industries/healthcare" },
      { name: "Manufacturing", url: "/industries/manufacturing" },
      { name: "Retail", url: "/industries/retail" },
      { name: "Energy", url: "/industries/energy" },
      { name: "Transportation", url: "/industries/transportation" }
    ],
    resources: [
      { name: "Blog", url: "/blog" },
      { name: "Case Studies", url: "/case-studies" },
      { name: "Whitepapers", url: "/whitepapers" },
      { name: "Webinars", url: "/webinars" },
      { name: "Podcast", url: "/podcast" },
      { name: "Documentation", url: "/docs" }
    ],
    careers: [
      { name: "Job Openings", url: "/careers/jobs" },
      { name: "Life at QuantumTech", url: "/careers/life" },
      { name: "Benefits", url: "/careers/benefits" },
      { name: "Internship Program", url: "/careers/internships" },
      { name: "Diversity & Inclusion", url: "/careers/diversity" }
    ],
    support: [
      { name: "Help Center", url: "/support/help" },
      { name: "Contact Sales", url: "/support/sales" },
      { name: "Technical Support", url: "/support/technical" },
      { name: "Training", url: "/support/training" },
      { name: "Status Page", url: "/status" }
    ],
    legal: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Service", url: "/terms" },
      { name: "Cookie Policy", url: "/cookies" },
      { name: "GDPR Compliance", url: "/gdpr" },
      { name: "Accessibility", url: "/accessibility" },
      { name: "Sitemap", url: "/sitemap" }
    ]
  };
  
  return (
    <footer className="w-full bg-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-900 opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 opacity-5 rounded-full filter blur-3xl"></div>
        
        <div className={`absolute top-1/4 left-1/3 w-32 h-32 border border-red-600 opacity-20 transition-transform duration-1000 ${
          showAnimation ? 'rotate-45' : 'rotate-0'
        }`}></div>
        
        <div className={`absolute bottom-1/3 right-1/4 w-64 h-1 bg-red-600 opacity-30 transition-transform duration-1500 ${
          showAnimation ? 'translate-x-24' : 'translate-x-0'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Company identity section */}
        <div className={`flex flex-col md:flex-row justify-between items-start mb-16 transition-all duration-1000 ${
          showAnimation ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-red-600 rounded opacity-80"></div>
                <div className="absolute inset-2 bg-black rounded-sm"></div>
                <div className="absolute inset-4 bg-white rounded-full"></div>
                <div className="absolute inset-5 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="ml-4 text-2xl font-bold tracking-widest">QUANTUM<span className="text-red-600">TECH</span></h3>
            </div>
            
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-6">
              A global leader in cutting-edge technology solutions. We harness the power of innovation 
              to transform businesses and shape the future of digital experiences.
            </p>
            
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <h4 className="text-xl font-bold text-red-500 mb-6">Subscribe to Our Newsletter</h4>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-gray-900 border border-gray-800 p-3 text-white focus:outline-none focus:border-red-500 w-full sm:w-64 mb-3 sm:mb-0"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition-colors duration-300 flex items-center justify-center sm:ml-2">
                <span>Subscribe</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Global offices with interactive expansion */}
        <div className="mb-16">
          <h4 className="text-xl font-bold mb-6">Global Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div 
                key={office.id}
                className={`bg-gray-900 bg-opacity-50 border-l-2 ${
                  expandedOffice === office.id ? 'border-red-600' : 'border-gray-800'
                } p-6 transition-all duration-500 cursor-pointer hover:bg-opacity-70`}
                onClick={() => setExpandedOffice(expandedOffice === office.id ? null : office.id)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h5 className="font-bold text-lg">{office.country}</h5>
                  <div className={`w-6 h-6 flex items-center justify-center border border-gray-700 rounded-full transition-transform duration-300 ${
                    expandedOffice === office.id ? 'rotate-45 border-red-500' : ''
                  }`}>
                    <span className="text-sm">+</span>
                  </div>
                </div>
                
                <div className="text-gray-400 mb-2">{office.city}</div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedOffice === office.id ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">ADDRESS</div>
                      <div className="text-sm">{office.address}</div>
                    </div>
                    
                    <div className="flex space-x-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">PHONE</div>
                        <a href={`tel:${office.phone}`} className="text-sm text-gray-300 hover:text-red-500 transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div>
                        <div className="text-xs text-gray-500 mb-1">EMAIL</div>
                        <a href={`mailto:${office.email}`} className="text-sm text-gray-300 hover:text-red-500 transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-gray-500 mb-1">SPECIALIZED IN</div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {office.services.map((service, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Links section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-12">
            {Object.entries(navLinks).map(([category, links]) => (
              <div 
                key={category} 
                className="relative"
                onMouseEnter={() => setHighlightedCategory(category)}
                onMouseLeave={() => setHighlightedCategory(null)}
              >
                <h5 className="text-base font-bold mb-4 capitalize relative">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
                      highlightedCategory === category ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </h5>
                
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.url} 
                        className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center group"
                      >
                        <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom bar with credentials */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} QuantumTech Inc. All rights reserved.</span>
            <span>ISO 27001 Certified</span>
            <span>VAT: GB123456789</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="/contact" className="hover:text-red-500 transition-colors">Contact</a>
            <span>|</span>
            <a href="/press" className="hover:text-red-500 transition-colors">Press</a>
            <span>|</span>
            <a href="/careers" className="hover:text-red-500 transition-colors">Careers</a>
          </div>
        </div>
        
        {/* Decorative bottom line */}
        <div className="mt-8 w-full h-1 bg-gradient-to-r from-black via-red-600 to-black"></div>
      </div>
    </footer>
  );
}