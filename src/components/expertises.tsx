import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const expertiseAreas = [
  {
    id: 1,
    title: "Innovative Virtual Reality",
    description: "Cutting-edge VR solutions designed for training, visualization and analysis. Our systems create realistic environments that enhance learning and decision-making.",
    image: "https://steantycip.com/wp-content/uploads/2021/05/Varjo-VR-2.jpg",
    link: "#virtual-reality"
  },
  {
    id: 2,
    title: "Creative Simulation Solutions",
    description: "Advanced simulation technologies that replicate real-world scenarios with exceptional accuracy. From defense applications to industrial training.",
    image: "https://steantycip.com/wp-content/uploads/2021/02/9.jpg",
    link: "#simulation"
  },
  {
    id: 3,
    title: "Immersive Visual Displays",
    description: "State-of-the-art visual systems that deliver stunning clarity and immersion. Our displays create environments that blur the line between virtual and reality.",
    image: "https://steantycip.com/wp-content/uploads/2021/05/VR-CavE.jpg",
    link: "#visual-displays"
  },
  {
    id: 4,
    title: "Tailored Engineering Services",
    description: "Custom engineering solutions built to your exact specifications. Our expert team provides end-to-end support from concept to implementation.",
    image: "https://steantycip.com/wp-content/uploads/2021/05/CAVE.jpg",
    link: "#engineering"
  }
];


export function Expertise1() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative bg-black py-24 overflow-hidden">
      {/* Background with intersecting red lines */}
      <div className="absolute inset-0 z-0">
        {/* Horizontal red lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-red-600 opacity-30 transform -rotate-12"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-red-600 opacity-40 transform rotate-6"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-red-600 opacity-30 transform -rotate-8"></div>

        {/* Vertical/diagonal red lines */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-red-600 opacity-30 transform rotate-12"></div>
        <div className="absolute top-0 left-2/4 h-full w-px bg-red-600 opacity-40 transform -rotate-6"></div>
        <div className="absolute top-0 left-3/4 h-full w-px bg-red-600 opacity-30 transform rotate-8"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">OUR EXPERTISE</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We specialize in creating immersive technological solutions that transform how organizations train, 
            visualize and operate across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseAreas.map((area) => (
            <div 
              key={area.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-96 rounded-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90"></div>
                </div>

                {/* Connected lines that appear on hover */}
                {hoveredCard === area.id && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    <div className="absolute top-0 right-0 h-full w-1 bg-red-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                    <div className="absolute top-0 left-0 h-full w-1 bg-red-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-300"></div>
                  </>
                )}

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-2xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <a 
                    href={area.link}
                    className="inline-flex items-center text-white border-b border-red-600 pb-1 hover:text-red-600 transition-colors duration-300 w-max"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Connection points for the red lines */}
              <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full border-2 border-red-600 bg-black hidden md:block"></div>
              <div className="absolute -right-2 top-1/2 w-4 h-4 rounded-full border-2 border-red-600 bg-black hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* Additional connecting lines between cards (visible on larger screens) */}
        <div className="hidden md:block">
        </div>
      </div>
    </div>
  );
}


export function ExpertiseCardsHover() {
  // Assumiamo che expertiseAreas sia disponibile globalmente

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">Le nostre <span className="text-red-600">Expertise</span></h2>
        <p className="text-gray-400 mb-12">Scopri le competenze di ST Engineering Antycip</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area) => (
            <ExpertiseCard1 key={area.id} expertise={area} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExpertiseCard1({ expertise }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg h-64 transition-all duration-500 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Immagine di sfondo con overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
      </div>

      {/* Contenuto */}
      <div className="relative h-full p-6 flex flex-col justify-between z-10">
        <h3 className="text-2xl font-bold text-white">{expertise.title}</h3>

        <div className={`transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-300 text-sm mb-4">{expertise.description}</p>
        </div>

        <div className="flex items-center text-red-600 hover:text-red-500 transition">
          <span className="font-medium">Scopri di più</span>
          <ChevronRight size={20} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export function ExpertiseTabSlider() {
  const [activeTab, setActiveTab] = useState(0);

  // Assumiamo che expertiseAreas sia disponibile globalmente

  return (
    <div className="w-full bg-white text-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab navigation */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-red-600">Expertise</span> Areas
            </h2>
            <div className="flex flex-col gap-2">
              {expertiseAreas.map((area, index) => (
                <button
                  key={area.id}
                  className={`text-left p-4 rounded-md transition-all ${
                    activeTab === index 
                      ? 'bg-red-600 text-white font-medium shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="md:w-2/3 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            {expertiseAreas[activeTab] && (
              <div className="h-full flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-black">
                  {/* Placeholder per l'immagine */}
                  <div className="h-64 md:h-full flex items-center justify-center bg-gradient-to-br from-black to-gray-800">
                    <img 
                      src={expertiseAreas[activeTab].image} 
                      alt="Expertise Area" 
                      className="w-48 h-48 rounded-full object-cover opacity-75" 
                    />
                  </div>

                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{expertiseAreas[activeTab].title}</h3>
                    <p className="text-gray-600">{expertiseAreas[activeTab].description}</p>
                  </div>
                  <div className="mt-6">
                    <a href={expertiseAreas[activeTab].link} className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group">
                      Approfondisci
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export  function ExpertiseHorizontalTimeline1() {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Funzioni per scorrere orizzontalmente
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft + 300);
    }
  };

  // Assumiamo che expertiseAreas sia disponibile globalmente

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 px-4">
          <h2 className="text-4xl font-bold">
            ST Engineering Antycip <span className="text-red-600">Expertise</span>
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Timeline container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar pb-8 px-4 gap-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseAreas.map((area, index) => (
            <div 
              key={area.id} 
              className="min-w-64 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header with number indicator */}
              <div className="h-2 bg-red-600"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-red-600">{(index + 1).toString().padStart(2, '0')}</span>
                  <div className="w-8 h-8 rounded-full bg-black"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{area.description}</p>
                <a 
                  href={area.link} 
                  className="flex items-center mt-4 text-sm font-medium text-black hover:text-red-600 transition"
                >
                  Scopri l'expertise
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline track */}
        <div className="mt-2 px-4">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((scrollPosition / 1000) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export  function ExpertiseHorizontalTimeline2() {
const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft + 300);
    }
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 px-4">
          <h2 className="text-4xl font-bold">
            ST Engineering Antycip <span className="text-red-600">Expertise</span>
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 rounded-full bg-gray-100 text-black hover:bg-red-600 hover:text-white transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Timeline container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar pb-8 px-4 gap-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseAreas.map((area, index) => (
            <div 
              key={area.id} 
              className="relative min-w-64 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-50" 
                style={{ backgroundImage: `url(${area.image})` }}
              ></div>

              {/* Overlay content */}
              <div className="relative z-10 p-6 flex flex-col flex-grow backdrop-blur-sm rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{area.description}</p>
                <a 
                  href={area.link} 
                  className="flex items-center mt-4 text-sm font-medium text-black hover:text-red-600 transition"
                >
                  Scopri l'expertise
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline track */}
        <div className="mt-2 px-4">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((scrollPosition / 1000) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}