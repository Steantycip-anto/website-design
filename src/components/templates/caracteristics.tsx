import { useState } from 'react';
import {
    Cpu, ChevronRight, Shield, Zap, BarChart, Network, Globe, Monitor, Database, Code, ArrowRight, Settings, Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';

export function SpecsFeatures({
    title = "Caratteristiche avanzate",
    subtitle = "Tecnologie innovative integrate",
    description = "Il nostro sistema sfrutta tecnologie all'avanguardia per garantire prestazioni superiori e un'esperienza d'uso ottimale in ogni contesto applicativo.",
    features = [
        {
            icon: Cpu,
            title: "Elaborazione neuromorfica",
            description: "Architettura ispirata al cervello umano per un'elaborazione parallela massiva dei dati"
        },
        {
            icon: Shield,
            title: "Sicurezza multilivello",
            description: "Protezione dei dati con crittografia end-to-end e sistemi di autenticazione avanzati"
        },
        {
            icon: Zap,
            title: "Performance ottimizzate",
            description: "Algoritmi ottimizzati per latenza minima e throughput elevato anche con carichi intensivi"
        },
        {
            icon: BarChart,
            title: "Analytics in tempo reale",
            description: "Dashboard interattive con metriche chiave e visualizzazioni personalizzabili"
        },
        {
            icon: Network,
            title: "Architettura scalabile",
            description: "Infrastruttura cloud-native progettata per scalare in base alle esigenze"
        },
        {
            icon: Globe,
            title: "Supporto multi-lingua",
            description: "Elaborazione del linguaggio naturale con supporto per oltre 50 lingue"
        }
    ]
}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative w-full bg-black text-white py-16 lg:py-24 overflow-hidden" id="features">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-red-700/10 rounded-full blur-2xl"></div>
            </div>

            {/* Red diagonal line */}
            <div className="absolute top-0 right-0 h-24 w-1 bg-gradient-to-b from-red-500 to-red-800 transform -rotate-45 origin-top-right"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-medium text-red-500 mb-3 uppercase tracking-wider">{subtitle}</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
                </div>

                {/* Features grid with asymmetric layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
                    {features.map((feature, idx) => {
                        // Create asymmetry with positioning
                        const isEven = idx % 2 === 0;
                        const isFirst = idx < 3;

                        return (
                            <div
                                key={idx}
                                className={`relative ${isEven ? (isFirst ? 'lg:mt-0' : 'lg:mt-8') : (isFirst ? 'lg:mt-16' : 'lg:mt-0')}`}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`bg-gray-900/50 border border-gray-800 p-6 rounded-lg transition-all duration-300 h-full
                  ${hoveredIndex === idx ? 'bg-gray-900/80 border-red-500/50 transform scale-105 shadow-lg shadow-red-900/20' : ''}`}>
                                    {/* Icon with red highlight */}
                                    <div className="mb-4 relative">
                                        <div className={`absolute -inset-1 bg-red-500/20 rounded-full blur-sm 
                      transition-opacity duration-300 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                                        <div className="bg-gray-800 p-3 rounded-lg inline-flex relative z-10">
                                            <feature.icon
                                                size={24}
                                                className={`transition-colors duration-300 ${hoveredIndex === idx ? 'text-red-500' : 'text-gray-300'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-gray-400">{feature.description}</p>

                                    {/* Red geometric accent */}
                                    <div className={`absolute bottom-0 right-0 w-8 h-8 transition-opacity duration-300
                    ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-red-500"></div>
                                        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-red-500"></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Decorative elements */}
                <div className="absolute -left-4 top-1/3 w-24 h-1 bg-red-500 transform -rotate-45 opacity-50"></div>
                <div className="absolute -right-4 bottom-1/4 w-16 h-1 bg-red-500 transform rotate-45 opacity-30"></div>
            </div>
        </div>
    );
}

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-red-500/30 transition-all duration-300 h-full">
            <div className="text-red-500 mb-4">
                {icon || <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <ArrowUpRight size={24} />
                </div>}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

const featuresContent = {
    title: "Servizi {{Premium}} per il tuo Business",
    subtitle: "Soluzioni personalizzate per affrontare le sfide digitali e guidare l'innovazione nella tua azienda",
    features: [
        {
            title: "Consulenza IT Strategica",
            description: "Analisi approfondita e pianificazione strategica per allineare la tecnologia agli obiettivi aziendali.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        },
        {
            title: "Sviluppo Software Personalizzato",
            description: "Creazione di soluzioni software su misura per ottimizzare i processi aziendali e migliorare l'efficienza.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        },
        {
            title: "Cybersecurity Avanzata",
            description: "Protezione completa dei dati e dell'infrastruttura IT contro le minacce informatiche più sofisticate.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        },
        {
            title: "Cloud Computing",
            description: "Migrazione e gestione delle risorse IT su cloud per maggiore flessibilità, scalabilità e risparmio.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        },
        {
            title: "Business Intelligence",
            description: "Analisi dei dati aziendali per fornire insight strategici e supportare il processo decisionale.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        },
        {
            title: "Digital Transformation",
            description: "Accompagnamento nel processo di trasformazione digitale per restare competitivi nel mercato attuale.",
            icon: <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center"><ChevronRight size={24} /></div>
        }
    ],
    columns: 3
};

export const FeatureGrid = () => {
    const columnClasses = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4"
    };

    const A = ({
        title,
        subtitle,
        features,
        columns = 3 // 2, 3, 4
    }) => {
        return (
            <div className="bg-black py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6">
                    {(title || subtitle) && (
                        <div className="text-center mb-12 md:mb-16">
                            {title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {title.includes('{{') ? (
                                    <span dangerouslySetInnerHTML={{ __html: title.replace(/\{\{(.*?)\}\}/g, '<span class="text-red-500">$1</span>') }} />
                                ) : (
                                    title
                                )}
                            </h2>}
                            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
                        </div>
                    )}

                    <div className={`grid grid-cols-1 ${columnClasses[columns]} gap-6 md:gap-8`}>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    return <A {...featuresContent} />
};

export const FeaturesSection = () => {
    const features = [
      {
        icon: <Monitor className="w-10 h-10 text-red-600" />,
        title: "Design Responsivo",
        description: "Interfacce che si adattano perfettamente ad ogni dispositivo, garantendo un'esperienza utente ottimale"
      },
      {
        icon: <Cpu className="w-10 h-10 text-red-600" />,
        title: "Prestazioni Elevate",
        description: "Algoritmi ottimizzati per la massima velocità di elaborazione e tempi di risposta minimi"
      },
      {
        icon: <Database className="w-10 h-10 text-red-600" />,
        title: "Gestione Dati",
        description: "Soluzioni scalabili per l'archiviazione e l'analisi di grandi volumi di informazioni"
      },
      {
        icon: <Code className="w-10 h-10 text-red-600" />,
        title: "Codice Pulito",
        description: "Sviluppo basato sulle migliori pratiche per garantire manutenibilità e scalabilità"
      }
    ];
  
    return (
      <section className="bg-black text-white py-16 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header della sezione */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-px w-12 bg-red-600"></div>
                <span className="text-red-600 uppercase tracking-widest text-sm">Funzionalità</span>
              </div>
              <h2 className="text-4xl font-bold">Caratteristiche <span className="text-gray-500">principali</span></h2>
            </div>
            <div className="hidden lg:block">
              <p className="text-gray-400 max-w-md">
                La nostra piattaforma combina tecnologie all'avanguardia per offrire soluzioni innovative e performanti.
              </p>
            </div>
          </div>
          
          {/* Grid delle features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="border border-gray-800 p-6 hover:border-red-600 transition-all duration-300 hover:bg-gray-900 group"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom action */}
          <div className="mt-16 flex justify-center">
            <button className="group flex items-center space-x-2 text-gray-400 hover:text-red-600 transition-colors">
              <span>Scopri tutte le funzionalità</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  // Variant 1: Tech Card Grid Layout with Animated Hover
export const TechGridVariant = () => {
    const [activeCard, setActiveCard] = useState(null);
    
    const cards = [
      {
        icon: <Shield size={24} />,
        title: "Advanced Security",
        description: "Enterprise-grade protection for all your sensitive data and critical infrastructure"
      },
      {
        icon: <Zap size={24} />,
        title: "High Performance",
        description: "Optimized systems delivering lightning-fast response times and seamless integration"
      },
      {
        icon: <Globe size={24} />,
        title: "Global Reach",
        description: "Connect with partners and customers worldwide with our distributed network solutions"
      },
      {
        icon: <Settings size={24} />,
        title: "Custom Solutions",
        description: "Tailored technology implementations designed for your specific business requirements"
      }
    ];
    
    return (
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Next-Generation Technology Solutions</h2>
            <p className="text-gray-400">
              Discover how our cutting-edge technologies can transform your business operations
              and create competitive advantages in today's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div 
                key={index}
                className="relative overflow-hidden bg-gray-900 rounded-lg p-6 border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-red-500 hover:-translate-y-1 hover:shadow-lg"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-red-600 transform transition-all duration-300" 
                  style={{ transform: activeCard === index ? 'scaleY(1)' : 'scaleY(0.2)' }} />
                
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-600/20 rounded-lg text-red-500 mr-3">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{card.description}</p>
                
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  style={{ opacity: activeCard === index ? 0.4 : 0 }}>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };