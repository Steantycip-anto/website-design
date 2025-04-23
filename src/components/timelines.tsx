import { Button } from "../utils"
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ArrowUpRight } from 'lucide-react';

export const Timeline1 = () => {
  const milestones = [
    { year: 1997, content: "Antycip founded, specializing in development tools for real-time embedded applications" },
    { year: 2004, content: "European expansion with new office in Italy" },
    { year: 2008, content: "Joined ST Engineering, securing first major contract with Leonardo" },
    { year: 2017, content: "Opening of customer demo centres across Europe" },
    { year: 2025, content: "Leading innovation in simulation, VR, and immersive solutions" }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-1 w-2 h-full bg-red-600"></div>

          {/* Timeline items */}
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative mb-12 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="font-bold text-red-600 text-xl mb-2">{milestone.year}</div>
                <div className="text-gray-700">{milestone.content}</div>
              </div>

              {/* Circle marker */}
              <div className="absolute left-1/2 -ml-3 w-6 h-6 bg-white border-4 border-red-600 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button text="Our Full Story" />
        </div>
      </div>
    </section>
  );
};

export function VerticalTimeline() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);

  const timelineEvents = [
    {
      id: 1,
      year: '2005',
      title: 'Company Foundation',
      description: 'Our company was founded with a vision to revolutionize the industry through innovative technology solutions.',
      icon: '🚀'
    },
    {
      id: 2,
      year: '2008',
      title: 'First Major Product Launch',
      description: 'Released our flagship product, setting new standards in the market and gaining immediate recognition.',
      icon: '💡'
    },
    {
      id: 3,
      year: '2012',
      title: 'International Expansion',
      description: 'Opened our first international offices in Europe and Asia, establishing a global presence.',
      icon: '🌍'
    },
    {
      id: 4,
      year: '2015',
      title: 'Innovation Award',
      description: 'Received prestigious industry recognition for our cutting-edge technological innovations.',
      icon: '🏆'
    },
    {
      id: 5,
      year: '2018',
      title: 'Strategic Partnership',
      description: 'Formed strategic alliance with key industry players to enhance our product offerings.',
      icon: '🤝'
    },
    {
      id: 6,
      year: '2023',
      title: 'Next-Gen Platform',
      description: 'Launched our next-generation platform, integrating AI and machine learning capabilities.',
      icon: '🔮'
    }
  ];

  useEffect(() => {
    // Animate timeline items into view one by one
    const animateEvents = async () => {
      for (let i = 0; i < timelineEvents.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setVisibleEvents(prev => [...prev, timelineEvents[i].id]);
      }
    };

    animateEvents();
  }, []);

  return (
    <section className="bg-gray-900 w-full">
      <div className="text-white py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleEvents.includes(event.id);

            return (
              <div
                key={event.id}
                className={`flex mb-16 md:mb-24 relative ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
              >
                {/* Timeline content */}
                <div className={`flex flex-col w-full md:w-1/2 ${isEven || window.innerWidth < 768 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                  <div
                    className={`bg-black p-6 rounded-lg border-l-4 border-red-600 shadow-lg hover:shadow-red-900/20 transition-all duration-300 ${activeEvent === event.id ? 'transform scale-105' : ''
                      }`}
                    onMouseEnter={() => setActiveEvent(event.id)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className={`absolute top-4 left-8 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-600/30 ${activeEvent === event.id ? 'scale-125' : ''
                  } transition-transform duration-300 text-lg md:left-1/2 md:transform md:-translate-x-1/2`}>
                  {event.icon}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
          >
            <span>View full company history</span>
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function HorizontalTimeline() {
  const scrollRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const timelineEvents = [
    {
      id: 1,
      year: '2005',
      title: 'Company Foundation',
      description: 'Starting with just 5 employees in a small office, we began our journey to transform the industry.',
      achievement: 'Secured initial seed funding'
    },
    {
      id: 2,
      year: '2008',
      title: 'First Product Launch',
      description: 'After years of R&D, we launched our first product that quickly gained traction in the market.',
      achievement: '10,000 users in first month'
    },
    {
      id: 3,
      year: '2012',
      title: 'Global Expansion',
      description: 'Expanding our reach beyond national borders, we entered international markets.',
      achievement: 'Opened offices in 3 continents'
    },
    {
      id: 4,
      year: '2015',
      title: 'Major Acquisition',
      description: 'Acquired a leading competitor, significantly enhancing our technology portfolio.',
      achievement: 'Doubled our customer base'
    },
    {
      id: 5,
      year: '2018',
      title: 'IPO Milestone',
      description: 'Successfully launched our initial public offering, marking a new chapter in our growth.',
      achievement: 'Raised $100M in capital'
    },
    {
      id: 6,
      year: '2023',
      title: 'Technological Breakthrough',
      description: 'Introduced groundbreaking technology that redefined standards in the industry.',
      achievement: 'Awarded 15 patents'
    }
  ];

  useEffect(() => {
    // Auto-select first event
    if (timelineEvents.length > 0) {
      setSelectedEvent(timelineEvents[0].id);
    }

    // Start animation
    setIsAnimating(true);

    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const selectEvent = (id) => {
    setIsAnimating(true);
    setSelectedEvent(id);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const selectedEventData = timelineEvents.find(event => event.id === selectedEvent);

  return (
    <div className="bg-black text-white py-12 px-4 w-full">
      <h2 className="text-3xl font-bold mb-12 text-center">Company Timeline</h2>

      <div className="relative">
        {/* Timeline scroll controls */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-red-600 transition-colors"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-red-600 transition-colors"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </button>

        {/* Timeline scroll container */}
        <div
          ref={scrollRef}
          className="flex justify-center overflow-x-auto scrollbar-hide py-6 px-12 space-x-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Timeline line */}
          <div className="absolute left-12 right-12 top-16 h-1 bg-gray-700 z-0"></div>

          {/* Timeline events */}
          {timelineEvents.map((event) => (
            <div
              key={event.id}
              className={`flex flex-col items-center min-w-32 cursor-pointer ${selectedEvent === event.id ? '' : 'opacity-50'
                } transition-opacity duration-300`}
              onClick={() => selectEvent(event.id)}
            >
              {/* Timeline node */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mb-4 transition-all duration-300 ${selectedEvent === event.id
                  ? 'bg-red-600 scale-125 shadow-lg shadow-red-600/30'
                  : 'bg-gray-800 hover:bg-gray-700'
                  }`}
              >
                <span className="font-bold">{event.year}</span>
              </div>

              <h4 className="text-sm font-medium text-center">{event.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Selected event details */}
      {selectedEventData && (
        <div
          className={`mt-12 max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg border-l-4 border-red-600 ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            } transition-all duration-500`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedEventData.title}</h3>
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                {selectedEventData.year}
              </span>
            </div>
            <div className="bg-gray-800 px-3 py-1 rounded text-sm">
              {selectedEventData.achievement}
            </div>
          </div>

          <p className="text-gray-300 text-lg">{selectedEventData.description}</p>
        </div>
      )}
    </div>
  );
}

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const timelineEvents = [
    {
      id: 1,
      year: '2005',
      title: 'Birth of Innovation',
      description: 'Our journey began with a vision to redefine the technological landscape.',
      stats: [
        { label: 'Team size', value: '5' },
        { label: 'Funding', value: '$1M' }
      ]
    },
    {
      id: 2,
      year: '2009',
      title: 'First Breakthrough',
      description: 'Released our pioneering technology that changed the way people interact with digital systems.',
      stats: [
        { label: 'Team size', value: '25' },
        { label: 'Customers', value: '150+' }
      ]
    },
    {
      id: 3,
      year: '2014',
      title: 'Market Revolution',
      description: 'Disrupted the market with our flagship product, establishing ourselves as industry leaders.',
      stats: [
        { label: 'Team size', value: '100' },
        { label: 'Market share', value: '15%' }
      ]
    },
    {
      id: 4,
      year: '2018',
      title: 'Global Recognition',
      description: 'Expanded operations worldwide and received multiple industry awards for excellence.',
      stats: [
        { label: 'Countries', value: '27' },
        { label: 'Awards', value: '12' }
      ]
    },
    {
      id: 5,
      year: '2023',
      title: 'Future Forward',
      description: 'Introduced AI-powered solutions that have set new benchmarks for the entire industry.',
      stats: [
        { label: 'Team size', value: '500+' },
        { label: 'Market cap', value: '$2B' }
      ]
    }
  ];

  useEffect(() => {
    // Initialize animation
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);

    // Auto-rotate through timeline events
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === timelineEvents.length - 1 ? 0 : prev + 1));
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(animationTimer);
    };
  }, [timelineEvents.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const activeEvent = timelineEvents[activeIndex];

  return (
    <div className="bg-gray-900 text-white p-6 md:p-12 w-full">
      <h2 className="text-3xl font-bold mb-16 text-center">Our Evolution</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Timeline Visualization */}
          <div className="order-2 md:order-1">
            <div className="relative h-96">
              {/* 3D perspective effect for cards */}
              {timelineEvents.map((event, index) => {
                const isCurrent = index === activeIndex;
                const isPast = index < activeIndex;
                const isFuture = index > activeIndex;

                let transformClass = 'opacity-0 scale-90';
                let zIndex = 0;

                if (isCurrent) {
                  transformClass = 'opacity-100 scale-100 z-30';
                  zIndex = 30;
                } else if (isPast) {
                  transformClass = `opacity-40 scale-90 -translate-x-16 -translate-y-8 z-${20 - index * 5}`;
                  zIndex = 20 - index * 5;
                } else if (isFuture) {
                  transformClass = `opacity-40 scale-90 translate-x-16 translate-y-8 z-${20 - (timelineEvents.length - index) * 5}`;
                  zIndex = 20 - (timelineEvents.length - index) * 5;
                }

                return (
                  <div
                    key={event.id}
                    className={`absolute inset-0 bg-black rounded-xl p-6 border-l-4 border-red-600 shadow-xl transition-all duration-700 ${transformClass} ${isAnimating && isCurrent ? 'animate-pulse' : ''
                      }`}
                    style={{
                      zIndex,
                      transformStyle: 'preserve-3d',
                      perspective: '1000px'
                    }}
                  >
                    <div className="overflow-hidden mb-4">
                      <span className="inline-block px-4 py-1 bg-red-600 text-white font-bold rounded-full mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {event.stats.map((stat, i) => (
                        <div key={i} className="bg-gray-800 p-3 rounded">
                          <p className="text-gray-400 text-xs">{stat.label}</p>
                          <p className="text-xl font-bold">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline controls */}
            <div className="flex justify-center space-x-3 mt-8">
              {timelineEvents.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-red-600 w-6' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`View event ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Timeline Narrative */}
          <div className="order-1 md:order-2">
            <div
              className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
                }`}
            >
              <div className="relative mb-6">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-red-600"></div>
                <h3 className="text-4xl font-bold mb-3 pl-4">{activeEvent.year}</h3>
                <h4 className="text-2xl font-bold mb-4 pl-4">{activeEvent.title}</h4>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {activeEvent.description}
              </p>

              <p className="text-lg mb-8">
                During this pivotal year, we {activeIndex === 0 ? 'began' : 'continued'} our journey toward technological excellence.
                Our team of {activeEvent.stats[0].value} professionals worked tirelessly to push the boundaries
                of what's possible in our industry.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 group"
              >
                <span>Read the full story</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}