"use client"
import { useState, useEffect, useRef } from 'react';
import {  Plus, Search, Filter, X, ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { projects, additionalProjects } from '@/lib/data';

export function ProjectsPageVariant1() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [animatedItems, setAnimatedItems] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  
  // Combine both project arrays
  const allProjects = [...projects, ...additionalProjects];
  
  // Filter projects based on active filter and search term
  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = activeFilter === 'All' || 
                          project.category === activeFilter ||
                          (project.stats && project.stats.category === activeFilter);
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                          project.title?.toLowerCase().includes(searchLower) ||
                          project.name?.toLowerCase().includes(searchLower) ||
                          project.description?.toLowerCase().includes(searchLower) ||
                          project.tagline?.toLowerCase().includes(searchLower) ||
                          project.category?.toLowerCase().includes(searchLower);
    
    return matchesFilter && matchesSearch;
  });
  
  // Generate a list of unique categories from all projects
  const categories = ['All', ...new Set(allProjects.map(p => 
    p.category || (p.stats && p.stats.category)
  ).filter(Boolean))];
  
  // Use Intersection Observer to animate items when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('.project-card').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative bg-black pt-20 pb-24">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -right-40 top-20 w-96 h-96 rounded-full bg-red-600/10 blur-3xl"></div>
          <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-gray-700/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-red-900/10 to-gray-900/10 blur-xl"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <h4 className="text-red-600 font-bold uppercase tracking-wider mb-2">Our Portfolio</h4>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">All Projects</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Explore our complete collection of innovative solutions, digital experiences, 
            and technological achievements spanning multiple industries and disciplines.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md z-20 border-y border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Mobile Filter Button */}
            <button 
              className="md:hidden flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    activeFilter === category 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="md:hidden pb-4 grid grid-cols-2 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    activeFilter === category 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-md">
              We couldn't find any projects matching your current search and filters. 
              Try adjusting your criteria or browse all projects.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              // Determine if this is from the main projects array or additionalProjects
              const isMainProject = projects.some(p => 
                (p.id && p.id === project.id) || 
                (p.title && p.title === project.title) ||
                (p.name && p.name === project.name)
              );
              
              const projectId = project.id || `project-${index}`;
              
              return (
                <div 
                  key={projectId}
                  data-id={projectId}
                  className={`project-card transition-all duration-700 ease-out ${
                    animatedItems[projectId] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${(index % 10) * 50}ms`
                  }}
                >
                  {isMainProject ? (
                    // Main project card with image
                    <div className="h-full rounded-xl overflow-hidden border border-gray-800 group hover:border-red-600 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/api/placeholder/600/400"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4">
                          <span 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                            style={{ 
                              backgroundColor: project.color ? `${project.color}20` : '#ff000020',
                              color: project.color || '#ff0000'
                            }}
                          >
                            {project.tagline || project.category || (project.stats && project.stats.category) || 'Project'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                          {project.title || project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.description || "An innovative project showcasing our expertise and technological capabilities."}
                        </p>
                        
                        {project.stats && Object.keys(project.stats).length > 0 && (
                          <div className="flex flex-wrap gap-4 text-xs text-gray-300 mb-4">
                            {Object.entries(project.stats).map(([key, value]) => (
                              key !== 'category' && (
                                <div key={key} className="flex flex-col">
                                  <span className="font-semibold text-red-500">{value}</span>
                                  <span className="capitalize">{key}</span>
                                </div>
                              )
                            ))}
                          </div>
                        )}
                        
                        <button className="flex items-center text-red-500 hover:text-red-400 transition-colors text-sm font-medium">
                          <span className="mr-2">View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Additional project card (simpler)
                    <div className="h-full rounded-xl overflow-hidden border border-gray-800 bg-gray-900/50 p-6 hover:border-red-600 transition-all duration-300 group">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-900/20 text-red-500">
                          {project.category || 'Project'} • {project.year || 'Recent'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                        {project.name || project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description || "A project highlighting our expertise and innovative approach."}
                      </p>
                      <button className="flex items-center text-red-500 hover:text-red-400 transition-colors text-sm font-medium mt-auto">
                        <span className="mr-2">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* CTA Section */}
      <div className="relative bg-gray-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 bottom-0 w-80 h-80 rounded-full bg-red-600/10 blur-3xl"></div>
          <div className="absolute -left-20 top-0 w-60 h-60 rounded-full bg-gray-700/20 blur-3xl"></div>
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
              <p className="text-gray-300 max-w-xl">
                Let's collaborate to bring your vision to life. Our team is ready to help you
                build something incredible that stands out in today's digital landscape.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                Contact Us
              </button>
              <button className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:border-white transition-colors font-medium">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ExternalLink, Clock, Award, Users } from 'lucide-react';


export function ProjectsPageVariant2() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProjects, setVisibleProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedFilters, setExpandedFilters] = useState(false);
  const detailsRef = useRef(null);
  
  // Combine projects with additionalProjects for a full catalog
  const allProjects = [
    ...projects.map((p, i) => ({ 
      ...p, 
      size: 'large', 
      type: 'featured',
      year: p.stats?.year || '2024'
    })),
    ...additionalProjects.map((p, i) => ({ 
      ...p, 
      size: i % 7 > 3 ? 'medium' : 'small',
      type: 'additional',
      color: p.color || '#ff0000'
    }))
  ];
  
  // Extract all unique categories
  const categories = [
    'All', 
    ...new Set(allProjects.map(p => p.category).filter(Boolean))
  ];
  
  // Extract all unique years
  const years = [
    'All Years',
    ...new Set(allProjects.map(p => p.year).filter(Boolean).sort((a, b) => b - a))
  ];
  
  // Filter projects based on search and category
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || 
                          project.title?.toLowerCase().includes(searchLower) ||
                          project.name?.toLowerCase().includes(searchLower) ||
                          project.description?.toLowerCase().includes(searchLower) ||
                          project.tagline?.toLowerCase().includes(searchLower) ||
                          project.category?.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });
  
  // Set up intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    
    document.querySelectorAll('.project-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [filteredProjects]);
  
  // Handle project selection and detail view
  useEffect(() => {
    if (selectedProject && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProject]);
  
  // Close details when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (detailsRef.current && !detailsRef.current.contains(e.target) && selectedProject) {
        setSelectedProject(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedProject]);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero section with dynamic background */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-64 bg-gray-700/10 blur-3xl rounded-full"></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="inline-block px-4 py-1 bg-red-900/20 text-red-500 font-medium rounded-full mb-4">Portfolio</h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Our Complete Project Collection</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our innovative solutions and award-winning work across various industries and technologies. From concept to completion, these projects showcase our expertise and vision.
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-lg z-20 border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-4 py-4">
            {/* Search field */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Category filters - desktop */}
            <div className="hidden md:flex items-center space-x-2 overflow-x-auto scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Mobile filters toggle */}
            <button
              className="md:hidden flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-full text-sm"
              onClick={() => setExpandedFilters(!expandedFilters)}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Mobile expanded filters */}
          {expandedFilters && (
            <div className="md:hidden px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setExpandedFilters(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Stats counter bar */}
      <div className="bg-gray-900 border-t border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">{allProjects.length}+</div>
              <div className="text-gray-300">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">14+</div>
              <div className="text-gray-300">Industries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">92%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Selected project details */}
      {selectedProject && (
        <div 
          ref={detailsRef}
          className="relative bg-gray-900 border-b border-gray-800"
        >
          <div className="max-w-screen-xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Project image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={selectedProject.image || "/api/placeholder/800/450"} 
                    alt={selectedProject.title || selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span 
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        backgroundColor: `${selectedProject.color}20`, 
                        color: selectedProject.color 
                      }}
                    >
                      {selectedProject.tagline || selectedProject.category || 'Featured Project'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project details */}
              <div className="w-full md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold">{selectedProject.title || selectedProject.name}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {selectedProject.description || 
                    "This project demonstrates our technical expertise and creative approach to solving complex challenges with innovative solutions tailored to meet specific requirements and exceed expectations."}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Category</p>
                    <p className="font-medium">{selectedProject.category || 'Technology'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Year</p>
                    <p className="font-medium">{selectedProject.year || selectedProject.stats?.year || '2024'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Client</p>
                    <p className="font-medium">{selectedProject.client || selectedProject.stats?.client || 'Confidential'}</p>
                  </div>
                </div>
                
                {/* Project stats */}
                {selectedProject.stats && Object.keys(selectedProject.stats).length > 0 && (
                  <div className="border-t border-gray-800 pt-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Project Highlights</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {Object.entries(selectedProject.stats).map(([key, value]) => (
                        key !== 'category' && key !== 'client' && key !== 'year' && (
                          <div key={key} className="flex flex-col">
                            <span className="text-red-500 font-bold text-xl mb-1">{value}</span>
                            <span className="text-gray-400 text-sm capitalize">{key}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center">
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 border border-gray-700 hover:border-white text-white rounded-lg transition-colors flex items-center">
                    <span className="mr-2">Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Projects masonry grid */}
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        {filteredProjects === null ? (
          // Loader
          <div className="text-center my-12">
            <div className="animate-spin mx-auto mb-4">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"></div>
            </div>
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (filteredProjects.length === 0 ? (
          // Nessun progetto trovato
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="w-16 h-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-lg">
              We couldn't find any projects matching your search criteria. Try adjusting your filters or try a different search term.
            </p>
            <div className="mt-8 flex space-x-4">
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : (
          // Lista progetti
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {filteredProjects.map((project, index) => {
              const id = project.id || `project-${index}`;
              const isVisible = visibleProjects[id];

              let columnSpan = 'col-span-12 md:col-span-4';
              if (project.size === 'large') {
                columnSpan = 'col-span-12 md:col-span-6';
              } else if (project.size === 'small') {
                columnSpan = 'col-span-12 md:col-span-3';
              }
              
              return (
                <div 
                  key={id}
                  data-id={id}
                  className={`project-item ${columnSpan} transition-all duration-500 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index % 12) * 50}ms` }}
                >
                  <div 
                    className="group h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.type === 'featured' && (
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={project.image || "/api/placeholder/600/400"} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="mb-3">
                        <span 
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                          style={{ 
                            backgroundColor: `${project.color}20`, 
                            color: project.color 
                          }}
                        >
                          {project.category || 'Project'} {project.year && `• ${project.year}`}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                        {project.title || project.name}
                      </h3>

                      {(project.type === 'featured' || project.size === 'medium') && (
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {project.description || "An innovative project showcasing our expertise and technological capabilities."}
                        </p>
                      )}

                      {project.type === 'featured' && project.stats && (
                        <div className="flex flex-wrap gap-4 text-xs text-gray-300 mb-4">
                          {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                            key !== 'category' && key !== 'client' && key !== 'year' && (
                              <div key={key} className="flex flex-col">
                                <span className="font-semibold text-red-500">{value}</span>
                                <span className="capitalize">{key}</span>
                              </div>
                            )
                          ))}
                        </div>
                      )}

                      <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors text-sm font-medium mt-2">
                        <span className="mr-2">View Project</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      {/* Filter by year section */}
      <div className="border-t border-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Browse by Year</h2>
              <p className="text-gray-400">Explore our projects chronologically</p>
            </div>
            <div className="mt-4 md:mt-0">
              <select 
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
                onChange={(e) => {
                  if (e.target.value !== 'All Years') {
                    setSearchQuery(`${e.target.value}`);
                    setActiveCategory('All');
                  } else {
                    setSearchQuery('');
                  }
                }}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {years.slice(1, 5).map((year) => {
              const yearProjects = allProjects.filter(p => p.year === year);
              return (
                <div 
                  key={year}
                  className="bg-gray-900 border border-gray-800 hover:border-red-600 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    setSearchQuery(`${year}`);
                    setActiveCategory('All');
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-red-500 transition-colors">{year}</h3>
                      <Clock className="text-gray-400 group-hover:text-red-500 transition-colors w-5 h-5" />
                    </div>
                    <p className="text-gray-400 mb-4">
                      {yearProjects.length} projects completed
                    </p>
                    <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors text-sm font-medium">
                      <span className="mr-2">Browse {year} Projects</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Testimonials and awards */}
      <div className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonials */}
            <div>
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold">Client Testimonials</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <p className="italic text-gray-300 mb-4">
                    "The team delivered an exceptional product that exceeded our expectations. Their attention to detail and innovative approach helped us achieve our goals faster than anticipated."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium mr-3">JD</div>
                    <div>
                      <h4 className="font-medium">John Doe</h4>
                      <p className="text-sm text-gray-400">CTO, Tech Innovations Inc.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <p className="italic text-gray-300 mb-4">
                    "We've partnered on multiple projects and each time they've delivered outstanding results. Their technical expertise combined with creative vision makes them our go-to development partner."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-medium mr-3">AS</div>
                    <div>
                      <h4 className="font-medium">Amanda Smith</h4>
                      <p className="text-sm text-gray-400">Project Manager, Global Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold">Awards & Recognition</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">Innovation Award</h3>
                  <p className="text-sm text-gray-400 text-center">Best Technology Solution 2024</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <Award className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">Design Excellence</h3>
                  <p className="text-sm text-gray-400 text-center">UI/UX Design Awards 2023</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <Award className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">Industry Leader</h3>
                  <p className="text-sm text-gray-400 text-center">Tech Innovation Summit 2024</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-center h-12 mb-4">
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">Client Satisfaction</h3>
                  <p className="text-sm text-gray-400 text-center">Top Service Provider 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-1/3 h-48 bg-red-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-48 bg-gray-800/30 blur-3xl rounded-full"></div>
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life. Our team of experts is ready to help you develop innovative solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center">
              <span className="mr-2">Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 border border-gray-700 hover:border-white text-white rounded-lg transition-colors">
              View Our Process
            </button>
          </div>
        </div>
      </div>
      
      {/* Sample data for the component */}
      <div className="hidden">
        {JSON.stringify(projects)}
        {JSON.stringify(additionalProjects)}
      </div>
    </div>
  );
}

export function ProjectsPageVariant3() {
  // State for featured projects carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // State for filtering projects
  const [activeYear, setActiveYear] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFilters, setExpandedFilters] = useState(false);
  
  // State for animations
  const [visibleElements, setVisibleElements] = useState({});
  
  // Refs
  const timelineRef = useRef(null);
  
  // Prepare data
  // Featured projects are taken from the main projects array
  const featuredProjects = projects.slice(0, Math.min(projects.length, 5));
  
  // Combine all projects and organize by year
  const allProjects = [
    ...projects.map(p => ({
      ...p,
      year: p.stats?.year || '2024',
      type: 'featured'
    })),
    ...additionalProjects.map(p => ({
      ...p,
      type: 'additional'
    }))
  ];
  
  // Get unique years and categories for filters
  const years = ['All', ...new Set(allProjects.map(p => p.year).filter(Boolean).sort((a, b) => b - a))];
  const categories = ['All', ...new Set(allProjects.map(p => p.category).filter(Boolean))];
  
  // Filter projects
  const filteredProjects = allProjects.filter(project => {
    const matchesYear = activeYear === 'All' || project.year === activeYear;
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || 
                          (project.title?.toLowerCase().includes(searchLower) || 
                           project.name?.toLowerCase().includes(searchLower) || 
                           project.description?.toLowerCase().includes(searchLower) ||
                           project.tagline?.toLowerCase().includes(searchLower) ||
                           project.category?.toLowerCase().includes(searchLower));
    
    return matchesYear && matchesCategory && matchesSearch;
  });
  
  // Group filtered projects by year for the timeline display
  const projectsByYear = filteredProjects.reduce((acc, project) => {
    const year = project.year || 'Undated';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});
  
  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);
  
  // Carousel control functions
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };
  
  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('[data-id]').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [filteredProjects]);
  
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero section with featured projects carousel */}
      <div className="relative bg-black overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-red-600/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 -left-1/4 w-1/3 h-1/3 bg-gray-700/10 blur-3xl rounded-full"></div>
        </div>
        
        <div className="relative z-10 pt-20 pb-16">
          <div className="max-w-screen-xl mx-auto px-4">
            {/* Hero header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h4 className="inline-block px-4 py-1 bg-red-900/20 text-red-500 font-medium rounded-full mb-4 text-sm">Project Collection</h4>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovative Solutions & Creative Excellence</h1>
              <p className="text-gray-300 text-lg">
                Explore our diverse portfolio of work across various industries. Each project represents 
                our commitment to innovation, quality, and delivering exceptional results.
              </p>
            </div>
            
            {/* Featured projects carousel */}
            <div className="relative mt-16 mb-8">
              {/* Carousel container */}
              <div className="relative h-[500px] overflow-hidden rounded-xl">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id || `featured-${index}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.image || "/api/placeholder/1600/900"} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                    </div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="max-w-screen-xl mx-auto px-4 w-full">
                        <div className="max-w-lg">
                          <div 
                            className={`transition-all duration-700 delay-100 transform ${
                              currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                          >
                            <span 
                              className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                              style={{ 
                                backgroundColor: `${project.color}20`, 
                                color: project.color || '#ff0000' 
                              }}
                            >
                              {project.tagline || project.category || 'Featured Project'}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
                            <p className="text-gray-300 mb-8 text-lg max-w-md">
                              {project.description || "An innovative project showcasing our expertise and technological capabilities."}
                            </p>
                            
                            {/* Project stats */}
                            {project.stats && (
                              <div className="flex flex-wrap gap-6 mb-8">
                                {Object.entries(project.stats).slice(0, 4).map(([key, value]) => (
                                  key !== 'category' && (
                                    <div key={key} className="flex items-center">
                                      {key.toLowerCase().includes('time') && <Clock className="w-5 h-5 text-red-500 mr-2" />}
                                      {key.toLowerCase().includes('team') && <Users className="w-5 h-5 text-red-500 mr-2" />}
                                      {(key.toLowerCase().includes('award') || key.toLowerCase().includes('recognition')) && 
                                        <Trophy className="w-5 h-5 text-red-500 mr-2" />}
                                      {key.toLowerCase().includes('year') && <Calendar className="w-5 h-5 text-red-500 mr-2" />}
                                      <div>
                                        <div className="font-semibold text-white">{value}</div>
                                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                                      </div>
                                    </div>
                                  )
                                ))}
                              </div>
                            )}
                            
                            {/* CTA buttons */}
                            <div className="flex space-x-4">
                              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center">
                                <span className="mr-2">View Project</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                              <button className="px-6 py-3 border border-gray-700 hover:border-white text-white rounded-lg transition-colors flex items-center">
                                <span className="mr-2">Live Demo</span>
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel navigation */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-4">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-black/60 hover:bg-red-600 transition-colors flex items-center justify-center text-white"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (isTransitioning) return;
                        setIsTransitioning(true);
                        setCurrentSlide(index);
                        setTimeout(() => setIsTransitioning(false), 500);
                      }}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index ? 'bg-red-600 w-8' : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-black/60 hover:bg-red-600 transition-colors flex items-center justify-center text-white"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-lg z-20 border-y border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-4">
            {/* Search input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            {/* Desktop filters */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Category filters */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Category:</span>
                <div className="relative">
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="appearance-none bg-gray-900 border border-gray-700 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
              
              {/* Year filters */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Year:</span>
                <div className="relative">
                  <select
                    value={activeYear}
                    onChange={(e) => setActiveYear(e.target.value)}
                    className="appearance-none bg-gray-900 border border-gray-700 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
              
              {/* Reset filters */}
              {(activeCategory !== 'All' || activeYear !== 'All' || searchQuery) && (
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveYear('All');
                    setSearchQuery('');
                  }}
                  className="text-red-500 hover:text-red-400 text-sm font-medium"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {/* Mobile filters toggle */}
            <button
              className="md:hidden flex items-center justify-between bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 w-full"
              onClick={() => setExpandedFilters(!expandedFilters)}
            >
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Mobile expanded filters */}
          {expandedFilters && (
            <div className="md:hidden pb-4 space-y-4">
              {/* Category filters */}
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Category:</label>
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Year filters */}
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Year:</label>
                <select
                  value={activeYear}
                  onChange={(e) => setActiveYear(e.target.value)}
                  className="w-full appearance-none bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              {/* Reset filters */}
              {(activeCategory !== 'All' || activeYear !== 'All' || searchQuery) && (
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveYear('All');
                    setSearchQuery('');
                    setExpandedFilters(false);
                  }}
                  className="w-full py-2 text-center bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Projects Timeline */}
      <div ref={timelineRef} className="max-w-screen-xl mx-auto px-4 py-16">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="w-16 h-16 text-gray-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-gray-400 max-w-lg">
              We couldn't find any projects matching your search criteria. Try adjusting your filters or try a different search term.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setActiveYear('All');
                setSearchQuery('');
              }}
              className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            {sortedYears.map((year) => (
              <div 
                key={year}
                data-id={`year-${year}`}
                className={`transition-all duration-700 ease-out ${
                  visibleElements[`year-${year}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {/* Year header */}
                <div className="flex items-center mb-8">
                  <h2 className="text-4xl font-bold text-white">{year}</h2>
                  <div className="ml-6 h-px bg-gradient-to-r from-red-600 to-transparent flex-grow"></div>
                </div>
                
                {/* Projects grid for this year */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectsByYear[year].map((project, index) => {
                    const projectId = project.id || `${year}-project-${index}`;
                    
                    return (
                      <div 
                        key={projectId}
                        data-id={projectId}
                        className={`transition-all duration-700 ease-out ${
                          visibleElements[projectId] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {/* Project card */}
                        <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all group">
                          {/* Project image */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={project.image || "/api/placeholder/600/400"} 
                              alt={project.title || project.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {project.category && (
                              <div 
                                className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full"
                                style={{ 
                                  backgroundColor: `${project.color}20` || 'rgba(255,0,0,0.2)', 
                                  color: project.color || '#ff0000' 
                                }}
                              >
                                {project.category}
                              </div>
                            )}
                          </div>
                          
                          {/* Project content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-white">
                              {project.title || project.name || 'Untitled Project'}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                              {project.description || 'No description available.'}
                            </p>
                            
                            {/* Project metadata */}
                            {project.stats && (
                              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                {Object.entries(project.stats).slice(0, 3).map(([key, value]) => (
                                  key !== 'category' && key !== 'year' && (
                                    <div key={key} className="flex items-center">
                                      {key.toLowerCase().includes('time') && <Clock className="w-4 h-4 text-red-500 mr-1" />}
                                      {key.toLowerCase().includes('team') && <Users className="w-4 h-4 text-red-500 mr-1" />}
                                      {(key.toLowerCase().includes('award') || key.toLowerCase().includes('recognition')) && 
                                        <Trophy className="w-4 h-4 text-red-500 mr-1" />}
                                      <span className="text-gray-400">
                                        <span className="text-gray-300">{value}</span> {key}
                                      </span>
                                    </div>
                                  )
                                ))}
                              </div>
                            )}
                            
                            {/* Project tags/skills */}
                            {project.tags && (
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.slice(0, 4).map((tag, i) => (
                                  <span 
                                    key={i} 
                                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {project.tags.length > 4 && (
                                  <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                    +{project.tags.length - 4} more
                                  </span>
                                )}
                              </div>
                            )}
                            
                            {/* Project action */}
                            <div className="mt-4">
                              <button className="flex items-center text-red-500 hover:text-red-400 font-medium text-sm transition-colors">
                                <span className="mr-1">View Project Details</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer / Call to action */}
      <div className="bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Let's collaborate and create something extraordinary together. Our team is ready to turn your vision into reality.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-lg font-medium">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}