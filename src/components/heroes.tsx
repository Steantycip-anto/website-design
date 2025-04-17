import { Button } from "../utils"

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
  const floatingElements = Array(3).fill(null);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.1)1px,transparent_1px)] bg-[length:50px_50px]"></div>

      {/* Floating elements */}
      {floatingElements.map((_, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-red-600 bg-opacity-20 animate-float"
          style={{
            width: `${(index + 1) * 100}px`,
            height: `${(index + 1) * 100}px`,
            top: `${20 + index * 20}%`,
            left: `${20 + index * 25}%`,
            animationDelay: `${index * -5}s`
          }}
        />
      ))}

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