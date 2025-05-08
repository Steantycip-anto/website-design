import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Check, Play, Mail, Phone, MapPin, Shield, Zap, Globe, Settings } from 'lucide-react';
import { Button } from "@/utils"
import { useState } from 'react';

export const Feature1 = () => (
  <section className="py-20 bg-black text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img 
            src="https://steantycip.com/wp-content/uploads/2021/05/20170228_173648__1000x772.jpg" 
            alt="VR Technology" 
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">Innovative Solutions</h2>
          <p className="text-lg text-gray-300 mb-6">
            At Antycip, we push boundaries and explore new frontiers to stay ahead in a rapidly changing world. Our approach is rooted in modern thinking, leveraging the latest technologies and methodologies.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Simulation solutions for defense, aerospace, automotive and academia</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Virtual reality and immersive display systems</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
              <span className="ml-4">Custom solutions for complex visualization challenges</span>
            </li>
          </ul>
          <Button text="Explore Solutions" />
        </div>
      </div>
    </div>
  </section>
);

const splitContent = {
    title: "Tecnologia all'avanguardia per il tuo business",
    description: "Le nostre soluzioni innovative permettono alle aziende di ogni dimensione di ottimizzare i processi, ridurre i costi e aumentare la produttività attraverso l'uso strategico della tecnologia.",
    image: "https://steantycip.com/wp-content/uploads/2021/05/20170228_173648__1000x772.jpg",
    ctaText: "Scopri le nostre soluzioni",
    ctaLink: "#",
    imagePosition: "right",
    bullets: [
      "Tecnologie avanzate per ogni esigenza aziendale",
      "Team di esperti con competenze specializzate",
      "Approccio personalizzato per ogni cliente",
      "Supporto tecnico continuo 24/7"
    ],
    darkMode: true
  };

export const SplitSection = () => {
    const A = ({
        title,
        description,
        image,
        ctaText,
        ctaLink,
        imagePosition = "right", // "left" or "right"
        bullets = [],
        darkMode = true
    }) => {
        const bgColor = darkMode ? "bg-black" : "bg-gray-100";
        const textColor = darkMode ? "text-white" : "text-gray-900";
        const subtextColor = darkMode ? "text-gray-400" : "text-gray-600";

        return (
            <div className={`${bgColor} py-16 md:py-24`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                        {/* Image Section */}
                        <div className={`w-full md:w-1/2 ${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}>
                            <div className="relative">
                                {/* Red border accent */}
                                <div className="absolute -top-4 -left-4 right-12 bottom-12 border-2 border-red-500/20 rounded-lg"></div>

                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-lg shadow-xl border border-gray-800">
                                    <img
                                        src={image || "/api/placeholder/600/400"}
                                        alt={title}
                                        className="w-full h-auto"
                                    />

                                    {/* Optional overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent opacity-40"></div>
                                </div>

                                {/* Red accent dot */}
                                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-red-500 rounded-full"></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className={`w-full md:w-1/2 ${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
                            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>{title}</h2>
                            <p className={`mb-6 ${subtextColor}`}>{description}</p>

                            {bullets.length > 0 && (
                                <ul className="space-y-3 mb-8">
                                    {bullets.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                            <span className={subtextColor}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {ctaText && (
                                <a
                                    href={ctaLink}
                                    className="inline-flex items-center text-red-500 hover:text-red-400 font-medium transition-colors"
                                >
                                    {ctaText}
                                    <ChevronRight size={18} className="ml-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <A {...splitContent} />
};

// Variant 2: Diagonal Split Showcase with Overlapping Elements
export const DiagonalSplitVariant = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gray-900 transform -skew-x-12 origin-top-right"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-red-500 rounded-lg opacity-20"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <img 
                  src="https://steantycip.com/wp-content/uploads/2021/05/20170228_173648__1000x772.jpg" 
                  alt="Immersive Technology Experience" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 lg:pl-16">
            <div className="relative">
              <div className="absolute -top-10 left-0 text-6xl font-bold text-gray-800 opacity-20">Innovate</div>
              <h2 className="text-4xl font-bold mb-6 text-white">Redefining Digital Experiences</h2>
            </div>
            
            <p className="text-gray-300 mb-8">
              Our platform combines cutting-edge technology with intuitive design to create immersive 
              digital experiences that drive engagement and deliver measurable business outcomes.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                "Seamless integration with existing enterprise systems",
                "Real-time analytics and performance monitoring",
                "AI-powered optimization and automation capabilities",
                "Customizable workflows for various business needs"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-sm bg-red-600 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                  <span className="ml-4 text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center">
                Request Demo
                <ArrowUpRight size={16} className="ml-2" />
              </button>
              <button className="px-6 py-3 border border-gray-700 text-white rounded-lg hover:border-red-500 transition-colors flex items-center">
                Technical Specs
                <ChevronRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-8 w-24 h-1 bg-red-600"></div>
      <div className="absolute bottom-6 left-0 w-12 h-1 bg-red-600"></div>
    </section>
  );
};

// Variant 3: Asymmetric Layout with Animated Statistics
export const AsymmetricStatsVariant = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      title: "Simulation Solutions",
      content: "Our advanced simulation technologies enable realistic training scenarios for defense, aerospace, automotive and academic applications. From battlefield simulations to flight training, we create immersive environments that prepare professionals for real-world challenges.",
      image: "https://steantycip.com/wp-content/uploads/2021/05/20170228_173648__1000x772.jpg",
      stats: [
        { value: "98%", label: "Training Efficiency" },
        { value: "40%", label: "Cost Reduction" },
        { value: "3.5x", label: "ROI Increase" }
      ]
    },
    {
      title: "Virtual Reality",
      content: "Transform how teams collaborate and learn with our enterprise-grade VR solutions. Built for scale and performance, our immersive displays and environments create unprecedented opportunities for training, design visualization, and remote collaboration.",
      image: "https://steantycip.com/wp-content/uploads/2021/05/saving-time-1.jpg",
      stats: [
        { value: "85%", label: "Knowledge Retention" },
        { value: "60%", label: "Development Time" },
        { value: "4.2x", label: "Engagement Rate" }
      ]
    },
    {
      title: "Custom Integration",
      content: "Our expert team delivers tailored solutions for your most complex visualization challenges. We integrate cutting-edge hardware with custom software to create seamless systems that address your unique operational requirements.",
      image: "https://steantycip.com/wp-content/uploads/2021/05/iStock_000033090244_Medium-1260x840-1.jpg",
      stats: [
        { value: "99.9%", label: "System Uptime" },
        { value: "70%", label: "Process Optimization" },
        { value: "6.1x", label: "Decision Speed" }
      ]
    }
  ];
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header with geometric accent */}
        <div className="relative mb-16">
          <div className="absolute -top-12 left-0 w-24 h-24 bg-red-600 opacity-10 rounded-full blur-xl"></div>
          <div className="absolute top-6 left-60 w-12 h-12 bg-red-600 opacity-20 rounded-full"></div>
          
          <h2 className="text-5xl font-bold relative z-10">
            <span className="text-gray-400">Technological</span> 
            <span className="text-white block">Excellence</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mt-6"></div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="flex flex-wrap mb-8 border-b border-gray-800">
          {tabs.map((tab, index) => (
            <button 
              key={index}
              className={`py-4 px-6 font-medium relative ${activeTab === index ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-lg text-gray-300 mb-6">
              {tabs[activeTab].content}
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {tabs[activeTab].stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-black bg-opacity-30 rounded-lg border border-gray-800">
                  <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg flex items-center shadow-lg">
              <span>Explore Solutions</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          {/* Right Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-60 z-10 rounded-lg"></div>
              <img 
                src={tabs[activeTab].image} 
                alt={tabs[activeTab].title}
                className="w-full rounded-lg border border-gray-800 shadow-2xl object-cover h-80"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center cursor-pointer z-20">
                <Play size={24} className="text-white ml-1" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-red-500 opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Variant 4: Circular Content Orbs with Perspective Layout
export const CircularOrbsVariant = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    {
      title: "Intelligent Automation",
      description: "Deploy smart systems that learn and adapt to your operational needs, reducing manual intervention and increasing efficiency across all processes.",
      icon: <Zap size={24} />
    },
    {
      title: "Immersive Experiences",
      description: "Create compelling digital environments that captivate users and deliver meaningful engagement through advanced visualization technologies.",
      icon: <Globe size={24} />
    },
    {
      title: "Data-Driven Insights",
      description: "Transform raw information into actionable intelligence with our analytics platform, empowering informed decision-making at every level.",
      icon: <Settings size={24} />
    }
  ];
  
  const contactInfo = [
    { icon: <Mail size={18} />, text: "solutions@techcompany.com" },
    { icon: <Phone size={18} />, text: "+1 (555) 123-4567" },
    { icon: <MapPin size={18} />, text: "Global Technology Center, Innovation Park" }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 relative">
            <div className="max-w-lg">
              <h5 className="text-red-500 font-medium mb-2 flex items-center">
                <div className="w-6 h-0.5 bg-red-500 mr-3"></div>
                BREAKTHROUGH TECHNOLOGY
              </h5>
              
              <h2 className="text-5xl font-bold mb-6">Reshape the Future with Advanced Solutions</h2>
              
              <p className="text-gray-300 mb-10">
                Our cutting-edge platform integrates seamlessly with your existing infrastructure, 
                providing powerful capabilities that transform how you operate, innovate, and compete 
                in today's rapidly evolving digital landscape.
              </p>
              
              <div className="space-y-8 mb-10">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-300 cursor-pointer 
                      ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${activeIndex === index ? 'bg-red-600' : 'bg-gray-800'} text-white mr-4`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                    
                    {activeIndex === index && (
                      <div className="w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                  Schedule Consultation
                </button>
                <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-red-600 opacity-5 rounded-full blur-xl"></div>
            <div className="absolute bottom-12 -left-20 w-32 h-32 bg-red-600 opacity-10 rounded-full blur-lg"></div>
          </div>
          
          {/* Right Content - The Orbs */}
          <div className="w-full lg:w-1/2 relative perspective">
            <div className="relative h-96 w-full">
              {/* Main orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border border-gray-700 shadow-2xl">
                <img 
                  src="https://steantycip.com/wp-content/uploads/2021/05/Techviz-data-visualisation-1.jpg" 
                  alt="Tech Visualization" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-red-900/20"></div>
              </div>
              
              {/* Satellite orbs */}
              <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full overflow-hidden border border-gray-800 shadow-xl">
                <img 
                  src="https://steantycip.com/wp-content/uploads/2021/05/IndustryLab-VR-suite.jpg" 
                  alt="Tech Detail 1" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full overflow-hidden border border-gray-800 shadow-xl">
                <img 
                  src="https://steantycip.com/wp-content/uploads/2021/05/create-memorable-exp__1000x772-1.jpg" 
                  alt="Tech Detail 2" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/50 to-transparent"></div>
              </div>
              
              {/* Connecting lines */}
              <div className="absolute top-16 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <div className="absolute bottom-28 right-32 w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              
              {/* Contact info floating card */}
              <div className="absolute bottom-0 left-0 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 w-64">
                <h4 className="font-medium mb-3 text-white/90">Connect With Us</h4>
                <div className="space-y-2">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <span className="text-red-500 mr-3">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background accents */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-500/10 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};