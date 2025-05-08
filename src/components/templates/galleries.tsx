import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

export function InteractiveGallery({
  title = "Esplora il Progetto",
  description = "Visualizza i dettagli del nostro progetto attraverso questa galleria interattiva. Clicca sulle immagini per una vista dettagliata.",
  images = [
    {
      src: "https://steantycip.com/wp-content/uploads/2021/04/Digital-projection-multiview-1__1000x772.jpg",
      alt: "Dashboard principale",
      caption: "Dashboard principale con metriche in tempo reale e controlli personalizzabili"
    },
    {
      src: "https://steantycip.com/wp-content/uploads/2021/04/DP2-RS__1000x772.jpg", 
      alt: "Interfaccia di analisi",
      caption: "Interfaccia di analisi con grafici interattivi e filtri avanzati"
    },
    {
      src: "https://steantycip.com/wp-content/uploads/2021/04/saving-time.jpg",
      alt: "Configurazione sistema",
      caption: "Pannello di configurazione con opzioni avanzate per amministratori"
    },
    {
      src: "https://steantycip.com/wp-content/uploads/2021/05/IMG_3917-Renault.jpg",
      alt: "Visualizzazione dati",
      caption: "Visualizzazione dati con rappresentazioni 3D interattive"
    },
    {
      src: "https://steantycip.com/wp-content/uploads/2021/05/20170301_144231__1000x772.jpg",
      alt: "App mobile",
      caption: "Versione mobile con funzionalità complete e sincronizzazione in tempo reale"
    }
  ]
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const galleryRef = useRef(null);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleZoom = (image) => {
    setZoomedImage(image);
  };
  
  const handleCloseZoom = () => {
    setZoomedImage(null);
  };
  
  const handleMouseMove = (e) => {
    if (!zoomedImage) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    
    setZoomPosition({ x, y });
  };
  
  return (
    <div className="w-full bg-black text-white py-16 lg:py-24 relative overflow-hidden" id="gallery">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-red-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{description}</p>
        </div>
        
        {/* Main gallery */}
        <div className="relative" ref={galleryRef}>
          {/* Featured image */}
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-800 mb-4">
            <div 
              className="cursor-zoom-in w-full h-full"
              onClick={() => handleZoom(images[currentIndex])}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay with zoom icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-red-500/80 p-2 rounded-full">
                  <ZoomIn size={24} />
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-500/80 p-2 rounded-full transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-500/80 p-2 rounded-full transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm md:text-base">{images[currentIndex].caption}</p>
            </div>
            
            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          
          {/* Thumbnail navigation */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 mt-4">
            {images.map((image, idx) => (
              <div 
                key={idx}
                className={`aspect-w-16 aspect-h-9 rounded overflow-hidden cursor-pointer transition-all
                  ${idx === currentIndex ? 'ring-2 ring-red-500 scale-105 z-10' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setCurrentIndex(idx)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Zoomed image modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseZoom}
        >
          <div className="absolute top-4 right-4">
            <button 
              className="bg-red-500/80 p-2 rounded-full hover:bg-red-600 transition-colors"
              onClick={handleCloseZoom}
            >
              <X size={24} />
            </button>
          </div>
          
          <div 
            className="relative max-w-5xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
          >
            <div className="relative">
              <img 
                src={zoomedImage.src} 
                alt={zoomedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
                style={{
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white">{zoomedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 right-1/4 w-12 h-12">
        <div className="w-full h-[1px] bg-red-500"></div>
        <div className="h-full w-[1px] bg-red-500 absolute right-0"></div>
      </div>
    </div>
  );
}