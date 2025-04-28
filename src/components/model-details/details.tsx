"use client"
// pages/model/[id].js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModelViewer } from "@/components/models3d";  
import Head from 'next/head';

export function ModelDetail() {
  const [model, setModel] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulazione di caricamento dati
    setTimeout(() => {
      setModel({
        id: 1,
        title: 'Flight Simulator',
        thumbnail: 'https://www.shutterstock.com/image-photo/airplane-isolated-on-black-background-600nw-2172233699.jpg',
        description: 'Advanced flight simulator model with realistic cockpit controls and physics.',
        category: 'Aviation',
        modelPath: "/models/model1.glb",
        details: {
          format: "FLT",
          Interior: true,
          "Tested IG": "MAK",
          "Night Version": false,
          Textures: 3,
          Lights: true,
          DoF: false,
          "Damage version": false,
          LoD: false,
          Switch: true,
          "Model and texture quality": 3,
          Domain: "Air"
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <motion.div 
          className="w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!model) return null;

  return (
    <>
      <Head>
        <title>{model.title} | 3D Model Viewer</title>
        <meta name="description" content={model.description} />
      </Head>

      <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white overflow-hidden">
        {/* 3D Viewer Section */}
        <div className="w-full md:w-3/5 h-1/2 md:h-full bg-black relative">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <ModelViewer selectedModel={model} maxHeight={true}/>
          </motion.div>
          
          <div className="absolute top-4 left-4 bg-black bg-opacity-70 p-2 rounded-lg">
            <h1 className="text-2xl font-bold text-red-600">{model.title}</h1>
            <p className="text-gray-300">Category: {model.category}</p>
          </div>
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/5 h-1/2 md:h-full bg-gray-900 p-6 overflow-y-auto">
          <div className="pb-4 mb-6 border-b border-gray-700">
            <nav className="flex gap-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`font-semibold py-2 ${activeTab === 'overview' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('specifications')}
                className={`font-semibold py-2 ${activeTab === 'specifications' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
              >
                Specifications
              </button>
            </nav>
          </div>

          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">{model.title}</h2>
              <div className="mb-6">
                <p className="text-gray-300 mb-4">{model.description}</p>
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {model.category}
                </span>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Format: {model.details.format}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Domain: {model.details.Domain}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Quality: {model.details["Model and texture quality"]}/5</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Textures: {model.details.Textures}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'specifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <div className="space-y-4">
                {Object.entries(model.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="font-medium text-gray-300">{key}</span>
                    <span className={typeof value === 'boolean' ? 
                      (value ? 'text-green-500' : 'text-red-500') : 
                      'text-white'}>
                      {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export function ModelDetailCard() {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState('viewer');

  useEffect(() => {
    // Simulazione di caricamento dati
    setTimeout(() => {
      setModel({
        id: 1,
        title: 'Flight Simulator',
        thumbnail: 'https://www.shutterstock.com/image-photo/airplane-isolated-on-black-background-600nw-2172233699.jpg',
        description: 'Advanced flight simulator model with realistic cockpit controls and physics.',
        category: 'Aviation',
        modelPath: "/models/model1.glb",
        details: {
          format: "FLT",
          Interior: true,
          "Tested IG": "MAK",
          "Night Version": false,
          Textures: 3,
          Lights: true,
          DoF: false,
          "Damage version": false,
          LoD: false,
          Switch: true,
          "Model and texture quality": 3,
          Domain: "Air"
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <motion.div 
          className="w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (!model) return null;

  return (
    <>
      <Head>
        <title>{model.title} | 3D Model Viewer</title>
        <meta name="description" content={model.description} />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-black py-4 px-6 border-b border-red-600">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-white flex items-center">
              <span className="text-red-600 mr-2">3D</span>ModelViewer
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">ID: {model.id}</span>
              <span className="bg-red-600 px-3 py-1 rounded-full text-xs">
                {model.category}
              </span>
            </div>
          </div>
        </header>

        {/* Title Banner */}
        <div className="bg-gradient-to-r from-gray-900 to-black py-6 px-6 border-b border-gray-800">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">{model.title}</h1>
            <p className="text-gray-400 mt-2 max-w-2xl">{model.description}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="flex overflow-x-auto py-2 gap-2">
              <button 
                onClick={() => setSelectedCard('viewer')} 
                className={`px-4 py-2 whitespace-nowrap font-medium rounded-md ${selectedCard === 'viewer' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                3D Model
              </button>
              <button 
                onClick={() => setSelectedCard('details')} 
                className={`px-4 py-2 whitespace-nowrap font-medium rounded-md ${selectedCard === 'details' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Details
              </button>
              <button 
                onClick={() => setSelectedCard('specs')} 
                className={`px-4 py-2 whitespace-nowrap font-medium rounded-md ${selectedCard === 'specs' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
              >
                Specifications
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="container mx-auto px-6 py-8">
          <AnimatePresence mode="wait">
            {selectedCard === 'viewer' && (
              <motion.div 
                key="viewer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black rounded-xl overflow-hidden shadow-xl"
              >
                <div className="aspect-video w-full">
                  <ModelViewer selectedModel={model} maxHeight={true}/>
                </div>
                <div className="p-4 bg-gray-800">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl">{model.title}</h2>
                    <span className="bg-gray-900 px-3 py-1 rounded-md text-sm">
                      Format: {model.details.format}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedCard === 'details' && (
              <motion.div 
                key="details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl p-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Model Information</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-gray-400 text-sm">TITLE</h3>
                        <p className="text-white text-lg">{model.title}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">CATEGORY</h3>
                        <p className="text-white text-lg">{model.category}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">DESCRIPTION</h3>
                        <p className="text-white">{model.description}</p>
                      </div>
                      <div>
                        <h3 className="text-gray-400 text-sm">MODEL PATH</h3>
                        <p className="text-white font-mono text-sm bg-gray-900 p-2 rounded">{model.modelPath}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-l border-gray-700 pl-6">
                    <img 
                      src={model.thumbnail} 
                      alt={model.title} 
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm">DOMAIN</h3>
                        <p className="text-xl font-bold text-white">{model.details.Domain}</p>
                      </div>
                      <div className="bg-gray-900 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm">QUALITY</h3>
                        <p className="text-xl font-bold text-white">{model.details["Model and texture quality"]}/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {selectedCard === 'specs' && (
              <motion.div 
                key="specs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-white">Technical Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                    {Object.entries(model.details).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-700">
                        <span className="font-medium">{key}</span>
                        <span className={
                          typeof value === 'boolean' 
                            ? (value ? 'text-green-500' : 'text-red-500') 
                            : 'text-white font-bold'
                        }>
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

// Icone (importa da un package come react-icons o crea componenti SVG)
const SpecIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const FormatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
  </svg>
);

const QualityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export function ModelDetailDashboard() {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulazione di caricamento dati
    setTimeout(() => {
      setModel({
        id: 1,
        title: 'Flight Simulator',
        thumbnail: 'https://www.shutterstock.com/image-photo/airplane-isolated-on-black-background-600nw-2172233699.jpg',
        description: 'Advanced flight simulator model with realistic cockpit controls and physics.',
        category: 'Aviation',
        modelPath: "/models/model1.glb",
        details: {
          format: "FLT",
          Interior: true,
          "Tested IG": "MAK",
          "Night Version": false,
          Textures: 3,
          Lights: true,
          DoF: false,
          "Damage version": false,
          LoD: false,
          Switch: true,
          "Model and texture quality": 3,
          Domain: "Air"
        }
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black">
        <motion.div 
          className="w-16 h-16 border-t-4 border-red-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-white">Loading model data...</p>
      </div>
    );
  }

  if (!model) return null;

  // Funzione per ottenere lo status visivo di un valore booleano
  const getBooleanStatus = (value) => {
    return value ? 
      <span className="flex items-center px-2 py-1 rounded-full bg-green-900 text-green-300 text-xs">
        <span className="w-2 h-2 rounded-full bg-green-400 mr-1"></span>
        Yes
      </span> : 
      <span className="flex items-center px-2 py-1 rounded-full bg-red-900 text-red-300 text-xs">
        <span className="w-2 h-2 rounded-full bg-red-400 mr-1"></span>
        No
      </span>;
  };

  // Raggruppamento delle specifiche per categorie intuitive
  const specGroups = {
    visual: {
      title: "Visual Properties",
      specs: ["Interior", "Night Version", "Textures", "Lights", "Model and texture quality"]
    },
    technical: {
      title: "Technical Details",
      specs: ["format", "Tested IG", "DoF", "Damage version", "LoD", "Switch", "Domain"]
    }
  };

  return (
    <>
      <Head>
        <title>{model.title} | 3D Model Dashboard</title>
        <meta name="description" content={model.description} />
      </Head>

      <div className="min-h-screen bg-gray-900">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full w-16 bg-black flex flex-col items-center py-8">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mb-8">
            3D
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-4"
          >
            <SpecIcon />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white mb-4"
          >
            <FormatIcon />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white"
          >
            <QualityIcon />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="pl-16">
          {/* Model Header */}
          <div className="bg-black p-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div>
                <span className="text-red-600 text-sm font-semibold tracking-wider">MODEL #{model.id}</span>
                <h1 className="text-4xl font-bold text-white mt-1">{model.title}</h1>
                <div className="flex items-center mt-2">
                  <span className="bg-red-600 text-white px-3 py-1 text-xs tracking-wider rounded-full">
                    {model.category}
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">Format: {model.details.format}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium"
                >
                  Download
                </motion.button>
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Model Viewer */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video w-full">
                  <ModelViewer selectedModel={model} maxHeight={true}/>
                </div>
                <div className="p-4">
                  <p className="text-gray-300">{model.description}</p>
                </div>
              </motion.div>

              {/* Additional details cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {Object.keys(specGroups).map((groupKey) => (
                  <motion.div 
                    key={groupKey}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-800 rounded-xl p-5 shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">{specGroups[groupKey].title}</h3>
                    <div className="space-y-3">
                      {specGroups[groupKey].specs.map(key => (
                        model.details[key] !== undefined && (
                          <div key={key} className="flex justify-between items-center">
                            <span className="text-gray-400">{key}</span>
                            <span className="text-white">
                              {typeof model.details[key] === 'boolean' 
                                ? getBooleanStatus(model.details[key])
                                : model.details[key]}
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Details and Preview */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={model.thumbnail} 
                  alt={model.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-white">Preview</h2>
                  <p className="text-gray-400 mt-2 text-sm">Thumbnail preview of the 3D model</p>
                  
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Model Info</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Domain</div>
                        <div className="text-white font-medium">{model.details.Domain}</div>
                      </div>
                      <div className="bg-gray-700 p-3 rounded-lg">
                        <div className="text-xs text-gray-400">Quality</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ${i < model.details["Model and texture quality"] ? 'text-red-500' : 'text-gray-600'}`}
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Full Specifications Panel */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-6 p-5"
              >
                <h2 className="text-xl font-bold text-white flex items-center">
                  <SpecIcon />
                  <span className="ml-2">Full Specifications</span>
                </h2>
                
                <div className="mt-4 space-y-3">
                  {Object.entries(model.details).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">{key}</span>
                      <span className={typeof value === 'boolean' ? 
                        (value ? 'text-green-400' : 'text-red-400') : 
                        'text-white'}>
                        {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Path Info Card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg mt-6 p-5"
              >
                <h3 className="text-lg font-semibold text-white mb-2">Model Path</h3>
                <div className="bg-black rounded-md p-3">
                  <code className="text-sm text-gray-300 font-mono">{model.modelPath}</code>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-black p-4 mt-6 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="text-gray-500 text-sm">Model ID: {model.id}</div>
              <div className="text-gray-500 text-sm">Last updated: April 28, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}