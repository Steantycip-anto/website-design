import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export function HeaderDetail({
  title = "Sistema di intelligenza artificiale avanzato",
  category = "Soluzioni Enterprise",
  description = "Un sistema AI all'avanguardia progettato per ottimizzare i processi aziendali e migliorare l'efficienza operativa.",
  breadcrumbs = [
    { name: "Home", href: "#" },
    { name: "Prodotti", href: "#" },
    { name: "AI Solutions", href: "#" }
  ],
  imageUrl = "https://steantycip.com/wp-content/uploads/2021/04/SAQ6354-scaled.jpg"
}) {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black text-white min-h-screen">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array(12).fill().map((_, i) => (
            <div key={i} className="border-r border-gray-700 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {Array(12).fill().map((_, i) => (
            <div key={i} className="border-b border-gray-700 w-full"></div>
          ))}
        </div>
      </div>

      {/* Red diagonal slash */}
      <div className="absolute right-0 top-0 -z-0 h-full w-1/3 bg-gradient-to-bl from-red-600/20 to-transparent transform skew-x-12"></div>

      {/* Content container */}
      <div className="container mx-auto relative z-10 px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 lg:mb-12 items-center opacity-80 text-sm text-gray-400">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center">
              {idx > 0 && <ChevronRight size={14} className="mx-2" />}
              <a href={crumb.href} className="hover:text-red-500 transition-colors">
                {crumb.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Category badge */}
        <div
          className={`inline-block px-4 py-1 mb-4 border border-red-500 text-red-500 text-sm font-medium transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 ease-out`}
        >
          {category}
        </div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-6 z-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000 ease-out delay-300`}
            >
              {title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-2 mb-2">
                  {word}
                </span>
              ))}
            </h1>

            <p
              className={`text-lg text-gray-300 mb-8 max-w-xl transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-1000 ease-out delay-500`}
            >
              {description}
            </p>

            <div
              className={`transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-1000 ease-out delay-700`}
            >
              <a
                href="#details"
                className="group flex items-center space-x-2 text-white font-medium"
              >
                <span>Scopri di più</span>
                <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-6 relative">
            <div
              className={`aspect-w-16 aspect-h-9 rounded-md overflow-hidden transform ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'} transition-all duration-1200 ease-out delay-300`}
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transform"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              />

              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-600/20 blur-2xl rounded-full -mr-10 -mb-10"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-red-600/30 blur-xl rounded-full -ml-6 -mt-6"></div>
            </div>

            {/* Geometric accent */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const HeroSection = () => {
  const heroContent = {
    title: "Innovazione Tecnologica per il Futuro Digitale",
    subtitle: "Soluzioni all'avanguardia per trasformare il tuo business e guidarlo verso nuovi orizzonti di successo nel mercato globale.",
    ctaText: "Scopri di più",
    ctaLink: "#",
    image: "https://steantycip.com/wp-content/uploads/2021/04/SAQ6354-scaled.jpg",
    overlayOpacity: 70,
    alignment: "left"
  };

  const A = ({
    title,
    subtitle,
    ctaText,
    ctaLink,
    image,
    overlayOpacity = 70,
    alignment = "left" // "left", "center", "right"
  }) => {
    const alignmentClasses = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end"
    };

    return (
      <div className="relative w-full bg-black text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {image ? (
            <img
              src={image}
              alt="Background"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black"></div>
          )}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity / 100 }}
          ></div>
        </div>

        {/* Red geometric accent elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-500 opacity-10 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 opacity-5 rounded-tl-full transform translate-x-1/4 translate-y-1/4"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 lg:py-40 flex flex-col min-h-[500px] justify-center">
          <div className={`max-w-xl ${alignmentClasses[alignment]} space-y-6`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title.split(' ').map((word, i) =>
                i % 3 === 0 ? <span key={i} className="text-red-500">{word} </span> : <span key={i}>{word} </span>
              )}
            </h1>

            <p className="text-lg text-gray-300">{subtitle}</p>

            <div className="pt-4">
              <a
                href={ctaLink}
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                {ctaText}
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    );
  }
  return <A {...heroContent} />
};