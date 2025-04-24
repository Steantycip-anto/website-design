import { Button } from "../utils"
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Hero Section Components
export const HeroSplit = () => (
  <section className="bg-white pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 z-10">
          <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm mb-4">
            Since 1997
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">See the future</h1>
          <p className="text-xl text-gray-600 mb-8">
            Pioneering simulation, display, and virtual reality solutions for global challenges
          </p>
          <Button text="Discover Our Solutions" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <video
            className="w-[150%] md:w-[200%] -translate-x-1/4 -scale-[200%] rounded-lg opacity-50"
            src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  </section>

);

export const HeroFullScreen = () => (
  <section className="relative min-h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-black">
      <video
        className="w-full h-full object-cover opacity-40"
        src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
    <div className="container mx-auto px-6 text-center relative z-10 pt-24">
      <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
        See the future since 1997
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Harnessing complex technology to create innovative solutions at the intersection of human ingenuity and cutting-edge innovation
      </p>
      <Button text="Explore Our Journey" />
    </div>
  </section>
);

export const HeroAnimated = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-36">
        <div className="max-w-3xl">
          <div className="overflow-hidden h-20 mb-2">
            <div className="transform translate-y-0 transition-transform duration-700 ease-out text-white text-6xl font-bold">See</div>
          </div>
          <div className="overflow-hidden h-20 mb-2">
            <div className="transform translate-y-0 transition-transform duration-700 ease-out delay-200 text-white text-6xl font-bold">the future</div>
          </div>
          <div className="overflow-hidden h-20 mb-8">
            <div className="transform translate-y-0 transition-transform duration-700 ease-out delay-300 text-white text-6xl font-bold">since 1997</div>
          </div>

          <p className="text-xl text-gray-300 mb-8">
            Anticipating industry trends and delivering cutting-edge solutions that simplify the complex
          </p>
          <Button text="Join Our Vision" />
        </div>
      </div>
    </section>
  );
};

// Variante 2 - Centré avec overlay de texte sur l'image
export function Variant1() {
  return (
    <div className="bg-black text-white overflow-hidden rounded-lg relative h-96 lg:h-screen max-h-[600px]">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>


      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="bg-red-600 px-3 py-1 text-sm font-bold">1997 - 2025</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">See the FUTURE since 1997</h1>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Créateurs de solutions technologiques pour visualiser et simuler le monde de demain</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm transition-all">
              Nos solutions
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-sm transition-all">
              À propos de nous
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 w-full text-center">
        <div className="text-lg font-bold">ST ENGINEERING ANTYCIP</div>
      </div>
    </div>
  );
}

// Variante 4 - Modern avec éléments flottants
export function Variant2() {
  return (
    <div className="bg-black text-white overflow-hidden rounded-lg relative h-96 lg:h-[600px]">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>

      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-50"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute top-8 left-8 z-20">
        <h3 className="text-xl font-bold">ST ENGINEERING ANTYCIP</h3>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <div className="mb-4 w-20 h-1 bg-red-600 mx-auto"></div>
          <h1 className="text-4xl lg:text-7xl font-bold mb-6">See the FUTURE <br/><span className="text-red-600">since 1997</span></h1>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Leaders en technologies immersives et solutions de visualisation
          </p>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-none transition-all">
            Découvrir l'innovation
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-8 right-8 text-right z-20">
        <p className="text-sm text-gray-400">HIGH DEFINITION PROJECTS</p>
      </div>
    </div>
  );
}

// Variante 5 - Style technique avec grille
export function Variant3() {
  return (
    <div className="bg-black text-white overflow-hidden rounded-lg relative h-96 lg:h-[550px]">
      {/* Overlay grid pattern */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2 lg:block hidden">
        <div className="h-full w-full bg-gradient-to-l from-gray-900 via-gray-900/60 to-transparent"></div>
        <img 
          src="/api/placeholder/600/800" 
          alt="Technologie innovante" 
          className="absolute top-0 right-0 h-full w-full object-cover mix-blend-luminosity opacity-60"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-16 z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-red-600"></div>
            <span className="text-red-600 font-bold">ST ENGINEERING ANTYCIP</span>
          </div>
        </div>

        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            See the FUTURE <br />
            <div className="flex items-center gap-3">
              <span className="text-red-600">since</span>
              <span className="text-3xl lg:text-5xl">1997</span>
            </div>
          </h1>
          <p className="text-gray-300 mb-8">
            Experts en simulation visuelle et réalité virtuelle appliquées à la recherche, la défense et l'industrie
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition-all">
              Nos solutions
            </button>
            <button className="bg-black border border-white hover:bg-white/10 text-white px-6 py-3 transition-all">
              Contact
            </button>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="hidden lg:block">
            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            </div>
          </div>
          <p className="text-sm text-gray-400">HIGH DEFINITION PROJECTS</p>
        </div>
      </div>
    </div>
  );
}

export const Numbers1 = () => {
  const statsRef = useRef(null);
  
  useEffect(() => {
    const headings = document.querySelectorAll('.animate-heading');
    const stats = document.querySelectorAll('.stat-item');
    
    gsap.fromTo(headings, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    gsap.fromTo(stats, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out", delay: 0.8 }
    );
  }, []);
  
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-36">
        <div className="max-w-3xl">
          <div className="overflow-hidden h-20 mb-2">
            <div className="animate-heading text-white text-6xl font-bold">See</div>
          </div>
          <div className="overflow-hidden h-20 mb-2">
            <div className="animate-heading text-white text-6xl font-bold">the future</div>
          </div>
          <div className="overflow-hidden h-20 mb-8">
            <div className="animate-heading text-white text-6xl font-bold">since 1997</div>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Anticipating industry trends and delivering cutting-edge solutions that simplify the complex
          </p>
          <Button text="Join Our Vision" />
          
          {/* Company Stats - Floating Cards */}
          <div ref={statsRef} className="flex flex-wrap mt-16 gap-6">
            <div className="stat-item bg-black/80 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg shadow-red-900/20">
              <div className="text-red-500 text-5xl font-bold mb-1">340+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Global Clients</div>
            </div>
            <div className="stat-item bg-black/80 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg shadow-red-900/20">
              <div className="text-red-500 text-5xl font-bold mb-1">25+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Years Experience</div>
            </div>
            <div className="stat-item bg-black/80 backdrop-blur-sm border border-gray-800 p-6 rounded-lg shadow-lg shadow-red-900/20">
              <div className="text-red-500 text-5xl font-bold mb-1">4+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Numbers2= () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Grid layout with 2 columns */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-screen">
        {/* Left Column - Main Content */}
        <div className="w-full md:w-3/5 pt-20 md:pt-0">
          <div className="overflow-hidden h-20 mb-2">
            <div className={`transform ${isLoaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 ease-out text-white text-6xl font-bold`}>See</div>
          </div>
          <div className="overflow-hidden h-20 mb-2">
            <div className={`transform ${isLoaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 ease-out delay-200 text-white text-6xl font-bold`}>the future</div>
          </div>
          <div className="overflow-hidden h-20 mb-8">
            <div className={`transform ${isLoaded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700 ease-out delay-300 text-white text-6xl font-bold`}>since 1997</div>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Anticipating industry trends and delivering cutting-edge solutions that simplify the complex
          </p>
          <Button text="Join Our Vision" />
        </div>
        
        {/* Right Column - Stats */}
        <div className="w-full md:w-2/5 mt-16 md:mt-0">
          <div className={`grid grid-cols-1 gap-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* Stats with line connection design */}
            <div className="relative">
              <div className="absolute left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
              
              <div className="stat-box pl-32 relative">
                <div className="absolute left-0 w-20 h-20 flex items-center justify-center bg-black border border-gray-700 rounded-full">
                  <span className="text-red-500 text-3xl font-bold">340+</span>
                </div>
                <div className="absolute left-24 top-10 w-8 h-px bg-red-500"></div>
                <h3 className="text-white text-2xl font-bold mb-2">Global Clients</h3>
                <p className="text-gray-400">Trusted by industry leaders worldwide</p>
              </div>
              
              <div className="stat-box pl-32 relative mt-16">
                <div className="absolute left-0 w-20 h-20 flex items-center justify-center bg-black border border-gray-700 rounded-full">
                  <span className="text-red-500 text-3xl font-bold">25+</span>
                </div>
                <div className="absolute left-24 top-10 w-8 h-px bg-red-500"></div>
                <h3 className="text-white text-2xl font-bold mb-2">Years Experience</h3>
                <p className="text-gray-400">Decades of industry expertise</p>
              </div>
              
              <div className="stat-box pl-32 relative mt-16">
                <div className="absolute left-0 w-20 h-20 flex items-center justify-center bg-black border border-gray-700 rounded-full">
                  <span className="text-red-500 text-3xl font-bold">4+</span>
                </div>
                <div className="absolute left-24 top-10 w-8 h-px bg-red-500"></div>
                <h3 className="text-white text-2xl font-bold mb-2">Countries</h3>
                <p className="text-gray-400">Global presence and perspective</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, label, delay }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Converti target in numero rimuovendo il '+' se presente
    const end = parseInt(target.replace('+', ''));
    let startTime;
    
    // Durata dell'animazione in ms
    const duration = 10000;
    
    // Funzione per l'animazione del contatore
    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime + delay;
      
      // Calcola la percentuale di completamento
      const progress = Math.min(elapsed / duration, 1);
      
      // Applica easing per un'animazione più naturale
      const easedProgress = easeOutExpo(progress);
      
      // Calcola il valore corrente
      const currentValue = Math.floor(easedProgress * end);
      setCount(currentValue);
      
      // Continua l'animazione finché non è completa
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    // Funzione di easing per un'animazione più fluida
    const easeOutExpo = (x) => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };
    
    // Avvia l'animazione
    const animationFrame = requestAnimationFrame(updateCounter);
    
    // Pulizia
    return () => cancelAnimationFrame(animationFrame);
  }, [target, delay]);
  
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold">
        <span className="text-red-500">{count}</span>
        <span className="text-red-500">+</span>
      </div>
      <div className="text-gray-300 text-sm uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}

export const Numbers3 = () => {
  const headingVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: custom * 0.2 }
    })
  };
  
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-60"
          src="https://steantycip.com/wp-content/uploads/2021/04/Anycip-main-video-v2-1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-end mb-12">
            <div className="md:w-2/3">
              {/* Heading animations */}
              <motion.div 
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={headingVariants}
              >
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                  See
                </h1>
              </motion.div>
              
              <motion.div 
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={headingVariants}
              >
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                  the future
                </h1>
              </motion.div>
              
              <motion.div 
                className="overflow-hidden"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={headingVariants}
              >
                <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                  since 1997
                </h1>
              </motion.div>
            </div>
            
            {/* Red vertical bar and stats */}
            <div className="hidden md:block md:w-1/3 relative pl-8 ml-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-red-600"></div>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Anticipating industry trends and delivering cutting-edge solutions that simplify the complex
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <Button text="Join Our Vision" />
              </motion.div>
            </div>
          </div>
          
          {/* Mobile paragraph */}
          <motion.div 
            className="md:hidden mb-8 text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Anticipating industry trends and delivering cutting-edge solutions that simplify the complex
          </motion.div>
          
          {/* Mobile button */}
          <motion.div 
            className="md:hidden mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Button text="Join Our Vision" />
          </motion.div>
          
          {/* Company Stats - Horizontal with animated counters */}
          <motion.div 
            className="mt-16 py-6 px-4 md:px-8 border-t border-b border-gray-800"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <div className="grid grid-cols-3 gap-4 md:gap-12">
              <Counter target="340+" label="Global Clients" delay={0} />
              <Counter target="25+" label="Years Experience" delay={200} />
              <Counter target="4+" label="Countries" delay={400} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};