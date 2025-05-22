import { useState } from 'react';
import { X, Check, Info, Cookie, Shield, AlertCircle } from 'lucide-react';

// Primo banner - Minimalista con accenti rossi
export const CookieBanner1 = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-black text-white shadow-lg border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="text-red-500 h-6 w-6" />
          <p className="text-sm">
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
            <span className="text-red-400 font-medium"> Scopri come li utilizziamo.</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsVisible(false)}
            className="px-3 py-1 border border-gray-500 text-gray-300 text-sm rounded hover:bg-gray-900 transition-colors"
          >
            Rifiuta
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors flex items-center gap-1"
          >
            <Check className="h-4 w-4" />
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

// Secondo banner - Tecnologico con elementi grafici
export const CookieBanner2 = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white border-t-2 border-red-500">
        <div className="max-w-6xl mx-auto p-5">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-gray-800 p-3 rounded-full">
              <Shield className="text-red-500 h-8 w-8" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <span className="mr-2">Privacy Settings</span>
                <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">NUOVO</span>
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Il nostro sito utilizza tecnologie avanzate per migliorare la tua esperienza di navigazione. 
                Controlliamo i tuoi dati con la massima sicurezza.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs">Essenziali</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                  <span className="text-xs">Analitici</span>
                </div>
                <div className="bg-gray-800 p-3 rounded flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                  <span className="text-xs">Marketing</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 min-w-[120px]">
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Accetta tutti
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 hover:bg-gray-700 transition-colors"
              >
                Solo essenziali
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="w-full px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Personalizza
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Terzo banner - Futuristico con interfaccia a schede
export const CookieBanner3 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('info');

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-black bg-opacity-95 text-white border-t border-red-600">
        <div className="max-w-6xl mx-auto p-4">
          {/* Barra superiore con pulsante di chiusura */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-red-600 rounded-full mr-2"></div>
              <h3 className="text-md font-bold tracking-wider">COOKIE POLICY</h3>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-800 mb-4">
            <button 
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'info' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}
            >
              Informazioni
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'settings' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}
            >
              Impostazioni
            </button>
            <button 
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'privacy' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400'}`}
            >
              Privacy
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'info' && (
              <div className="flex gap-4">
                <Info className="text-red-500 h-12 w-12 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Perché utilizziamo i cookie?</h4>
                  <p className="text-gray-300 text-sm">
                    Utilizziamo tecnologie avanzate per personalizzare la tua esperienza, 
                    analizzare il traffico e ottimizzare le funzionalità del sito. I tuoi dati sono protetti 
                    secondo gli standard più elevati di sicurezza informatica.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <span>Cookie essenziali</span>
                  </div>
                  <div className="text-xs text-gray-400">Sempre attivi</div>
                </div>
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                    <span>Cookie analitici</span>
                  </div>
                  <button className="w-10 h-5 bg-gray-700 rounded-full relative">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-900 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
                    <span>Cookie di marketing</span>
                  </div>
                  <button className="w-10 h-5 bg-gray-700 rounded-full relative">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-gray-400 rounded-full"></div>
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'privacy' && (
              <div className="flex gap-4">
                <AlertCircle className="text-red-500 h-12 w-12 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Rispettiamo la tua privacy</h4>
                  <p className="text-gray-300 text-sm">
                    I tuoi dati non vengono mai venduti a terze parti. Puoi modificare le tue impostazioni in 
                    qualsiasi momento e richiedere l'eliminazione completa dei tuoi dati dal nostro database.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button 
              onClick={() => setIsVisible(false)}
              className="px-6 py-2 bg-transparent border border-gray-700 text-gray-300 rounded hover:bg-gray-900 transition-colors"
            >
              Rifiuta tutti
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};