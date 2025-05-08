"use client"
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Check, Play, Mail, Phone, MapPin } from 'lucide-react';

// 1. Hero Section con immagine e CTA
const HeroSection = ({ 
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
};

// 2. Feature Grid con icone o immagini
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

const FeatureGrid = ({ 
  title, 
  subtitle, 
  features,
  columns = 3 // 2, 3, 4
}) => {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

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
};

// 3. Image-Text Split Section
const SplitSection = ({
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
};

// 4. Testimonial Carousel
const TestimonialCarousel = ({
  testimonials,
  title,
  subtitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="relative max-w-4xl mx-auto">
          {/* Red accents */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-red-500/30"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-red-500/30"></div>
          
          {/* Testimonial */}
          <div className="bg-gray-900 rounded-lg p-8 md:p-10 border border-gray-800 shadow-lg min-h-[300px] flex flex-col justify-center">
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute -top-8 -left-4 text-red-500/20 text-6xl font-serif">"</div>
              
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                  }`}
                >
                  <blockquote className="text-lg md:text-xl text-gray-300 mb-6 relative z-10">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 border border-gray-700">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-red-500/10 flex items-center justify-center text-red-500">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-red-500 w-6" : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Video Showcase Section
const VideoShowcase = ({
  title,
  description,
  videoThumbnail,
  videoUrl,
  darkMode = true
}) => {
  const bgColor = darkMode ? "bg-black" : "bg-gray-100";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subtextColor = darkMode ? "text-gray-400" : "text-gray-600";
  
  return (
    <div className={`${bgColor} py-16 md:py-24`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
          <p className={subtextColor}>{description}</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Video container with red accents */}
          <div className="absolute -top-3 -left-3 bottom-8 right-8 border-2 border-red-500/20 rounded-lg"></div>
          
          <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-800 aspect-video cursor-pointer group">
            {/* Video thumbnail */}
            <img 
              src={videoThumbnail || "/api/placeholder/1280/720"} 
              alt="Video thumbnail"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <Play fill="white" size={32} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Contact CTA Section
const ContactCTA = ({
  title,
  description,
  email,
  phone,
  address,
  ctaText,
  ctaLink,
  socialLinks = []
}) => {
  return (
    <div className="bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-red-500/10 to-transparent opacity-30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-red-500/10 to-transparent opacity-20 rounded-tr-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-gray-400 mb-8">{description}</p>
            
            <div className="space-y-4 mb-8">
              {email && (
                <div className="flex items-center">
                  <Mail className="text-red-500 mr-3" size={20} />
                  <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">{email}</a>
                </div>
              )}
              
              {phone && (
                <div className="flex items-center">
                  <Phone className="text-red-500 mr-3" size={20} />
                  <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">{phone}</a>
                </div>
              )}
              
              {address && (
                <div className="flex items-center">
                  <MapPin className="text-red-500 mr-3" size={20} />
                  <span className="text-gray-300">{address}</span>
                </div>
              )}
            </div>
            
            {ctaText && (
              <a 
                href={ctaLink} 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
              >
                {ctaText}
                <ArrowRight size={18} className="ml-2" />
              </a>
            )}
          </div>
          
          {/* Form */}
          <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6">Invia un messaggio</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="La tua email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Messaggio</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Il tuo messaggio"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition-colors"
              >
                Invia messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo app with all components
export default function App() {
  // Demo content
  const heroContent = {
    title: "Innovazione Tecnologica per il Futuro Digitale",
    subtitle: "Soluzioni all'avanguardia per trasformare il tuo business e guidarlo verso nuovi orizzonti di successo nel mercato globale.",
    ctaText: "Scopri di più",
    ctaLink: "#",
    image: "/api/placeholder/1920/1080",
    overlayOpacity: 70,
    alignment: "left"
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
  
  const splitContent = {
    title: "Tecnologia all'avanguardia per il tuo business",
    description: "Le nostre soluzioni innovative permettono alle aziende di ogni dimensione di ottimizzare i processi, ridurre i costi e aumentare la produttività attraverso l'uso strategico della tecnologia.",
    image: "/api/placeholder/600/450",
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
  
  const testimonialContent = {
    title: "Cosa dicono i nostri clienti",
    subtitle: "Il successo dei nostri clienti è la nostra migliore referenza",
    testimonials: [
      {
        quote: "Grazie alla loro consulenza IT, abbiamo aumentato l'efficienza operativa del 35% e ridotto i costi di gestione. Un partner affidabile che consiglio vivamente.",
        name: "Marco Bianchi",
        position: "CEO, TechCorp Italia",
        avatar: "/api/placeholder/150/150"
      },
      {
        quote: "La loro soluzione di cybersecurity ha trasformato completamente la nostra sicurezza informatica. Professionalità e competenza ai massimi livelli.",
        name: "Laura Verdi",
        position: "CTO, Innovate Solutions",
        avatar: "/api/placeholder/150/150"
      },
      {
        quote: "Il supporto ricevuto durante la migrazione cloud è stato impeccabile. Un team di professionisti che sa come gestire progetti complessi con estrema efficienza.",
        name: "Alessandro Rossi",
        position: "IT Director, Global Industries",
        avatar: "/api/placeholder/150/150"
      }
    ]
  };
  
  const videoContent = {
    title: "Scopri la potenza della nostra piattaforma",
    description: "Un'esperienza utente straordinaria combinata con tecnologie all'avanguardia per trasformare il tuo business digitale.",
    videoThumbnail: "/api/placeholder/1280/720",
    videoUrl: "#",
    darkMode: true
  };
  
  const contactContent = {
    title: "Pronti a iniziare il tuo progetto?",
    description: "Contattaci oggi stesso per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi aziendali.",
    email: "info@tuaazienda.com",
    phone: "+39 02 1234567",
    address: "Via dell'Innovazione, 123 - Milano",
    ctaText: "Prenota una demo",
    ctaLink: "#",
    socialLinks: [
      { icon: "facebook", url: "#" },
      { icon: "twitter", url: "#" },
      { icon: "linkedin", url: "#" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Each component with section title */}
      <div className="border-b border-gray-800 pb-4 mb-8">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">1. Hero Section</h2>
          <p className="text-gray-400">Una sezione hero componibile con immagine di sfondo, overlay, titolo, sottotitolo e CTA.</p>
        </div>
      </div>
      <HeroSection {...heroContent} />
      
      <div className="border-b border-gray-800 pb-4 mb-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">2. Feature Grid</h2>
          <p className="text-gray-400">Una griglia di funzionalità o servizi con icone, titoli e descrizioni personalizzabili.</p>
        </div>
      </div>
      <FeatureGrid {...featuresContent} />
      
      <div className="border-b border-gray-800 pb-4 mb-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">3. Split Section</h2>
          <p className="text-gray-400">Sezione con immagine e testo affiancati, con bullet points e CTA.</p>
        </div>
      </div>
      <SplitSection {...splitContent} />
      
      <div className="border-b border-gray-800 pb-4 mb-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">4. Testimonial Carousel</h2>
          <p className="text-gray-400">Carosello di testimonianze con avatar, nome e posizione aziendale.</p>
        </div>
      </div>
      <TestimonialCarousel {...testimonialContent} />
      
      <div className="border-b border-gray-800 pb-4 mb-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">5. Video Showcase</h2>
          <p className="text-gray-400">Sezione per presentare un video con thumbnail, titolo e descrizione.</p>
        </div>
      </div>
      <VideoShowcase {...videoContent} />
      
      <div className="border-b border-gray-800 pb-4 mb-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h2 className="text-2xl font-bold mb-2">6. Contact CTA</h2>
          <p className="text-gray-400">Sezione contatti con form, informazioni e call-to-action.</p>
        </div>
      </div>
      <ContactCTA {...contactContent} />
    </div>
  );
}