import { useState, useEffect } from 'react';

export function GlobalProjectsMap() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    { id: 1, country: "Italy", projects: 24, flagEmoji: "🇮🇹",
      description: "Headquarters with technological innovation and design projects" },
    { id: 2, country: "Germany", projects: 18, flagEmoji: "🇩🇪",
      description: "Focus on precision engineering and industrial automation" },
    { id: 3, country: "United States", projects: 15, flagEmoji: "🇺🇸",
      description: "Hub for emerging technologies and artificial intelligence" },
    { id: 4, country: "Japan", projects: 12, flagEmoji: "🇯🇵",
      description: "Development of consumer electronics and advanced robotics" },
    { id: 5, country: "Singapore", projects: 8, flagEmoji: "🇸🇬",
      description: "Center for fintech and smart city solutions" },
  ];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="flex flex-col items-center w-full bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-8 text-red-600">La Our Global Presence</h2>
      
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-full max-w-4xl">
          <img 
            src="/api/placeholder/800/400" 
            alt="World Map Outline" 
            className="w-full opacity-30"
          />
          
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer 
                         transform transition-all duration-500 hover:scale-125 
                         ${selectedCountry === project.id ? 'bg-red-600 scale-125' : 'bg-gray-700'}`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              onClick={() => setSelectedCountry(project.id)}
            >
              <span className="text-lg">{project.flagEmoji}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 w-full max-w-4xl bg-gray-900 rounded-lg p-6">
          {selectedCountry ? (
            <div className="flex items-start space-x-4">
              <div className="text-4xl">{projects.find(p => p.id === selectedCountry).flagEmoji}</div>
              <div>
                <h3 className="text-2xl font-bold text-red-500">{projects.find(p => p.id === selectedCountry).country}</h3>
                <div className="flex items-center mt-2">
                  <div className="h-2 bg-red-600 rounded-full" style={{ width: `${projects.find(p => p.id === selectedCountry).projects * 10}px` }}></div>
                  <span className="ml-2 text-gray-300">{projects.find(p => p.id === selectedCountry).projects} progetti</span>
                </div>
                <p className="mt-2 text-gray-400">{projects.find(p => p.id === selectedCountry).description}</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">Select a country on the map to view project details</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function RotatingGlobeProjects() {
  const [rotation, setRotation] = useState(0);
  const [hoverCountry, setHoverCountry] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const projectCountries = [
    { id: 1, name: "Italy", projects: 24, position: 0 },
    { id: 2, name: "Germany", projects: 18, position: 45 },
    { id: 3, name: "United States", projects: 15, position: 90 },
    { id: 4, name: "Japan", projects: 12, position: 180 },
    { id: 5, name: "Singapore", projects: 8, position: 225 },
    { id: 6, name: "Brazil", projects: 6, position: 270 },
    { id: 7, name: "Australia", projects: 5, position: 315 }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(rotationInterval);
  }, []);
  
  const getProjectItemStyle = (position) => {
    const adjustedPosition = (position + rotation) % 360;
    const radians = (adjustedPosition * Math.PI) / 180;
    const radius = 150;
    
    // Calculate position on the "orbit"
    const x = Math.cos(radians) * radius;
    const z = Math.sin(radians) * radius;
    
    // Calculate scale and opacity based on z position (depth)
    const scale = (z + radius) / (radius * 2) * 0.5 + 0.5;
    const opacity = (z + radius) / (radius * 2) * 0.8 + 0.2;
    
    return {
      transform: `translateX(${x}px) scale(${scale})`,
      opacity: opacity,
      zIndex: Math.round(z + 100)
    };
  };
  
  return (
    <div className="flex flex-col items-center w-full bg-black text-white p-8 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-red-600">Global Projects</h2>
      
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
        <div className="relative h-80 flex items-center justify-center mb-12">
          {/* Globe center */}
          <div className="absolute w-64 h-64 rounded-full bg-gray-900 opacity-30"></div>
          <div className="absolute w-64 h-64 rounded-full border-4 border-gray-800 opacity-40"></div>
          
          {/* Orbit path */}
          <div className="absolute w-80 h-80 rounded-full border border-gray-700 opacity-30"></div>
          
          {projectCountries.map((country) => (
            <div
              key={country.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-300"
              style={getProjectItemStyle(country.position)}
              onMouseEnter={() => setHoverCountry(country.id)}
              onMouseLeave={() => setHoverCountry(null)}
            >
              <div className={`w-6 h-6 rounded-full ${hoverCountry === country.id ? 'bg-red-600' : 'bg-gray-600'} flex items-center justify-center cursor-pointer`}>
                <span className="text-xs font-bold">{country.projects}</span>
              </div>
              <div className={`mt-2 text-sm font-medium transition-all duration-300 ${hoverCountry === country.id ? 'text-white' : 'text-gray-400'}`}>
                {country.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
          {projectCountries.map((country) => (
            <div 
              key={country.id} 
              className={`p-4 rounded-lg transition-all duration-300 ${hoverCountry === country.id ? 'bg-red-900 bg-opacity-30' : 'bg-gray-900'}`}
            >
              <h3 className="text-lg font-bold">{country.name}</h3>
              <div className="flex items-center mt-2">
                <div className="h-1 bg-red-600 rounded-full" style={{ width: `${country.projects * 4}px` }}></div>
                <span className="ml-2 text-sm text-gray-400">{country.projects}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DynamicCountryCards() {
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  
  const countries = [
    {
      id: 1,
      name: "Italy",
      projects: 42,
      highlights: [
        "Headquarters in Milan",
        "24 projects completed",
        "Specialization in industrial design",
        "Main R&D center"
      ],
      stats: { innovation: 95, sustainability: 88, technology: 92 }
    },
    {
      id: 2,
      name: "Germany",
      projects: 36,
      highlights: [
        "Offices in Berlin and Munich",
        "18 projects completed",
        "Focus on precision engineering",
        "Collaborations with technical universities"
      ],
      stats: { innovation: 90, sustainability: 94, technology: 88 }
    },
    {
      id: 3,
      name: "United States",
      projects: 29,
      highlights: [
        "Presence in New York and San Francisco",
        "15 projects completed",
        "Advanced AI solutions",
        "Technological startup incubator"
      ],
      stats: { innovation: 96, sustainability: 82, technology: 98 }
    },
    {
      id: 4,
      name: "Japan",
      projects: 24,
      highlights: [
        "Main office in Tokyo",
        "12 projects completed",
        "Robotics and automation",
        "Collaborations with electronics manufacturers"
      ],
      stats: { innovation: 93, sustainability: 90, technology: 96 }
    },
    {
      id: 5,
      name: "Singapore",
      projects: 18,
      highlights: [
        "Southeast Asian hub",
        "8 projects completed",
        "Fintech and smart city",
        "Regional innovation center"
      ],
      stats: { innovation: 91, sustainability: 96, technology: 90 }
    }
  ];
  
  useEffect(() => {
    setAnimateIn(true);
  }, []);
  
  return (
    <div className="w-full bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-12 text-center text-red-600">Global Innovation Network</h2>
      
      <div className={`transition-all duration-1000 ${animateIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {countries.map((country, index) => (
            <div 
              key={country.id}
              className={`relative w-40 h-40 md:w-48 md:h-48 cursor-pointer transition-all duration-500 transform 
                         ${selectedCountry === country.id ? 'scale-110' : 'hover:scale-105'}`}
              onClick={() => setSelectedCountry(country.id === selectedCountry ? null : country.id)}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: animateIn ? 'fadeInUp 0.8s ease forwards' : 'none'
              }}
            >
              <div className={`absolute inset-0 rounded-lg flex flex-col items-center justify-center p-4 transition-all duration-500
                              ${selectedCountry === country.id ? 'bg-red-900' : 'bg-gray-900'}`}>
                <div className="text-xl font-bold mb-2">{country.name}</div>
                <div className="text-3xl font-bold text-red-500">{country.projects}</div>
                <div className="text-sm text-gray-400">projects</div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-red-600 transition-all duration-500
                                ${selectedCountry === country.id ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedCountry && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-900 rounded-lg p-6 animate-fadeIn">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">{countries.find(c => c.id === selectedCountry).name}</h3>
              <ul className="space-y-2">
                {countries.find(c => c.id === selectedCountry).highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Performance</h4>
              {Object.entries(countries.find(c => c.id === selectedCountry).stats).map(([key, value], index) => (
                <div key={key} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{key}</span>
                    <span className="text-red-500">{value}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${value}%`, animationDelay: `${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}