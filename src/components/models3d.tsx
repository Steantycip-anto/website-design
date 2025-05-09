"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Info, Box, Send } from 'lucide-react';
import { CameraControls, Environment, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { useRouter } from 'next/navigation';
import { models} from "@/lib/data";

const Env = ({ setLoaded }) => {
  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return <Environment preset="city" />
};

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const mesh = useRef();

  return (
    <mesh ref={mesh} rotation={[0, -0.4, 0]}>
      <primitive object={scene.clone()} />
    </mesh>
  );
};

export const ModelViewer = ({ selectedModel, isInfoOpen, setIsInfoOpen, maxHeight = false }) => {
  const [loaded, setLoaded] = useState(false);
  const cameraRef = useRef();

  return <div className={"bg-gray-900 rounded-lg overflow-hidden relative " + (maxHeight ? "h-full" : "h-96 md:h-[500px]")}>
    <Canvas className="h-full w-full">
      <Env setLoaded={setLoaded} />
      {loaded && <Model modelPath={selectedModel.modelPath} />}
      <CameraControls ref={cameraRef} maxDistance={10} minDistance={3} />
    </Canvas>

    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
      <div className="text-center px-4">
        <div className="mb-4 w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center">
          <Box size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">{selectedModel.title}</h3>
        <p className="text-gray-400 text-sm">{selectedModel.category}</p>

        {/* This would be replaced with an actual 3D viewer in a real implementation */}
        <p className="mt-6 text-gray-500 text-sm italic">
          3D model viewer would be loaded here
        </p>
      </div>
    </div>

    {/* Info panel */}
    <div
      className={`
        absolute z-[15] bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm
        transition-all duration-300 transform p-6
        ${isInfoOpen ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <h3 className="text-xl font-bold mb-2">{selectedModel.title}</h3>
      <p className="mb-4 text-gray-300">{selectedModel.description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
          {selectedModel.category}
        </span>
        <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full">
          Simulation
        </span>
        <span className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full">
          Training
        </span>
      </div>
    </div>

    {/* Controls */}
    <div className="absolute top-4 right-4 flex gap-2">
      <button
        className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-red-600 transition-colors"
        onClick={() => setIsInfoOpen(!isInfoOpen)}
        title="Model Information"
      >
        <Info size={20} />
      </button>
    </div>
  </div>
}

export function Models1() {
  // Stato per il modello selezionato (default: primo modello)
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">3D MODELS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our library of high-fidelity 3D models for simulation, training and visualization.
            Click on any thumbnail to view the model in detail.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side: Model thumbnails grid */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Box size={20} className="mr-2 text-red-600" />
              Available Models
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {models.map((model) => (
                <div
                  key={model.id}
                  className={`
                    cursor-pointer transition-all duration-300 transform hover:scale-105
                    border-2 ${selectedModel.id === model.id ? 'border-red-600' : 'border-white'}
                    rounded-md overflow-hidden relative
                  `}
                  onClick={() => {
                    setSelectedModel(model);
                    setIsInfoOpen(false);
                  }}
                >
                  <img
                    src={model.thumbnail}
                    alt={model.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <p className="text-sm font-medium truncate">{model.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: 3D viewer */}
          <div className="lg:w-2/3">
            <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />

            <div className="mt-6 flex justify-center lg:justify-end">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors">
                <Send size={18} />
                Request More Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Models2() {
  // Stato per il modello selezionato (default: primo modello)
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">3D MODELS</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore high-fidelity 3D assets for simulation, training and visualization.
          </p>
        </div>

        {/* 3D Viewer */}
        <div className="w-full bg-gradient-to-br from-gray-800 via-black to-black p-8 rounded-2xl shadow-xl mb-16">
          <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />
        </div>

        {/* Grid of Models */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              onClick={() => {
                setSelectedModel(model);
                setIsInfoOpen(false);
              }}
              className={`cursor-pointer group bg-gray-900 rounded-xl overflow-hidden border-2 ${selectedModel.id === model.id ? 'border-[#e30613]' : 'border-transparent'
                } transition-all hover:scale-105`}
            >
              <img src={model.thumbnail} alt={model.title} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <p className="text-white font-semibold truncate group-hover:text-[#e30613]">{model.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-[#e30613] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
          Request More Information
        </button>
      </div>
    </section>
  );
}

export function Models3() {
  // Stato per il modello selezionato (default: primo modello)
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-black opacity-30 -skew-y-3"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: List of Models */}
        <div className="space-y-8">
          <div className="text-left">
            <h2 className="text-5xl font-bold mb-4">3D MODELS</h2>
            <p className="text-gray-400">
              Choose from our library of detailed 3D assets, ready for training and simulations.
            </p>
          </div>

          <div className="space-y-4">
            {models.map((model) => (
              <div
                key={model.id}
                onClick={() => {
                  setSelectedModel(model);
                  setIsInfoOpen(false);
                }}
                className={`flex items-center gap-4 cursor-pointer p-4 rounded-lg transition-all ${selectedModel.id === model.id ? 'bg-[#e30613]' : 'hover:bg-gray-800'
                  }`}
              >
                <img src={model.thumbnail} alt={model.title} className="w-16 h-16 rounded-full object-cover" />
                <p className="text-white font-semibold">{model.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D Viewer */}
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
          <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />
          <div className="mt-8 flex justify-end">
            <button className="bg-[#e30613] hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
              <Send size={18} />
              Request More Information
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}

export function Models4() {
  // Stato per il modello selezionato (default: primo modello)
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Explore 3D Models</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Click any model to preview it in our real-time 3D viewer.
        </p>

        {/* 3D Viewer */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto no-scrollbar py-4">
          <div className="flex gap-6 min-w-max">
            {models.map((model) => (
              <div
                key={model.id}
                onClick={() => {
                  setSelectedModel(model);
                  setIsInfoOpen(false);
                }}
                className={`cursor-pointer flex-shrink-0 w-40 rounded-xl overflow-hidden border-2 ${selectedModel.id === model.id ? 'border-[#e30613]' : 'border-white'
                  } transition-transform hover:scale-110`}
              >
                <img src={model.thumbnail} alt={model.title} className="w-full h-40 object-cover" />
                <div className="bg-gradient-to-t from-black to-transparent p-2">
                  <p className="text-sm font-medium truncate">{model.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-12 bg-[#e30613] hover:bg-red-700 text-white px-10 py-4 rounded-xl font-semibold">
          Request More Information
        </button>
      </div>
    </section>

  );
}

export function Models5() {
  const categories = {
    "Fixed wings": { name: "wings", num: 66 },
    "Missiles": { name: "Missiles", num: 2 },
    "Rotary Wings": { name: "Rotary Wings", num: 9 },
    "Subsurface": { name: "Subsurface", num: 2 },
    "Surface": { name: "Surface", num: 82 },
    "Buildings": { name: "Buildings", num: 9 }
  }
  // Stato per il modello selezionato (default: primo modello)
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedCategory, setSelectedCategory] = useState("Fixed wings");
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const router = useRouter();

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">3D MODELS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our library of high-fidelity 3D models for simulation, training and visualization.
            Click on any thumbnail to view the model in detail.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Left side: Model thumbnails grid */}
          <div className="lg:min-w-full">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Box size={20} className="mr-2 text-red-600" />
              Available Models
            </h3>
            <div className="max-w-6xl mx-auto p-4 bg-gray-950 text-white rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.keys(categories)
                  .slice(0, 4)
                  .reduce((result, item, index, array) =>
                    index % 2 === 0
                      ? [...result, [item, array[index + 1]].filter(Boolean)]
                      : result,
                    []
                  )
                  .map(c => (
                    <div>
                      {c.map(cat => (
                        <div key={cat} className="border-b border-gray-700 pb-6 pt-1">
                          <h3 className="text-xl font-bold mb-4 text-gray-200">{categories[cat].name}</h3>

                          <div className="relative">
                            {/* Horizontal scrollable container */}
                            <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 snap-x">
                              {/* First 4 model thumbnails */}
                              {Array.from({ length: Math.min(4, categories[cat].num) }).map((_, i) => (
                                <div
                                  key={`model-${i}`}
                                  className={`
                      flex-shrink-0 w-24 snap-start
                      cursor-pointer
                      border-2 ${selectedModel.id === models[i]?.id && cat === selectedCategory ? 'border-white' : 'border-gray-800'}
                      rounded-xl overflow-hidden relative group
                      transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-900/20
                    `}
                                  onClick={() => {
                                    setSelectedModel(models[i] || {});
                                    setSelectedCategory(cat);
                                    setIsInfoOpen(false);
                                  }}
                                >
                                  <img
                                    src={models[i]?.thumbnail || "/api/placeholder/200/200"}
                                    alt={models[i]?.title || `Model ${i + 1}`}
                                    className="w-full aspect-square object-cover"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                                    <p className="text-sm font-medium truncate">{models[i]?.title || `Model ${i + 1}`}</p>
                                  </div>
                                </div>
                              ))}

                              {/* "+n" thumbnail if there are more than 4 models */}
                              {categories[cat].num > 4 && (
                                <div className="flex-shrink-0 w-24 snap-start cursor-pointer rounded-lg overflow-hidden relative bg-gray-800 border-2 border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                                  <div className="flex flex-col items-center justify-center h-full w-full aspect-square">
                                    <span className="text-3xl font-bold text-red-500">+{categories[cat].num - 4}</span>
                                    <span className="text-xs text-gray-300 mt-1">more</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Gradient fade indicators for scroll */}
                            <div className="absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                <div className="w-full flex flex-col relative border-b border-gray-700 max-h-[353px]">
                  <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} maxHeight={true} />
                </div>
              </div>
              <div className='w-full'>
                <Dialog>
                  <div className="flex">
                    <div className='w-2/3 flex justify-center mt-3'>
                      <DialogTrigger asChild>
                        <button className="bg-gray-800 hover:bg-gray-700 text-white px-16 py-3 rounded flex items-center gap-2 transition-colors">
                          View All
                        </button>
                      </DialogTrigger>
                    </div>
                    <div className='w-1/3 flex justify-center mt-3'>
                      <button className="bg-red-800 hover:bg-red-700 text-white px-16 py-3 rounded flex items-center gap-2 transition-colors" onClick={() => router.push('/models/' + selectedModel.id)}>
                        <Send size={18} />
                        Model Information
                      </button>
                    </div>
                    </div>
                  <DialogContent className="md:max-w-3xl lg:max-w-6xl max-w-xl bg-black">
                    <DialogHeader>
                      <DialogTitle>All Models</DialogTitle>
                    </DialogHeader>
                    <div className="mx-auto p-4 text-white rounded-md">
                      <div className="grid grid-cols-2 gap-1">
                        <div className='grid gap-6 overflow-auto max-h-[calc(100vh-300px)] scrollbar-hide'>
                          {Object.keys(categories).map(cat => (
                            <div key={cat} className="border-b border-gray-700 pb-6">
                              <h3 className="text-xl font-bold mb-4 text-gray-200">{categories[cat].name}</h3>

                              <div className="relative">
                                {/* Horizontal scrollable container */}
                                <div className="flex flex-wrap gap-3">
                                  {/* First 4 model thumbnails */}
                                  {Array.from({ length: categories[cat].num }).map((_, i) => (
                                    <div
                                      key={`model-${i}`}
                                      className={`
                      flex-shrink-0 w-24
                      cursor-pointer
                      border-2 ${selectedModel.id === models[i]?.id && cat === selectedCategory ? 'border-white' : 'border-gray-800'}
                      rounded-xl overflow-hidden relative group
                      transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-900/20
                    `}
                                      onClick={() => {
                                        setSelectedModel(models[i] || {});
                                        setSelectedCategory(cat);
                                        setIsInfoOpen(false);
                                      }}
                                    >
                                      <img
                                        src={models[i]?.thumbnail || "/api/placeholder/200/200"}
                                        alt={models[i]?.title || `Model ${i + 1}`}
                                        className="w-full aspect-square object-cover"
                                      />
                                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                                        <p className="text-sm font-medium truncate">{models[i]?.title || `Model ${i + 1}`}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="relative lg:w-full max-h-[calc(100vh-300px)] flex flex-col">
                          <ModelViewer selectedModel={selectedModel} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} maxHeight={true} />

                          <div className="absolute bottom-2 right-2 z-10 flex flex-col">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded flex items-center gap-2 transition-colors"  onClick={() => router.push('/models/' + selectedModel.id)}>
                              <Send size={18} />
                              Request More Information
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}