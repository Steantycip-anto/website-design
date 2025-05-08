import { useState } from 'react';
import { 
  Users, TrendingUp, Clock, Target, Check, Award, ArrowRight
} from 'lucide-react';

export function CaseStudySection({
  title = "Trasformazione digitale per settore finanziario",
  client = "GlobalBank S.p.A.",
  industry = "Servizi Finanziari",
  duration = "8 mesi",
  year = "2024",
  challenge = "GlobalBank necessitava di modernizzare la propria infrastruttura tecnologica legacy per migliorare l'efficienza operativa e offrire un'esperienza cliente digitale all'avanguardia, mantenendo al contempo elevati standard di sicurezza e conformità normativa.",
  solution = "Abbiamo implementato una soluzione cloud-native completa con architettura a microservizi, integrando sistemi di analisi predittiva e intelligenza artificiale per ottimizzare i processi decisionali e personalizzare l'esperienza utente.",
  results = [
    {
      metric: "Aumento efficienza operativa",
      value: "47%"
    },
    {
      metric: "Riduzione costi infrastruttura",
      value: "32%"
    },
    {
      metric: "Incremento soddisfazione clienti",
      value: "62%"
    },
    {
      metric: "Accelerazione time-to-market",
      value: "74%"
    }
  ],
  testimonial = {
    quote: "La collaborazione ha trasformato radicalmente il nostro approccio tecnologico, permettendoci di offrire servizi innovativi che hanno superato le aspettative dei nostri clienti.",
    author: "Maria Rossi",
    role: "CTO, GlobalBank S.p.A."
  },
  keyPoints = [
    "Architettura completamente serverless con alta scalabilità",
    "Integrazione di sistemi di machine learning per analisi predittiva",
    "Dashboard personalizzate per monitoraggio in tempo reale",
    "Sistema di autenticazione multi-fattore avanzato",
    "Automazione completa del ciclo di deployment"
  ],
  technologies = ["AWS", "Kubernetes", "React", "Node.js", "TensorFlow", "GraphQL", "MongoDB"]
}) {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="w-full bg-black text-white py-16 lg:py-24 relative overflow-hidden" id="case-study">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-red-900/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-red-900/10 to-transparent blur-2xl"></div>
      </div>
      
      {/* Red diagonal line */}
      <div className="absolute top-0 left-0 h-24 w-1 bg-red-600/80 transform rotate-45 origin-top-left"></div>
      <div className="absolute bottom-0 right-0 h-16 w-1 bg-red-600/50 transform -rotate-45 origin-bottom-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Case study header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-red-900/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-4">
              <span className="mr-2">Case Study</span>
              <span>{year}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400 text-sm md:text-base">
              <div className="flex items-center">
                <Users size={16} className="mr-2 text-red-500" />
                <span>Client: {client}</span>
              </div>
              <div className="flex items-center">
                <Target size={16} className="mr-2 text-red-500" />
                <span>Industry: {industry}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-red-500" />
                <span>Duration: {duration}</span>
              </div>
            </div>
          </div>
          
          {/* Optional: Add client logo here */}
        </div>
        
        {/* Content tabs */}
        <div className="mb-8 border-b border-gray-800">
          <div className="flex overflow-x-auto space-x-4">
            <button 
              className={`pb-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'overview' ? 'border-red-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`pb-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'challenges' ? 'border-red-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab('challenges')}
            >
              Sfide & Soluzioni
            </button>
            <button 
              className={`pb-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'results' ? 'border-red-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab('results')}
            >
              Risultati
            </button>
            <button 
              className={`pb-2 px-1 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === 'tech' ? 'border-red-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
              onClick={() => setActiveTab('tech')}
            >
              Tecnologie
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="mt-8">
          {/* Overview tab */}
          <div className={activeTab === 'overview' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="mr-3 w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                    <Target size={16} className="text-red-500" />
                  </div>
                  La Sfida
                </h3>
                <p className="text-gray-300 mb-6">{challenge}</p>
                
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <div className="mr-3 w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                    <Check size={16} className="text-red-500" />
                  </div>
                  La Soluzione
                </h3>
                <p className="text-gray-300">{solution}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <div className="mr-3 w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center">
                    <Award size={16} className="text-red-500" />
                  </div>
                  Risultati Chiave
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg">
                      <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="mt-8 bg-gray-900/30 border border-gray-800 p-6 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 text-red-500 text-4xl font-serif">"</div>
                  <div className="absolute -bottom-3 -right-3 text-red-500 text-4xl font-serif">"</div>
                  
                  <p className="text-lg italic text-gray-300 mb-4">{testimonial.quote}</p>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-red-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Challenges tab */}
          <div className={activeTab === 'challenges' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Le Sfide</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Infrastruttura tecnologica obsoleta con alto costo di manutenzione</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Esperienza cliente frammentata tra canali diversi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Tempi di sviluppo e rilascio prodotti eccessivamente lunghi</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 w-6 h-6 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300">Requisiti normativi stringenti in continua evoluzione</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Le Soluzioni</h3>
                <ul className="space-y-4">
                  {keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 p-1 bg-red-900/30 rounded-full flex-shrink-0">
                        <Check size={14} className="text-red-500" />
                      </div>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Results tab */}
          <div className={activeTab === 'results' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp size={20} className="mr-2 text-red-500" />
                  Impatto del Progetto
                </h3>
                <p className="text-gray-300">L'implementazione della soluzione ha generato un impatto significativo sulle operazioni aziendali, con miglioramenti misurabili in diverse aree chiave.</p>
              </div>
              
              {results.map((result, idx) => (
                <div key={idx} className="bg-gray-900/40 p-6 rounded-lg border border-gray-800 relative overflow-hidden group">
                  <div className="absolute bottom-0 left-0 h-1 bg-red-500" style={{ width: result.value }}></div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">{result.value}</div>
                  <div className="text-gray-400">{result.metric}</div>
                </div>
              ))}
              
              <div className="col-span-full mt-6">
                <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-r from-gray-900/50 to-black/60">
                  <div className="text-xl font-semibold mb-4">Testimonianza Cliente</div>
                  <blockquote className="text-lg text-gray-300 italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3"></div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-red-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech tab */}
          <div className={activeTab === 'tech' ? 'block' : 'hidden'}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-6">Stack Tecnologico</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, idx) => (
                    <div key={idx} className="bg-gray-900/30 border border-gray-800 p-4 rounded-lg text-center group hover:border-red-500/50 transition-colors">
                      <div className="text-lg font-medium group-hover:text-red-400 transition-colors">{tech}</div>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Architettura</h3>
                <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    La soluzione è stata implementata con un'architettura moderna a microservizi, con componenti containerizzati orchestrati su Kubernetes per garantire scalabilità e resilienza.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 my-6">
                    <div className="bg-gray-800/50 py-3 px-4 rounded text-center text-sm">Frontend</div>
                    <div className="bg-red-900/20 border border-red-500/30 py-3 px-4 rounded text-center text-sm">API Layer</div>
                    <div className="bg-gray-800/50 py-3 px-4 rounded text-center text-sm">Database</div>
                  </div>
                  
                  <p className="text-gray-300">
                    L'infrastruttura è interamente gestita come Infrastructure as Code (IaC), consentendo deployments rapidi e affidabili attraverso pipeline CI/CD completamente automatizzate.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Approccio Tecnico</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900/30 border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-medium">Design API-First</h4>
                    <p className="text-sm text-gray-400 mt-1">Progettazione guidata dalle interfacce per massima interoperabilità</p>
                  </div>
                  
                  <div className="bg-gray-900/30 border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-medium">Continuous Integration</h4>
                    <p className="text-sm text-gray-400 mt-1">Processi di build e test automatizzati per garantire qualità</p>
                  </div>
                  
                  <div className="bg-gray-900/30 border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-medium">Deployment Zero-Downtime</h4>
                    <p className="text-sm text-gray-400 mt-1">Strategie di rilascio progressive senza interruzione del servizio</p>
                  </div>
                  
                  <div className="bg-gray-900/30 border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-medium">Monitoraggio Proattivo</h4>
                    <p className="text-sm text-gray-400 mt-1">Sistemi avanzati di osservabilità con alert predittivi</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
                    <span className="mr-2">Scarica whitepaper</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}