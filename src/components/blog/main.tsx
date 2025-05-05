"use client"


let articles = [
    {
      "href": "https://steantycip.com/blog/why-is-scenario-based-training-important-for-military-aviation/",
      "title": "Why is scenario-based training important for military aviation?",
      "tags": ["military", "training", "aviation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/the-use-of-virtual-reality-vr-in-the-military-and-defence-sector/",
      "title": "The use of virtual reality (VR) in the military and defence sector",
      "tags": ["military", "VR", "defense"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/how-is-virtual-reality-vr-used-in-air-combat-training/",
      "title": "How is Virtual Reality (VR) Used in Air Combat Training?",
      "tags": ["military", "VR", "training", "aviation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/advantages-for-the-military-of-using-modelling-and-simulation-software/",
      "title": "Advantages for the military of using modelling and simulation software",
      "tags": ["military", "simulation", "training"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/news/the-role-of-virtual-reality-vr-in-military-planning/",
      "title": "The role of virtual reality (VR) in military planning",
      "tags": ["military", "VR", "planning"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/ai-powered-cybersecurity-defence/",
      "title": "Is 2024 the Year of AI-powered Cybersecurity Defence?",
      "tags": ["AI", "cybersecurity", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/ai-industries-2024/",
      "title": "Where will AI have the most impact on industry in 2024?",
      "tags": ["AI", "technology", "trends"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/planetariums-an-outstanding-journey-through-the-universe/",
      "title": "Planetariums: An Outstanding Journey Through the Universe",
      "tags": ["education", "planetariums", "VR"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/why-use-direct-view-led-display-over-projection/",
      "title": "Direct view LED Displays vs. Projection",
      "tags": ["technology", "display", "visualization"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/what-is-vr-virtual-reality/",
      "title": "What is virtual reality?",
      "tags": ["VR", "technology", "basics"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/vr-ar-trends-to-look-out-for-in-2023/",
      "title": "VR & AR trends to look out for in 2023",
      "tags": ["VR", "AR", "trends"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/how-xr-is-used-in-the-retail-industry/",
      "title": "How XR is used in the retail industry",
      "tags": ["XR", "retail", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/top-sci-fi-military-technologies-in-use-today/",
      "title": "Top sci-fi military technologies in use today",
      "tags": ["military", "technology", "innovation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/synthetic-training-environments-explained/",
      "title": "Synthetic Training Environments Explained",
      "tags": ["military", "training", "simulation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/what-is-simulation-for-military-training/",
      "title": "What is simulation for military training?",
      "tags": ["military", "simulation", "training"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/antycip-spotlight-amir/",
      "title": "Meet Amir – Merging the Strategic and Technical",
      "tags": ["people", "interview", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/what-is-a-digital-twin/",
      "title": "What is a digital twin?",
      "tags": ["technology", "simulation", "innovation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/use-of-motion-platforms-for-driving-simulators/",
      "title": "Use of motion platforms for driving simulators",
      "tags": ["simulation", "driving", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/reasons-to-invest-simulation-training/",
      "title": "8 Reasons to Invest in Simulation Training",
      "tags": ["simulation", "training", "benefits"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/benefits-training-operators-construction-simulators/",
      "title": "The Benefits of Training Operators Using Construction Equipment Simulators",
      "tags": ["simulation", "training", "construction"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/heavy-equipment-simulators-vocational-training-schools/",
      "title": "The Role of Heavy Equipment Simulators in Vocational Training Schools",
      "tags": ["simulation", "training", "education"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/driving-simulation-for-driverless-automobiles/",
      "title": "Driving Simulation for Driverless Automobiles",
      "tags": ["simulation", "automotive", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/cost-benefit-analysis-of-simulation-based-operator-training/",
      "title": "Cost Benefit Analysis of Simulation-based Operator Training in Construction Industry...",
      "tags": ["simulation", "training", "construction"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/4-benefits-of-vr-in-automotive/",
      "title": "4 Benefits of VR in the Automotive Industry",
      "tags": ["VR", "automotive", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/touching-the-virtual-with-haptx-gloves/",
      "title": "Touching the virtual with HaptX gloves",
      "tags": ["VR", "technology", "innovation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/meet-benedetta-and-silvia-experts-in-3d-modeling/",
      "title": "Meet Benedetta and Silvia – Experts in 3D Modeling",
      "tags": ["people", "3D modeling", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/news/meta-reveals-latest-developments-with-vr-headset-prototypes/",
      "title": "Meta reveals latest developments with VR Headset Prototypes",
      "tags": ["VR", "technology", "hardware"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/what-is-motion-capture/",
      "title": "What is Motion Capture?",
      "tags": ["technology", "mocap", "animation"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/the-future-of-immersive-virtual-reality-in-education-and-training/",
      "title": "The future of immersive virtual reality in education and training",
      "tags": ["VR", "education", "training"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/25-years-of-simulation-and-vr-in-the-marketplace/",
      "title": "25 years of simulation and VR in the marketplace",
      "tags": ["VR", "simulation", "history"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/planetariums-astronomical-and-scientific-educational-tool/",
      "title": "Planetariums: An Astronomical and Scientific Educational Tool",
      "tags": ["planetariums", "education", "science"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/cyber-threats-to-communications-networks/",
      "title": "Cyber Threats to Communications Networks",
      "tags": ["cybersecurity", "technology", "networking"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/rd-training-achieving-an-immersive-experience-webinar/",
      "title": "Webinar – R&D & Training: Achieving An Immersive Experience!",
      "tags": ["webinar", "training", "R&D"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/mission-engineering-in-te/",
      "title": "Mission Engineering in T&E",
      "tags": ["engineering", "military", "testing"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/soluzioni-di-costruzione-simulazione-e-formazione/",
      "title": "Soluzioni di Costruzione, Simulazione e Formazione",
      "tags": ["construction", "simulation", "training"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    },
    {
      "href": "https://steantycip.com/blog/space-communication-what-you-need-to-know-2/",
      "title": "Space Communication – What You Need to Know",
      "tags": ["space", "communication", "technology"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/MicrosoftTeams-image-11.png"
    },
    {
      "href": "https://steantycip.com/blog/the-need-for-space-defence/",
      "title": "The Need for Space Defence",
      "tags": ["space", "defense", "military"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/06/ISR-Newsletter-Image-11-0-00-02-43.jpg"
    },
    {
      "href": "https://steantycip.com/blog/architecture-engineering-construction-embracing-virtual-reality/",
      "title": "Architecture, Engineering & Construction Embracing VR",
      "tags": ["VR", "construction", "architecture"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/05/IMG_1656-scaled-e1714588842780.jpg"
    },
    {
      "href": "https://steantycip.com/blog/how-ar-and-vr-will-fundamentally-change-the-automotive-industry/",
      "title": "How AR and VR Will Fundamentally Change the Automotive Industry?",
      "tags": ["AR", "VR", "automotive"],
      "imageUrl": "https://steantycip.com/wp-content/uploads/2024/03/8-scaled.jpg"
    }
]

import { useState, useEffect } from 'react';
import { ArrowUpRight, Filter, X } from 'lucide-react';

export function BlogVariant1() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  // Extract all unique tags from articles on component mount
  useEffect(() => {
    const tagSet = new Set();
    articles.forEach(article => {
      article.tags?.forEach(tag => tagSet.add(tag));
    });
    setAllTags(Array.from(tagSet));
    setFilteredArticles(articles);
  }, []);

  // Filter articles when selected tags change
  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => 
        selectedTags.some(tag => article.tags?.includes(tag))
      );
      setFilteredArticles(filtered);
    }
  }, [selectedTags]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Title Section */}
      <div className="mb-12 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
          <span className="text-white">Our</span> 
          <span className="text-red-600"> Insights</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
          Discover the latest technological breakthroughs and industry perspectives from our expert team.
        </p>
        <div className="absolute right-0 top-0 flex items-center">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 bg-gray-900 py-2 px-4 rounded-lg"
          >
            <Filter size={18} />
            <span>{selectedTags.length > 0 ? `Filters (${selectedTags.length})` : 'Filter'}</span>
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-80 bg-gray-900 p-6 z-50 transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Filter by Tags</h2>
          <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        {selectedTags.length > 0 && (
          <div className="mb-4">
            <button 
              onClick={clearFilters}
              className="text-sm text-red-500 hover:text-red-400 underline"
            >
              Clear all filters
            </button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                selectedTags.includes(tag) 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <div 
            key={index}
            className="group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-red-900/20"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Article Image with Overlay */}
            <div className="relative aspect-video overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70 z-10"
              />
              <img 
                src={article.imageUrl || "/api/placeholder/800/450"} 
                alt={article.title} 
                className={`w-full h-full object-cover transition-transform duration-700 ${activeCard === index ? 'scale-110' : 'scale-100'}`}
              />
              
              {/* Tags displayed on image */}
              <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
                {article.tags?.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="bg-red-600/80 text-white text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {(article.tags?.length > 2) && (
                  <span className="bg-gray-800/80 text-white text-xs px-2 py-1 rounded-full">
                    +{article.tags.length - 2}
                  </span>
                )}
              </div>
            </div>
            
            {/* Article Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
                {article.title}
              </h2>
              
              {/* Read More Link */}
              <div className="flex justify-between items-center mt-4">
                <a 
                  href={article.href} 
                  className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition-all duration-300 text-sm font-medium"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={16} className={`transform transition-transform duration-300 ${activeCard === index ? 'translate-x-1 -translate-y-1' : ''}`} />
                </a>
              </div>
            </div>
            
            {/* Animated Border */}
            <div className={`absolute inset-0 border-2 border-transparent rounded-lg transition-colors duration-700 ${activeCard === index ? 'border-red-600' : ''}`} />
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 mb-4">No articles match your selected filters</p>
          <button 
            onClick={clearFilters}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
}

import { Clock, Search, Tag, ChevronDown } from 'lucide-react';

export function BlogVariant2() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTagMenu, setShowTagMenu] = useState(false);
  const [highlightedArticle, setHighlightedArticle] = useState(null);
  const [animating, setAnimating] = useState(false);

  // Initialize data
  useEffect(() => {
    const uniqueTags = Array.from(new Set(articles.flatMap(article => article.tags || [])));
    setAllTags(uniqueTags);
    setFilteredArticles(articles);
    
    // Set the first article as highlighted initially
    if (articles.length > 0) {
      setHighlightedArticle(articles[0]);
    }
  }, []);

  // Handle filtering when tags or search term changes
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      let filtered = [...articles];
      
      // Filter by tags if any are selected
      if (selectedTags.length > 0) {
        filtered = filtered.filter(article => 
          selectedTags.some(tag => article.tags?.includes(tag))
        );
      }
      
      // Filter by search term if any
      if (searchTerm.trim() !== "") {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(article => 
          article.title.toLowerCase().includes(term) || 
          article.tags?.some(tag => tag.toLowerCase().includes(term))
        ); 
      }
      
      setFilteredArticles(filtered);
      setAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedTags, searchTerm]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
  };

  // Custom classes for masonry layout
  const getCardSize = (index) => {
    // Create a pattern for different card sizes
    switch (index % 5) {
      case 0: return "col-span-1 md:col-span-2 row-span-1";
      case 2: return "col-span-1 row-span-2";
      default: return "col-span-1 row-span-1";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 md:p-12">
      {/* Featured Article Section */}
      {highlightedArticle && (
        <div className="mb-16 relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
          <img 
            src={highlightedArticle.imageUrl || "/api/placeholder/1200/500"} 
            alt={highlightedArticle.title}
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {highlightedArticle.tags?.slice(0, 3).map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleTag(tag)}
                  className="bg-red-600/80 text-white text-xs px-3 py-1 rounded-full hover:bg-red-500 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-2xl">{highlightedArticle.title}</h2>
            <a 
              href={highlightedArticle.href} 
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg w-fit mt-4 hover:bg-gray-100 transition-all group"
            >
              <span>Read Featured Article</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      )}
      
      {/* Search and Filter Bar */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-white">Latest</span> 
          <span className="text-red-600"> Articles</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative flex-grow md:w-64">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
          
          {/* Tag Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowTagMenu(!showTagMenu)}
              className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              <Tag size={18} className="text-red-500" />
              <span>Tags</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${showTagMenu ? 'rotate-180' : ''}`} />
              {selectedTags.length > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs rounded-full h-5 min-w-5 flex items-center justify-center px-1">
                  {selectedTags.length}
                </span>
              )}
            </button>
            
            {showTagMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-40 p-3">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Filter by tags</h3>
                  {selectedTags.length > 0 && (
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-red-500 hover:text-red-400"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
                  {allTags.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleTag(tag)}
                      className={`px-2 py-1 rounded-md text-xs ${
                        selectedTags.includes(tag)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Articles Grid with Masonry Layout */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${animating ? 'opacity-50' : 'opacity-100'}`}>
        {filteredArticles.map((article, index) => (
          <div 
            key={index}
            className={`${getCardSize(index)} group bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-red-900 transition-all duration-500 flex flex-col`}
          >
            {/* Article Image */}
            <div className="relative overflow-hidden">
              <img
                src={article.imageUrl || "/api/placeholder/600/400"}
                alt={article.title}
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Red accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            
            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags?.slice(0, 2).map((tag, idx) => (
                  <span key={idx} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">{article.title}</h3>
              
              <div className="mt-auto pt-4 flex justify-between items-center">
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>5 min read</span>
                </div>
                
                <a
                  href={article.href}
                  className="flex items-center gap-1 text-red-500 font-medium group-hover:gap-2 transition-all"
                >
                  <span>Read</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
            <Search size={24} className="text-gray-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No articles found</h3>
          <p className="text-gray-400 mb-6 max-w-md">We couldn't find any articles matching your current filters or search criteria.</p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
      
      {/* Load More Button - for visual completion */}
      {filteredArticles.length > 0 && (
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-gray-700 rounded-lg hover:border-red-600 text-gray-300 hover:text-white transition-all">
            Load more articles
          </button>
        </div>
      )}
    </main>
  );
}

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, BarChart3 } from 'lucide-react';

export function BlogVariant3() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
  const slideRef = useRef(null);

  // Initialize data
  useEffect(() => {
    // Extract all unique tags from articles
    const tagSet = new Set();
    articles.forEach(article => {
      article.tags?.forEach(tag => tagSet.add(tag));
    });
    setAllTags(Array.from(tagSet));
    setFilteredArticles(articles);
    setVisibleArticles(articles);
  }, []);

  // Handle filtering when tags change
  useEffect(() => {
    setIsAnimating(true);
    
    // Apply tag filters
    let filtered = [...articles];
    if (selectedTags.length > 0) {
      filtered = filtered.filter(article => 
        selectedTags.some(tag => article.tags?.includes(tag))
      );
    }
    
    setFilterCount(selectedTags.length);
    setFilteredArticles(filtered);
    
    // Reset active index when filters change
    setActiveIndex(0);
    
    // Animate transition
    setTimeout(() => {
      setVisibleArticles(filtered);
      setIsAnimating(false);
    }, 300);
  }, [selectedTags]);

  // Handle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  // Carousel navigation
  const goToNext = () => {
    if (activeIndex < filteredArticles.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
        setIsAnimating(false);
      }, 200);
    } else {
      // Loop back to the start
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(0);
        setIsAnimating(false);
      }, 200);
    }
  };

  const goToPrev = () => {
    if (activeIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - 1);
        setIsAnimating(false);
      }, 200);
    } else {
      // Loop to the end
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(filteredArticles.length - 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  // Generate a dynamic background gradient based on article index
  const getBackgroundGradient = (index) => {
    const hue1 = (index * 25) % 360;
    const hue2 = (hue1 + 180) % 360;
    return `radial-gradient(circle at top right, hsla(${hue1}, 70%, 50%, 0.1), transparent 70%), 
            radial-gradient(circle at bottom left, hsla(${hue2}, 70%, 50%, 0.1), transparent 70%)`;
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden">
      {/* Geometric Background Elements - Tech Inspired */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] opacity-20 bg-[size:20px_20px]"></div>
        
        {/* Abstract Line Elements */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="gray" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="gray" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Header with Title and Controls */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
            <span className="text-white">Tech</span>
            <span className="text-red-600">Blog</span>
            <div className="ml-4 h-6 w-px bg-gray-700"></div>
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Stay updated with our latest technological innovations and industry trends.
          </p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* View Toggle */}
          {false && <div className="flex gap-2 bg-gray-900 rounded-lg p-1">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded-md transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <BarChart3 size={20} />
            </button>
            <button 
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-1 rounded-md transition-colors ${
                viewMode === 'carousel' 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            > 
              <div className="flex gap-1">
                <div className="w-1 h-5 bg-current rounded-full"></div>
                <div className="w-1 h-5 bg-current rounded-full"></div>
                <div className="w-1 h-5 bg-current rounded-full"></div>
              </div>
            </button>
          </div>}
          
          {/* Filter Button */}
          <button 
            onClick={() => setIsFilterDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
            {filterCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 bg-red-600 text-white text-xs rounded-full">
                {filterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-80 bg-gray-900 shadow-2xl p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isFilterDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Filter Articles</h2>
          <button 
            onClick={() => setIsFilterDrawerOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
        
        {selectedTags.length > 0 && (
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm text-gray-400">
              {selectedTags.length} {selectedTags.length === 1 ? 'filter' : 'filters'} applied
            </span>
            <button 
              onClick={clearFilters}
              className="text-red-500 text-sm hover:text-red-400 transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-sm rounded-md transition-all duration-300 ${
                selectedTags.includes(tag)
                  ? 'bg-red-600 text-white shadow-lg shadow-red-700/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={() => setIsFilterDrawerOpen(false)}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
            {visibleArticles.map((article, index) => (
              <div 
                key={index} 
                className="relative bg-gray-900 bg-opacity-70 backdrop-blur-sm rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-red-900/10 transition-all duration-500"
                style={{ background: `linear-gradient(to bottom, #111, #0a0a0a), ${getBackgroundGradient(index)}` }}
              >
                {/* Red Line Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.imageUrl || "/api/placeholder/600/300"} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  
                  {/* Tags overlaid on image */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {article.tags?.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-black bg-opacity-50 text-xs text-white rounded-md border-l-2 border-red-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h3>
                  
                  <a 
                    href={article.href}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors mt-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Read Article</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                {/* Interactive highlight border */}
                <div className="absolute inset-0 border border-gray-800 group-hover:border-red-900/50 rounded-lg pointer-events-none transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        )}
        
        {/* Carousel View */}
        {viewMode === 'carousel' && (
          <div className="mt-4 relative">
            {/* Current Article */}
            <div 
              ref={slideRef}
              className={`relative transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              {filteredArticles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-900 rounded-xl overflow-hidden">
                  {/* Featured Image */}
                  <div className="h-64 md:h-auto md:col-span-1 overflow-hidden relative">
                    <img 
                      src={filteredArticles[activeIndex].imageUrl || "/api/placeholder/600/800"} 
                      alt={filteredArticles[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent md:bg-gradient-to-b opacity-70"></div>
                    
                    {/* Index Counter */}
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 px-3 py-1 rounded-full text-sm">
                      {activeIndex + 1} / {filteredArticles.length}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 md:col-span-2 flex flex-col justify-between" style={{ background: getBackgroundGradient(activeIndex) }}>
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {filteredArticles[activeIndex].tags?.map((tag, idx) => (
                          <span key={idx} className="bg-red-600/20 text-red-500 text-sm px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-6 text-white">
                        {filteredArticles[activeIndex].title}
                      </h2>
                      
                      <p className="text-gray-400 mb-6">
                        Explore our latest insights and technological breakthroughs in this featured article. 
                        Our team of experts shares valuable perspectives on industry trends and innovations.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <button 
                          onClick={goToPrev}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={goToNext}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                      
                      <a 
                        href={filteredArticles[activeIndex].href}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Article Navigation - Bottom Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {filteredArticles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 200);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'bg-red-600 w-6' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to article ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Empty State */}
        {visibleArticles.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mb-6">
              <Filter size={32} className="text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No matching articles</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              There are no articles that match your current filter selection.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Footer - Simple Stats */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-gray-400 text-sm">
        <div>
          Showing {visibleArticles.length} of {articles.length} articles
        </div>
        {selectedTags.length > 0 && (
          <button 
            onClick={clearFilters}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            Clear all filters
          </button>
        )}
      </div>
    </main>
  );
}