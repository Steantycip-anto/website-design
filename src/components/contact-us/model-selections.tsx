"use client"

import { useState, useEffect } from 'react';
import { PlusCircle, X, Trash2, Plus, Trash, ChevronRight, AlertCircle } from 'lucide-react';

// Finti dati dei modelli
const availableModels = [
    { id: 1, name: 'Model Alpha', image: '/api/placeholder/60/60' },
    { id: 2, name: 'Model Beta', image: '/api/placeholder/60/60' },
    { id: 3, name: 'Model Gamma', image: '/api/placeholder/60/60' },
    { id: 4, name: 'Model Delta', image: '/api/placeholder/60/60' },
    { id: 5, name: 'Model Epsilon', image: '/api/placeholder/60/60' },
];

export function AddModelsSection1() {
    const [selectedModels, setSelectedModels] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addModel = (model) => {
        if (!selectedModels.find(m => m.id === model.id)) {
            setSelectedModels([...selectedModels, model]);
        }
        setIsModalOpen(false);
    };

    const removeModel = (modelId) => {
        setSelectedModels(selectedModels.filter(model => model.id !== modelId));
    };

    return (
        <div className='bg-black'>
            <div className="text-white p-8 rounded-lg relative max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8 border-l-4 border-red-600 pl-4">
                    <h2 className="text-3xl font-bold mb-2">Add Models</h2>
                    <p className="text-gray-400">
                        Select the models you're interested in to include in your information request.
                    </p>
                </div>

                {/* Selected Models List */}
                <div className="mb-8">
                    {selectedModels.length > 0 ? (
                        <div className="space-y-4">
                            {selectedModels.map((model) => (
                                <div
                                    key={model.id}
                                    className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-800 transition-all hover:border-red-600 group"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="relative overflow-hidden rounded-md w-12 h-12 bg-gray-800">
                                            <img
                                                src={model.image}
                                                alt={model.name}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span>{model.name}</span>
                                    </div>
                                    <button
                                        onClick={() => removeModel(model.id)}
                                        className="text-gray-500 hover:text-red-600 transition-colors p-1"
                                        aria-label="Remove model"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 border border-dashed border-gray-800 rounded-lg bg-gray-900 bg-opacity-50">
                            <p className="text-gray-500">No models added yet</p>
                        </div>
                    )}
                </div>

                {/* Add Model Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center w-full py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg font-medium"
                >
                    <PlusCircle size={18} className="mr-2" />
                    Add Model
                </button>

                {/* Model Selection Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-900 rounded-lg w-full max-w-md p-6 animate-fade-in">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Select a Model</h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                                {availableModels.map((model) => (
                                    <button
                                        key={model.id}
                                        className="flex items-center w-full p-3 rounded-lg hover:bg-gray-800 transition-colors text-left"
                                        onClick={() => addModel(model)}
                                    >
                                        <div className="w-10 h-10 rounded-md bg-gray-800 mr-3 overflow-hidden">
                                            <img src={model.image} alt={model.name} className="object-cover" />
                                        </div>
                                        <span>{model.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export function AddModelsSection2() {
    const [selectedModels, setSelectedModels] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addModel = (model) => {
        if (!selectedModels.find(m => m.id === model.id)) {
            setSelectedModels([...selectedModels, model]);
        }
        setIsModalOpen(false);
    };

    const removeModel = (modelId) => {
        setSelectedModels(selectedModels.filter(model => model.id !== modelId));
    };

    return (
        <div className="bg-black text-white p-6 md:p-10 rounded-xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600 rounded-full filter blur-2xl opacity-10"></div>

            {/* Header */}
            <div className="relative mb-8 text-center">
                <h2 className="text-4xl font-bold mb-2 inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
                        Add Models
                    </span>
                </h2>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto my-3"></div>
                <p className="text-gray-400 max-w-lg mx-auto">
                    Enhance your request by adding specific models you're interested in.
                    Our team will provide detailed information for each selected model.
                </p>
            </div>

            {/* Selected Models Grid */}
            <div className="mb-8">
                {selectedModels.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedModels.map((model) => (
                            <div
                                key={model.id}
                                className="relative flex items-center bg-gray-900 p-4 rounded-lg border border-gray-800 group transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/20"
                            >
                                <div className="flex-shrink-0 w-16 h-16 mr-4 rounded overflow-hidden bg-gray-800">
                                    <img
                                        src={model.image}
                                        alt={model.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="font-medium">{model.name}</p>
                                    <p className="text-xs text-gray-500">Added to your request</p>
                                </div>
                                <button
                                    onClick={() => removeModel(model.id)}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition-colors p-1"
                                    aria-label="Remove model"
                                >
                                    <Trash size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 border border-dashed border-gray-800 rounded-lg bg-gray-900 bg-opacity-30">
                        <p className="text-gray-500 mb-2">No models added to your request yet</p>
                        <p className="text-xs text-gray-600">Click the button below to add models</p>
                    </div>
                )}
            </div>

            {/* Add Button */}
            <div className="text-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-transform duration-200 hover:scale-105"
                >
                    <Plus size={18} className="mr-2" />
                    Add Models
                </button>
            </div>

            {/* Model Selection Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div
                        className="bg-gray-900 rounded-xl w-full max-w-lg p-6 border border-gray-800 animate-fade-in shadow-xl"
                        style={{
                            animation: 'fadeIn 0.3s ease-out, slideUp 0.3s ease-out'
                        }}
                    >
                        <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                            <h3 className="text-xl font-bold">Available Models</h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-white bg-gray-800 rounded-full p-1 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                            {availableModels.map((model) => (
                                <button
                                    key={model.id}
                                    className="flex items-center w-full p-3 rounded-lg hover:bg-gray-800 transition-all duration-200 text-left group relative"
                                    onClick={() => addModel(model)}
                                >
                                    <div className="w-14 h-14 rounded overflow-hidden bg-gray-800 mr-4 flex-shrink-0">
                                        <img src={model.image} alt={model.name} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <p className="font-medium group-hover:text-red-500 transition-colors">{model.name}</p>
                                        <p className="text-xs text-gray-500">Click to add to your request</p>
                                    </div>
                                    <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Plus size={16} className="text-red-500" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export function AddModelsSection3() {
    const [selectedModels, setSelectedModels] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [hoveredModel, setHoveredModel] = useState(null);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts
        setAnimation(true);
    }, []);

    const addModel = (model) => {
        if (!selectedModels.find(m => m.id === model.id)) {
            setSelectedModels(prev => [...prev, model]);
        }
    };

    const removeModel = (modelId) => {
        setSelectedModels(prev =>
            prev.filter(model => model.id !== modelId)
        );
    };

    return (
        <div className='bg-black'>
            <div className={`container bg-black text-white overflow-hidden relative rounded-2xl transition-all duration-700 ${animation ? 'opacity-100' : 'opacity-0'}`}>
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 opacity-10 blur-3xl rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-800 opacity-20 blur-2xl rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-2 h-16 bg-red-500 opacity-30 rounded-full"></div>
                    <div className="absolute top-1/4 right-1/3 w-16 h-2 bg-red-500 opacity-30 rounded-full"></div>
                </div>

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Content container */}
                <div className="relative z-10 p-8">
                    {/* Header with geometric accent */}
                    <div className="mb-10 relative">
                        <div className="absolute -left-6 top-3 w-3 h-12 bg-red-600"></div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Add <span className="text-red-500">Models</span>
                        </h2>
                        <p className="text-gray-400 mt-3 max-w-lg">
                            Customize your information request by selecting the specific models
                            you're interested in exploring further.
                        </p>
                    </div>

                    {/* Main content area with responsive layout */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left panel: Selected models */}
                        <div className="flex-1 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium flex items-center">
                                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                    Selected Models
                                </h3>
                                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                                    {selectedModels.length} selected
                                </span>
                            </div>

                            {selectedModels.length > 0 ? (
                                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                                    {selectedModels.map((model, index) => (
                                        <div
                                            key={model.id}
                                            className={`group relative bg-gray-800 rounded-lg p-3 border border-gray-700 transition-all duration-300 ${animation ? 'animate-slide-in' : ''}`}
                                            style={{ animationDelay: `${index * 150}ms` }}
                                        >
                                            <div className="flex items-center">
                                                <div className="relative w-14 h-14 rounded overflow-hidden bg-black mr-4">
                                                    <img src={model.image} alt={model.name} className="object-cover" />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-medium">{model.name}</p>
                                                    <p className="text-xs text-gray-400">{model.type} Technology</p>
                                                </div>
                                                <button
                                                    onClick={() => removeModel(model.id)}
                                                    className="group-hover:opacity-100 opacity-0 transition-opacity bg-gray-700 hover:bg-red-900 p-1.5 rounded-full"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>

                                            {/* Progress indicator line */}
                                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700">
                                                <div className="h-full bg-red-600 w-0 group-hover:w-full transition-all duration-700"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-48 text-center border border-dashed border-gray-700 rounded-lg">
                                    <AlertCircle size={32} className="text-gray-600 mb-3" />
                                    <p className="text-gray-500">No models selected</p>
                                    <p className="text-xs text-gray-600 mt-1">Add models from the panel on the right</p>
                                </div>
                            )}
                        </div>

                        {/* Right panel: Available models / Add button */}
                        <div className="md:w-96 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-500">
                            {isAdding ? (
                                <div className="h-full flex flex-col">
                                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                                        <h3 className="font-medium">Available Models</h3>
                                        <button
                                            onClick={() => setIsAdding(false)}
                                            className="text-gray-500 hover:text-white"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="flex-grow overflow-y-auto p-3 space-y-2">
                                        {availableModels.map((model) => (
                                            <button
                                                key={model.id}
                                                className={`w-full text-left transition-all duration-300 rounded-lg relative overflow-hidden ${selectedModels.some(m => m.id === model.id)
                                                    ? 'bg-gray-800 opacity-50 cursor-not-allowed'
                                                    : 'hover:bg-gray-800'
                                                    }`}
                                                disabled={selectedModels.some(m => m.id === model.id)}
                                                onClick={() => !selectedModels.some(m => m.id === model.id) && addModel(model)}
                                                onMouseEnter={() => setHoveredModel(model.id)}
                                                onMouseLeave={() => setHoveredModel(null)}
                                            >
                                                <div className="flex p-3 items-center">
                                                    <div className="w-12 h-12 rounded overflow-hidden bg-black mr-3">
                                                        <img src={model.image} alt={model.name} className="object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{model.name}</p>
                                                        <p className="text-xs text-gray-500">{model.type} Model</p>
                                                    </div>
                                                    <ChevronRight
                                                        size={16}
                                                        className={`ml-auto transition-opacity ${hoveredModel === model.id && !selectedModels.some(m => m.id === model.id)
                                                            ? 'opacity-100 text-red-500'
                                                            : 'opacity-0'
                                                            }`}
                                                    />
                                                </div>

                                                {/* Hover indicator */}
                                                {hoveredModel === model.id && !selectedModels.some(m => m.id === model.id) && (
                                                    <div className="absolute bottom-0 left-0 h-0.5 bg-red-600 w-full"></div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 mb-4 relative group cursor-pointer"
                                        onClick={() => setIsAdding(true)}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                        <PlusCircle size={28} className="text-red-500" />
                                    </div>
                                    <h3 className="font-medium mb-1">Add Models</h3>
                                    <p className="text-sm text-gray-500">
                                        Click to browse and add models to your request
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}