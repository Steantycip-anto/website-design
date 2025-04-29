import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Plus, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects, additionalProjects } from '@/lib/data';

export function ProjectsSection1() {
    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    // Handle scroll buttons
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 600;
            const newScrollPosition = direction === 'left'
                ? Math.max(0, scrollPosition - scrollAmount)
                : Math.min(maxScroll, scrollPosition + scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });

            setScrollPosition(newScrollPosition);
        }
    };

    // Update scroll position on container scroll
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            setScrollPosition(scrollContainerRef.current.scrollLeft);
            setMaxScroll(
                scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
            );
        }
    };

    // Set up scroll observer on component mount
    React.useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            // Calculate initial max scroll
            setMaxScroll(scrollContainer.scrollWidth - scrollContainer.clientWidth);

            return () => {
                scrollContainer.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className="bg-black text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold relative">
                        Our Projects
                        <span className="block h-1 w-16 bg-red-600 mt-4"></span>
                    </h2>

                    {/* Scroll Controls */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={scrollPosition <= 0}
                            className={`p-2 rounded-full ${scrollPosition <= 0 ? 'bg-gray-800 text-gray-600' : 'bg-gray-800 text-white hover:bg-red-600'} transition-colors`}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={scrollPosition >= maxScroll}
                            className={`p-2 rounded-full ${scrollPosition >= maxScroll ? 'bg-gray-800 text-gray-600' : 'bg-gray-800 text-white hover:bg-red-600'} transition-colors`}
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Scrollable Project Cards */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg group"
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-0 left-0 m-4">
                                    <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                            </div>
                            <div className='absolute bottom-6 left-6'>
                                <a
                                    href="#"
                                    className={`inline-flex items-center text-white ${hoveredCard === project.id ? 'bg-red-600' : 'bg-gray-800'} px-4 py-2 rounded-md transition-colors`}
                                >
                                    <span>View Project</span>
                                    <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* "And Others" Card */}
                    <div className="flex-shrink-0 w-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                                <span className="text-red-600 mr-2">
                                    <Plus size={20} />
                                </span>
                                And Others
                            </h3>

                            <div className="mb-6 flex-grow">
                                <ul className="space-y-3">
                                    {additionalProjects.slice(0, 4).map((project) => (
                                        <li key={project.id} className="flex justify-between items-center border-b border-gray-800 pb-2">
                                            <span className="font-medium">{project.name}</span>
                                            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#"
                                className="w-full bg-red-600 text-center py-3 rounded-md text-white font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                            >
                                View All Projects
                                <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsSection2() {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeProject, setActiveProject] = useState(null);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

    // Calculate scroll progress
    const handleScroll = () => {
        if (scrollRef.current) {
            const element = scrollRef.current;
            const scrollLeft = element.scrollLeft;
            const scrollWidth = element.scrollWidth - element.clientWidth;
            const progress = (scrollLeft / scrollWidth) * 100;
            setScrollProgress(progress);
        }
    };

    // Handle auto-scrolling
    useEffect(() => {
        let scrollInterval;

        if (!isAutoScrollPaused) {
            scrollInterval = setInterval(() => {
                if (scrollRef.current) {
                    const element = scrollRef.current;
                    const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 10;

                    if (isAtEnd) {
                        element.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        element.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                }
            }, 5000);
        }

        return () => clearInterval(scrollInterval);
    }, [isAutoScrollPaused]);

    // Set up scroll event listener
    useEffect(() => {
        const element = scrollRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => element.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
        setIsAutoScrollPaused(true);
    };

    const handleMouseLeave = () => {
        setIsAutoScrollPaused(false);
    };

    return (
        <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-600 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-red-600 opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Section header with progress bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="text-4xl font-bold">
                            <span className="text-red-600">Latest</span> Projects
                        </h2>

                        <a href="#" className="text-gray-400 hover:text-white flex items-center gap-1 group">
                            <span>All projects</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-red-600 transition-all duration-300"
                            style={{ width: `${scrollProgress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Projects horizontal scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 scroll-smooth scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Project cards */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-shrink-0 w-80 group"
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="relative overflow-hidden h-64 rounded-lg perspective-card">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay that appears on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="text-red-500 text-sm font-semibold mb-1">{project.category}</span>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                    <a href="#" className="inline-flex items-center text-white bg-red-600 px-4 py-2 rounded-md">
                                        <span>View Project</span>
                                        <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </div>

                                {/* Year tag */}
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium">
                                    {project.year}
                                </div>
                            </div>

                            {/* Card title visible when not hovered */}
                            <div className={`mt-4 transition-opacity duration-300 ${activeProject === project.id ? 'opacity-0' : 'opacity-100'}`}>
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-400 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}

                    {/* "And Others" card */}
                    <div className="flex-shrink-0 w-80 bg-black rounded-lg overflow-hidden relative group">
                        <div className="p-6 h-64 flex flex-col">
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                <span className="text-red-600">And</span> Others
                            </h3>

                            <div className="flex-grow">
                                <div className="grid grid-cols-2 gap-4">
                                    {additionalProjects.slice(0, 6).map((project, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="text-sm transition-colors hover:text-red-500 flex flex-col"
                                        >
                                            <span className="font-medium truncate">{project.name}</span>
                                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                                                <span>{project.category}</span>
                                                <span>{project.year}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 text-center pt-3 border-t border-gray-800">
                                <a
                                    href="#"
                                    className="flex items-center justify-center gap-2 text-red-500 hover:text-red-400 transition-colors group/btn w-full"
                                >
                                    <span>View All Projects</span>
                                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Hover overlay for "And Others" card */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="text-center w-full">
                                <p className="mb-4 text-gray-300">Discover our complete portfolio of {additionalProjects.length + projects.length}+ innovative projects</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center bg-red-600 text-white px-6 py-2 rounded-md"
                                >
                                    <span>Browse All</span>
                                    <ArrowRight size={16} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add some CSS for perspective effects */}
            <style jsx>{`
        .perspective-card {
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        
        .perspective-card:hover {
          transform: perspective(1000px) rotateY(-5deg) translateZ(10px);
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
        }
      `}</style>
        </div>
    );
}

export function ProjectsSection3() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    // Intersection Observer to detect when cards are visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.dataset.id]: entry.isIntersecting
                    }));

                    // Update active index for indicator dots
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveIndex(Number(entry.target.dataset.index));
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        const container = containerRef.current;
        if (container) {
            const children = container.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i].dataset) {
                    observer.observe(children[i]);
                }
            }
        }

        return () => {
            if (container) {
                const children = container.children;
                for (let i = 0; i < children.length; i++) {
                    if (children[i].dataset) {
                        observer.unobserve(children[i]);
                    }
                }
            }
        };
    }, []);

    // Mouse drag handling for scroll
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll faster
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Scroll to a specific card
    const scrollToCard = (index) => {
        if (containerRef.current) {
            const children = containerRef.current.children;
            if (children[index]) {
                containerRef.current.scrollTo({
                    left: children[index].offsetLeft - containerRef.current.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className="bg-black text-white pb-16 pt-20 relative overflow-hidden">
            {/* Abstract background elements */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-900/20 to-transparent"></div>
            <div className="absolute -right-40 top-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl"></div>
            <div className="absolute -left-20 bottom-20 w-60 h-60 rounded-full bg-gray-700/20 blur-3xl"></div>

            <div className="max-w-screen-2xl mx-auto px-4 mb-12">
                {/* Section header */}
                <div className="flex justify-between items-end relative z-10 mb-16">
                    <div>
                        <h4 className="text-red-600 font-bold uppercase tracking-wider mb-2">Our Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl font-bold">Innovative Projects</h2>
                    </div>

                    {/* Indicator dots for mobile */}
                    <div className="md:hidden flex space-x-2">
                        {[...Array(projects.length + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToCard(i)}
                                className={`w-2 h-2 rounded-full transition-all ${activeIndex === i ? 'bg-red-600 w-6' : 'bg-gray-600'}`}
                                aria-label={`Scroll to item ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Indicator text for desktop */}
                    <div className="hidden md:block">
                        <span className="text-gray-500">{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length + 1).padStart(2, '0')}</span>
                    </div>
                </div>
            </div>

            {/* Scrollable container with projects */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto pb-12 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* Left spacer for padding */}
                <div className="flex-shrink-0 w-8 md:w-24"></div>

                {/* Project cards */}
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        data-id={project.id}
                        data-index={index}
                        className={`flex-shrink-0 w-80 md:w-96 h-96 mr-8 rounded-xl overflow-hidden transition-all duration-700 ease-out ${isVisible[project.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{
                            transitionDelay: `${index * 100}ms`
                        }}
                    >
                        <div className="relative h-full group">
                            {/* Background image with overlay */}
                            <div className="absolute inset-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                            </div>

                            {/* Card content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="overflow-hidden mb-2">
                                    <span
                                        className="inline-block text-sm font-medium transition-transform duration-500 transform group-hover:-translate-y-full"
                                        style={{ color: project.color }}
                                    >
                                        {project.tagline}
                                    </span>
                                    <h3
                                        className="text-2xl font-bold transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"
                                        style={{ color: project.color }}
                                    >
                                        {project.tagline}
                                    </h3>
                                </div>

                                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm md:text-base">
                                    {project.description
                                    }
                                </p>

                                {/* Stats */}
                                <div className="flex space-x-4 text-xs text-gray-400">
                                    {Object.entries(project.stats).map(([key, value]) => (
                                        <div key={key} className="flex flex-col">
                                            <span className="font-semibold text-red-500">{value}</span>
                                            <span className="capitalize">{key}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* "And Others" card */}
                <div
                    data-id="others"
                    data-index={projects.length}
                    className={`flex-shrink-0 w-80 md:w-96 h-96 mr-8 rounded-xl overflow-hidden border border-dashed border-gray-600 bg-gray-900 text-white p-8 transition-all duration-700 ease-out ${isVisible["others"] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    style={{
                        transitionDelay: `${projects.length * 100}ms`
                    }}
                >
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Plus className="w-5 h-5 text-red-600" />
                                <span className="uppercase font-semibold text-sm tracking-wider">And Others</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Explore More</h3>
                            <p className="text-gray-400 text-sm">These are just a few highlights. Over the years, we've built many more impactful products.</p>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-300">
                            {additionalProjects.slice(0, 6).map((proj, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="font-semibold line-clamp-2">{proj.name}</span>
                                    <span className="text-xs text-gray-500">{proj.category} • {proj.year}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 flex items-center text-red-500 hover:text-red-400 transition-colors">
                            <span className="mr-2">View All</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right spacer for padding */}
                <div className="flex-shrink-0 w-8 md:w-24"></div>
            </div>
        </div>
    );
}