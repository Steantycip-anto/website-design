import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allCustomerLogos = [
  { id: 1, name: 'Cliente 1', logo: 'https://steantycip.com/wp-content/uploads/2021/04/AIRBUS-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 2, name: 'Cliente 2', logo: 'https://steantycip.com/wp-content/uploads/2021/06/1280px-Leonardo_logo.svg.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 3, name: 'Cliente 3', logo: 'https://steantycip.com/wp-content/uploads/2021/04/58ee8d113545163ec1942cd3-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 4, name: 'Cliente 4', logo: 'https://steantycip.com/wp-content/uploads/2021/04/BAE_Systems_logo.svg-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 5, name: 'Cliente 5', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Safran-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 6, name: 'Cliente 6', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Thales-Logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 7, name: 'Cliente 7', logo: 'https://steantycip.com/wp-content/uploads/2021/04/DGA-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 8, name: 'Cliente 8', logo: 'https://steantycip.com/wp-content/uploads/2021/04/naval-group-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 9, name: 'Cliente 9', logo: 'https://steantycip.com/wp-content/uploads/2021/04/logo-elettronica-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 10, name: 'Cliente 10', logo: 'https://steantycip.com/wp-content/uploads/2021/04/lockheed-martin.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 11, name: 'Cliente 11', logo: 'https://steantycip.com/wp-content/uploads/2021/05/French-MOD.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 12, name: 'Cliente 12', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Spanish-MOD-logo-1.jpg', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 13, name: 'Cliente 13', logo: 'https://steantycip.com/wp-content/uploads/2021/04/MINDEF-Logo_svg-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 14, name: 'Cliente 14', logo: 'https://steantycip.com/wp-content/uploads/2021/04/UK-MOD-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 15, name: 'Cliente 15', logo: 'https://steantycip.com/wp-content/uploads/2021/04/FFI-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 16, name: 'Cliente 16', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Universite_de_Lille_logo.svg-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 17, name: 'Cliente 17', logo: 'https://steantycip.com/wp-content/uploads/2021/04/University-of-Huddersfield-1-e1645792114485.gif', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 19, name: 'Cliente 19', logo: 'https://steantycip.com/wp-content/uploads/2021/04/University_of_Bath_logo.svg-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 20, name: 'Cliente 20', logo: 'https://steantycip.com/wp-content/uploads/2021/04/universite-de-caen-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." }, { id: 21, name: 'Cliente 21', logo: 'https://steantycip.com/wp-content/uploads/2021/05/university-of-leeds-logo-6B8E9B14B5-seeklogo.com_.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 22, name: 'Cliente 22', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Ecole_normale_superieure_de_Rennes-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 23, name: 'Cliente 23', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Renault_logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 24, name: 'Cliente 24', logo: 'https://steantycip.com/wp-content/uploads/2021/04/PSA-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 25, name: 'Cliente 25', logo: 'https://steantycip.com/wp-content/uploads/2021/04/Forth-ports-logo-1.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
  { id: 26, name: 'Cliente 26', logo: 'https://steantycip.com/wp-content/uploads/2021/06/Arup_Logo_Red_RGB-e1645791964129.png', review: "Morbi quis magna at dui facilisis dignissim ornare et augue. Sed vel ullamcorper metus. Sed quis tristique orci. Cras feugiat eget arcu sit amet sagittis. Vivamus vel condimentum tellus. Nunc ut ante leo. Cras tincidunt efficitur ullamcorper. Sed iaculis tellus eget pellentesque pharetra. Duis mattis, quam eget commodo condimentum, velit dolor laoreet mauris, ornare tincidunt sem ligula ac massa. Nunc ex mi, fringilla ac sodales et, pulvinar sit amet ipsum. Aliquam ac lacus dolor. Praesent a ante eu dui elementum egestas." },
];


export function Customers1() {

  // Numero di loghi da mostrare per pagina (2 righe con 5 loghi ciascuna)
  const logosPerPage = 9;

  // Stato per i loghi attualmente visualizzati
  const [currentLogos, setCurrentLogos] = useState(allCustomerLogos.slice(0, logosPerPage));
  const [nextLogos, setNextLogos] = useState(allCustomerLogos.slice(logosPerPage, logosPerPage * 2));
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(-1);

  // Funzione per cambiare pagina
  const changePage = () => {
    setIsAnimating(true);
    setAnimatingIndex(0);
  };

  // Effetto per l'animazione sequenziale
  useEffect(() => {
    if (isAnimating && animatingIndex < logosPerPage) {
      const timer = setTimeout(() => {
        setAnimatingIndex(prevIndex => prevIndex + 1);
      }, 150); // Velocità dell'animazione a cascata

      return () => clearTimeout(timer);
    } else if (isAnimating && animatingIndex >= logosPerPage) {
      // Quando l'animazione è completa, aggiorna i loghi
      const startIndex = currentLogos[0].id % allCustomerLogos.length;
      const nextStartIndex = (startIndex + logosPerPage) % allCustomerLogos.length;

      // Calcola gli indici circolari per ottenere gli elementi successivi
      const nextBatch = [];
      for (let i = 0; i < logosPerPage; i++) {
        const index = (nextStartIndex + i) % allCustomerLogos.length;
        nextBatch.push(allCustomerLogos[index]);
      }

      setCurrentLogos(nextLogos);
      setNextLogos(nextBatch);
      setIsAnimating(false);
      setAnimatingIndex(-1);
    }
  }, [isAnimating, animatingIndex]);

  // Effetto per cambiare pagina ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      changePage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentLogos, nextLogos]);

  return (
    <div className="bg-black w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">THEY TRUST US</h2>

        <div className="grid grid-cols-5 gap-6">
          {currentLogos.map((logo, index) => {
            const isHidden = isAnimating && index <= animatingIndex;

            return (
              <div
                key={logo.id}
                className={`relative transition-all duration-300 ${isHidden ? 'opacity-0 transform translate-y-8' : 'opacity-100'}`}
              >
                <div className="bg-black p-4 rounded border border-white/30 group transition-all duration-300 hover:border-white flex items-center justify-center h-32">
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:filter-none"
                  />
                </div>
              </div>
            );
          })}
          <div
            key="number"
            className={`relative transition-all duration-300 ${isAnimating && currentLogos.length - 1 <= animatingIndex ? 'opacity-0 transform translate-y-8' : 'opacity-100'}`}
          >
            <div className="bg-black p-4 rounded border border-white/30 group transition-all duration-300 hover:border-white flex items-center justify-center h-32">
              <div className="max-h-full max-w-full flex items-center justify-center object-contain  transition-all duration-300 text-red-600 text-5xl text-bold">
                +340
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Customers2() {
  // Assumiamo che allCustomerLogos sia già disponibile

  // Numero di loghi da mostrare alla volta
  const logosPerPage = 8;

  // Stati per gestire i loghi e le animazioni
  const [currentLogos, setCurrentLogos] = useState(allCustomerLogos.slice(0, logosPerPage));
  const [nextLogos, setNextLogos] = useState(allCustomerLogos.slice(logosPerPage, logosPerPage * 2));
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatingIndex, setAnimatingIndex] = useState(-1);

  // Funzione per cambiare pagina
  const changePage = () => {
    setIsAnimating(true);
    setAnimatingIndex(0);
  };

  // Effetto per l'animazione sequenziale
  useEffect(() => {
    if (isAnimating && animatingIndex < logosPerPage) {
      const timer = setTimeout(() => {
        setAnimatingIndex(prevIndex => prevIndex + 1);
      }, 150);

      return () => clearTimeout(timer);
    } else if (isAnimating && animatingIndex >= logosPerPage) {
      // Aggiorna i loghi quando l'animazione è completa
      const startIndex = (currentLogos[0]?.id || 1) % allCustomerLogos.length;
      const nextStartIndex = (startIndex + logosPerPage) % allCustomerLogos.length;

      const nextBatch = [];
      for (let i = 0; i < logosPerPage; i++) {
        const index = (nextStartIndex + i) % allCustomerLogos.length;
        nextBatch.push(allCustomerLogos[index]);
      }

      setCurrentLogos(nextLogos);
      setNextLogos(nextBatch);
      setIsAnimating(false);
      setAnimatingIndex(-1);
    }
  }, [isAnimating, animatingIndex]);

  // Effetto per cambiare pagina ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      changePage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentLogos, nextLogos]);

  // Calcola le posizioni in un cerchio
  const getPosition = (index, total) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 200;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  return (
    <div className="bg-black w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-16 text-center">THEY TRUST US</h2>

        <div className="my-8 relative h-96 flex items-center justify-center">
          {currentLogos.map((logo, index) => {
            const isHidden = isAnimating && index <= animatingIndex;
            const position = getPosition(index, currentLogos.length);

            return (
              <div
                key={logo.id}
                className={`absolute transition-all duration-500 ${isHidden ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  transformOrigin: 'center center',
                  zIndex: currentLogos.length - index
                }}
              >
                <div className="bg-black p-3 w-24 h-24 rounded-full border border-white/30 group transition-all duration-300 hover:border-white flex items-center justify-center">
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:filter-none"
                  />
                </div>
              </div>
            );
          })}

          <div className="w-36 h-36 rounded-full bg-red-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="font-bold text-2xl">340+</div>
              <div className="text-sm">Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Customers3() {
  // Assumiamo che allCustomerLogos sia già disponibile

  const logosPerPage = 6;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Funzione per ottenere i loghi da visualizzare
  const getVisibleLogos = () => {
    const result = [];
    for (let i = 0; i < logosPerPage; i++) {
      const index = (currentIndex + i) % allCustomerLogos.length;
      result.push(allCustomerLogos[index]);
    }
    return result;
  };

  const moveCarousel = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Calcoliamo il nuovo indice
    const newIndex = (currentIndex + 1) % allCustomerLogos.length;
    setCurrentIndex(newIndex);

    // Reset dell'animazione
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Tempo totale dell'animazione
  };

  // Cambio automatico ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div className="bg-black w-full py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">I Nostri Clienti</h2>

        <div ref={carouselRef} className="relative">
          <div className="overflow-hidden">
            <div className={`flex transition-transform duration-1500 ease-in-out`}>
              {getVisibleLogos().map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className={`flex-none w-1/3 md:w-1/6 px-4 transition-all duration-700 ${isAnimating && index === 0 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                    }`}
                  style={{
                    transitionDelay: isAnimating ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <div className="bg-black p-4 h-32 rounded border border-white/30 group transition-all duration-300 hover:border-white flex items-center justify-center">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:filter-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex % 5 ? 'bg-red-600 w-6' : 'bg-gray-600'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export function LogoWall3D() {
  // Assumiamo che allCustomerLogos sia già disponibile

  const logosPerPage = 12;
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  // Ottiene un batch di loghi basato sull'indice corrente
  const getCurrentLogos = () => {
    const startIndex = (currentBatch * logosPerPage) % allCustomerLogos.length;
    const result = [];

    for (let i = 0; i < logosPerPage; i++) {
      const index = (startIndex + i) % allCustomerLogos.length;
      result.push(allCustomerLogos[index]);
    }

    return result;
  };

  // Gestisce la transizione al batch successivo
  const nextBatch = () => {
    setIsAnimating(true);
    setAnimationStep(0);
  };

  // Gestisce l'animazione passo-passo
  useEffect(() => {
    if (!isAnimating) return;

    if (animationStep < logosPerPage) {
      const timer = setTimeout(() => {
        setAnimationStep(prev => prev + 1);
      }, 120);

      return () => clearTimeout(timer);
    } else {
      // Quando l'animazione è completa, aggiorna al prossimo batch
      setCurrentBatch(prev => (prev + 1) % Math.ceil(allCustomerLogos.length / logosPerPage));
      setIsAnimating(false);
      setAnimationStep(0);
    }
  }, [isAnimating, animationStep]);

  // Cambia automaticamente ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      nextBatch();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBatch]);

  return (
    <div className="bg-black w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">Trusted By</h2>

        <div className="perspective-1000">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getCurrentLogos().map((logo, index) => {
              const isAnimating = animationStep > index;

              return (
                <div
                  key={`${logo.id}-${index}`}
                  className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 transform rotateY-90' : 'opacity-100 transform rotateY-0'
                    }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isAnimating ? 'rotateY(90deg)' : 'rotateY(0deg)'
                  }}
                >
                  <div className="bg-black p-4 rounded border border-white/30 group transition-all duration-300 hover:border-red-600 flex items-center justify-center h-40">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain filter grayscale transition-all duration-300 group-hover:filter-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="bg-transparent border border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
            onClick={nextBatch}
          >
            View More Partners
          </button>
        </div>
      </div>
    </div>
  );
}


export function ExpandingGridLogos() {
  // Assumiamo che allCustomerLogos sia già disponibile

  const logosPerRow = 5;
  const numRows = 2;
  const logosPerPage = logosPerRow * numRows;

  const [currentPage, setCurrentPage] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionIndex, setTransitionIndex] = useState(-1);
  const [hoveredLogo, setHoveredLogo] = useState(null);

  // Funzione per ottenere i loghi della pagina attuale
  const getPageLogos = (pageIndex) => {
    const startIndex = (pageIndex * logosPerPage) % allCustomerLogos.length;
    const result = [];

    for (let i = 0; i < logosPerPage; i++) {
      const index = (startIndex + i) % allCustomerLogos.length;
      result.push(allCustomerLogos[index]);
    }

    return result;
  };

  // Inizializza i loghi visibili
  useEffect(() => {
    setVisibleLogos(getPageLogos(currentPage));
  }, []);

  // Gestisce la transizione alla pagina successiva
  const transitionToNextPage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTransitionIndex(0);
  };

  // Effetto per gestire l'animazione sequenziale
  useEffect(() => {
    if (!isTransitioning) return;

    if (transitionIndex < logosPerPage) {
      const timer = setTimeout(() => {
        setTransitionIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Quando tutti i loghi sono scomparsi, carica la nuova pagina
      const nextPage = (currentPage + 1) % Math.ceil(allCustomerLogos.length / logosPerPage);
      setCurrentPage(nextPage);
      setVisibleLogos(getPageLogos(nextPage));
      setIsTransitioning(false);
      setTransitionIndex(-1);
    }
  }, [isTransitioning, transitionIndex]);

  // Cambia pagina ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      transitionToNextPage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage, isTransitioning]);

  return (
    <div className="bg-black w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-2 text-center">I Nostri Clienti</h2>
        <p className="text-gray-400 text-center mb-12">Partner che si affidano a ST Engineering Antycip</p>

        <div className="relative grid grid-cols-5 gap-4">
          {visibleLogos.map((logo, index) => {
            const row = Math.floor(index / logosPerRow);
            const col = index % logosPerRow;
            const isHidden = isTransitioning && index <= transitionIndex;
            const isExpanded = hoveredLogo === logo.id;

            return (
              <div
                key={`${logo.id}-${index}`}
                className={`relative transition-all duration-300 ${isHidden ? 'opacity-0 transform translate-y-8' : 'opacity-100'
                  }`}
                style={{
                  transitionDelay: isTransitioning ? `${index * 50}ms` : '0ms',
                  zIndex: isExpanded ? 10 : 1
                }}
                onMouseEnter={() => setHoveredLogo(logo.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div
                  className={`bg-black p-4 rounded border border-white/30 group transition-all duration-300 hover:border-white flex items-center justify-center ${isExpanded ? 'scale-125 shadow-lg shadow-red-600/20' : ''
                    }`}
                  style={{
                    height: '120px',
                    transformOrigin: 'center center'
                  }}
                >
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${isExpanded ? 'filter-none' : 'filter grayscale'
                      }`}
                  />
                </div>

                {isExpanded && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 border border-red-600 p-3 rounded text-center text-white text-sm z-20">
                    {logo.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: Math.min(5, Math.ceil(allCustomerLogos.length / logosPerPage)) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPage % 5 ? 'bg-red-600' : 'bg-gray-600'
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

//with reviews

export const CarouselVariant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === allCustomerLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          <span className="text-red-600">Clienti</span> soddisfatti
        </h2>

        {/* Logos Bar */}
        <div className="flex overflow-hidden mb-16">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...allCustomerLogos, ...allCustomerLogos].map((customer, index) => (
              <div key={`logo-${customer.id}-${index}`} className="h-16 w-32 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Review */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div className="h-20 w-20 mx-auto mb-6">
              <img
                src={allCustomerLogos[currentIndex].logo}
                alt={allCustomerLogos[currentIndex].name}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-gray-700 italic text-lg mb-6">"{allCustomerLogos[currentIndex].review}"</p>
            <p className="font-semibold text-red-600">{allCustomerLogos[currentIndex].name}</p>
          </motion.div>

          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {allCustomerLogos.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const GridVariant = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Cosa dicono i <span className="text-red-500">nostri clienti</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Collaboriamo con aziende di ogni dimensione per creare soluzioni personalizzate
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {allCustomerLogos.map((customer) => (
            <motion.div
              key={customer.id}
              whileHover={{
                scale: 1.05,
                filter: "grayscale(0)"
              }}
              className="bg-gray-900 rounded-lg p-6 flex items-center justify-center h-32"
              initial={{ filter: "grayscale(100%)" }}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                className="max-h-16 max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCustomerLogos.slice(0, 3).map((customer) => (
            <motion.div
              key={`review-${customer.id}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: customer.id * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xl">{customer.name}</h3>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400">"{customer.review}"</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            Vedi tutte le recensioni
          </button>
        </div>
      </div>
    </section>
  );
};


export const TabsVariant = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Logos */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-black mb-6">
              Aziende che si <span className="text-red-600">fidano</span> di noi
            </h2>
            <div className="flex flex-wrap gap-4">
              {allCustomerLogos.slice(0, 12).map((customer, index) => (
                <motion.button
                  key={customer.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-4 rounded-lg border-2 transition-all ${activeTab === index
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="h-10 w-20 object-contain"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Section: Testimonials */}
          <div className="md:w-2/3 md:pl-12 flex flex-col justify-center">
            <div className="relative bg-gray-100 p-8 rounded-xl">
              {/* Red accent */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-red-600"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-12 h-12 text-red-200 mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                    {allCustomerLogos[activeTab].review}
                  </p>

                  <div className="flex items-center">
                    <div className="h-14 w-14 bg-white p-2 rounded-full shadow-md mr-4">
                      <img
                        src={allCustomerLogos[activeTab].logo}
                        alt={allCustomerLogos[activeTab].name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{allCustomerLogos[activeTab].name}</h3>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {allCustomerLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === activeTab ? 'bg-red-600 w-8' : 'bg-gray-300 w-2'
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GridCarouselVariant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === allCustomerLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Cosa dicono i <span className="text-red-500">nostri clienti</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Collaboriamo con aziende di ogni dimensione per creare soluzioni personalizzate
        </p>

        {/* Logo grid */}
        <div className="flex overflow-hidden mb-16">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[...allCustomerLogos, ...allCustomerLogos].map((customer, index) => (
              <motion.div
                key={`logo-${customer.id}-${index}`}
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0)"
                }}
                className="bg-gray-900 rounded-lg p-6 flex items-center justify-center h-32 w-64"
                initial={{ filter: "grayscale(100%)" }}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCustomerLogos.slice(0, 3).map((customer) => (
            <motion.div
              key={`review-${customer.id}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: customer.id * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 mr-4">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xl">{customer.name}</h3>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-400">"{customer.review}"</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
            Vedi tutte le recensioni
          </button>
        </div>
      </div>
    </section>
  );
};