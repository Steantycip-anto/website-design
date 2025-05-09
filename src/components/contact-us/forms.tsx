"use client"

import { useState, useEffect } from 'react';
import { Send, PhoneCall, MessageSquare, MapPin, Mail, Phone, Clock, ChevronRight } from 'lucide-react';

export function ContactAsymmetric() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Messaggio inviato! Ti risponderemo presto.');
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left Side - Contact Form */}
        <div className="lg:col-span-3 bg-gray-900 rounded-lg p-8 transform transition-transform hover:scale-[1.01] duration-300">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Parliamo del tuo progetto</h2>
          <p className="text-gray-400 mb-8">Compila il modulo e ti risponderemo entro 24 ore.</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 text-white transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 text-white transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Oggetto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 text-white transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Messaggio</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 text-white transition-all duration-300"
              />
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <Send className="h-5 w-5 text-red-300 group-hover:text-red-200" />
                </span>
                Invia Messaggio
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div 
            className="bg-gray-900 rounded-lg p-6 transform transition-all hover:scale-[1.02] duration-300 hover:shadow-lg hover:shadow-red-900/30"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <PhoneCall className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Chiamaci</h3>
                <p className="text-gray-400">+39 02 1234 5678</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-gray-900 rounded-lg p-6 transform transition-all hover:scale-[1.02] duration-300 hover:shadow-lg hover:shadow-red-900/30"
            style={{ transitionDelay: '300ms' }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-400">info@azienda.com</p>
              </div>
            </div>
          </div>

          <div 
            className="bg-gray-900 rounded-lg p-6 transform transition-all hover:scale-[1.02] duration-300 hover:shadow-lg hover:shadow-red-900/30"
            style={{ transitionDelay: '450ms' }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Sede</h3>
                <p className="text-gray-400">Via Milano 123, 20100 Milano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactCircular() {
  const [activeSection, setActiveSection] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert('Messaggio inviato! Ti contatteremo presto.');
  };

  const contactSections = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Chiamaci",
      content: "+39 02 1234 5678",
      bgColor: "bg-red-600"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      content: "info@azienda.com",
      bgColor: "bg-red-700"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Indirizzo",
      content: "Via Milano 123, 20100 Milano",
      bgColor: "bg-red-800"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Orari",
      content: "Lun-Ven: 9:00-18:00",
      bgColor: "bg-red-900"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-red-500">Contattaci</span>
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Siamo sempre disponibili per aiutarti. Compila il modulo o utilizza uno dei nostri canali di contatto qui sotto.
        </p>

        {/* Circular Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-64 md:h-full">
            <div className="w-full h-full flex items-center justify-center relative">
              {contactSections.map((section, index) => (
                <div 
                  key={index}
                  className={`absolute transform transition-all duration-500 ease-in-out ${
                    index === activeSection 
                      ? 'scale-100 opacity-100 z-10' 
                      : 'scale-90 opacity-0 z-0'
                  }`}
                >
                  <div className={`${section.bgColor} rounded-full w-48 h-48 flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105 text-center`}>
                    {section.icon}
                    <h3 className="text-xl font-bold mt-3 mb-1">{section.title}</h3>
                    <p className="text-sm text-gray-100">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {contactSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeSection ? 'bg-red-500 w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Vai alla sezione ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Send className="h-6 w-6 mr-2 text-red-500" />
              <span>Inviaci un messaggio</span>
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-none rounded-md focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-none rounded-md focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border-none rounded-md focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Invia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactDynamic() {
  const [currentTab, setCurrentTab] = useState('form');
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert('Messaggio inviato! Ti contatteremo presto.');
  };

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className="absolute bg-red-500 rounded-full blur-3xl" 
              style={{
                width: `${Math.random() * 40 + 10}%`,
                height: `${Math.random() * 40 + 10}%`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>

      <div 
        className={`max-w-6xl w-full mx-auto relative z-10 transition-all duration-1000 transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Parliamo del tuo </span>
            <span className="text-red-500 inline-block relative">
              progetto
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La tua visione, la nostra tecnologia. Insieme creiamo il futuro digitale.
          </p>
        </div>

        {/* 3D-like Card */}
        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-800 relative" 
          style={{
            transform: "perspective(1000px) rotateX(2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-800">
            <button 
              onClick={() => setCurrentTab('form')}
              className={`flex-1 py-4 text-center transition-all duration-300 relative ${
                currentTab === 'form' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">Invia Messaggio</span>
              {currentTab === 'form' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
              )}
            </button>
            <button 
              onClick={() => setCurrentTab('info')}
              className={`flex-1 py-4 text-center transition-all duration-300 relative ${
                currentTab === 'info' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="relative z-10">Informazioni di Contatto</span>
              {currentTab === 'info' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
              )}
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8">
            {currentTab === 'form' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Inviaci un messaggio</h2>
                  <p className="text-gray-400 mb-6">
                    Compila il modulo e ti risponderemo entro 24 ore lavorative. 
                    Il nostro team è pronto ad aiutarti con qualsiasi richiesta.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        placeholder="La tua email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Messaggio</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border-none rounded-md py-3 px-4 focus:ring-2 focus:ring-red-500 text-white transition-all duration-300"
                        placeholder="Il tuo messaggio"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <button
                        onClick={handleSubmit}
                        className="w-full py-3 px-6 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 flex items-center justify-center group"
                      >
                        Invia Messaggio
                        <ChevronRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    {/* Central decorative element */}
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-red-500 to-red-800 opacity-20 blur-xl absolute -top-8 -left-8"></div>
                    
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 shadow-xl relative transform transition-transform hover:scale-105 duration-500">
                      <div className="text-center mb-4">
                        <Send className="h-12 w-12 text-red-500 mx-auto mb-2" />
                        <h3 className="text-xl font-bold">Sempre connessi</h3>
                      </div>
                      <p className="text-gray-400 text-center">
                        La nostra squadra è pronta ad aiutarti con qualsiasi progetto o domanda. 
                        Contattaci e scopri come possiamo trasformare la tua visione in realtà.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 hover:translate-y-px">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Telefono</h3>
                  <p className="text-gray-400">+39 02 1234 5678</p>
                  <p className="text-gray-400">Lun-Ven: 9:00 - 18:00</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 hover:translate-y-px">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-400">info@azienda.com</p>
                  <p className="text-gray-400">support@azienda.com</p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 hover:translate-y-px">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sede</h3>
                  <p className="text-gray-400">Via Milano 123</p>
                  <p className="text-gray-400">20100 Milano, Italia</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}