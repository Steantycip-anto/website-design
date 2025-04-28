"use client"

import { useState } from "react";

// Importazione dinamica dei componenti delle sezioni
import * as HeadersComponents from "@/components/headers";
import * as ModelDetails from "@/components/model-details/details";
import * as Footers from "@/components/footer";

import { models} from "@/lib/models";

const SITE_SECTIONS = [
  {
    type: "header",
    title: "Header",
    components: {
      "Header1": { name: "Header 1", component: HeadersComponents.FirstHeader },
      "DarkHeader": { name: "Dark Header", component: HeadersComponents.DarkHeader },
      "MinimalHeader": { name: "Minimal Header", component: HeadersComponents.MinimalHeader },
      "AnimatedHeader": { name: "Animated Header", component: HeadersComponents.AnimatedHeader },
      "variant-1": { name: "Variant 1", component: HeadersComponents.TechMenuDesign1 },
      "variant-2": { name: "Variant 2", component: HeadersComponents.TechMenuDesign2 },
      "variant-3": { name: "Variant 3", component: HeadersComponents.TechMenuDesign3 },
      "variant-4": { name: "Variant One", component: HeadersComponents.VariantOne },
      "variant-5": { name: "Variant Two", component: HeadersComponents.VariantTwo },
      "variant-6": { name: "Variant Three", component: HeadersComponents.VariantThree },
    },
    defaultActive: "variant-4"
  },
  {
    type: "model-details",
    title: "Model Details",
    components: {
      "model-detail": { name: "Model Detail", component: ModelDetails.ModelDetail },
      "model-detail-card": { name: "Model Detail Card", component: ModelDetails.ModelDetailCard },
      "model-detail-dashboard-detail-card": { name: "Model Detail Dashboard", component: ModelDetails.ModelDetailDashboard },
    },
    defaultActive: "model-detail-card"
  },
  {
    type: "footer",
    title: "Footer",
    components: {
      "minimal-column-footer": { name: "Minimal Column Footer", component: Footers.MinimalColumnFooter },
      "geometric-grid-footer": { name: "Geometric Grid Footer", component: Footers.GeometricGridFooter },
      "futuristic-interactive-footer": { name: "Futuristic Interactive Footer", component: Footers.FuturisticInteractiveFooter },
    },
    defaultActive: "futuristic-interactive-footer"
  },
];

// Componente selettore di sezione
const SectionSelector = ({ sections, activeId, onChange, title }) => (
  <div className="bg-black text-white p-4 z-40 w-full border border-dashed">
    <div className="container mx-auto">
      <h3 className="mb-2 font-bold">{title} Options:</h3>
      <div className="flex flex-wrap gap-3">
        {Object.entries(sections).map(([id, section]) => (
          <div
            key={id}
            className={`cursor-pointer px-4 py-2 rounded ${activeId === id ? "bg-red-600" : "hover:bg-gray-700"
              }`}
            onClick={() => onChange(id)}
          >
            {section.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Page({ params }: { params: { modelId: string } }) {
    const model = models.find((model) => model.id.toString() === params.modelId);
    
    // Inizializza lo stato per ogni tipo di sezione con il valore predefinito
    const [activeSections, setActiveSections] = useState(() => {
    return SITE_SECTIONS.reduce((acc, section) => {
      acc[section.type] = section.defaultActive;
      return acc;
    }, {});
  });

  // Funzione per aggiornare la sezione attiva
  const handleSectionChange = (sectionType, sectionId) => {
    setActiveSections(prev => ({
      ...prev,
      [sectionType]: sectionId
    }));
  };

  const [show, setShow] = useState(false)
  
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute top-1 left-1">
        <input id="show" type="checkbox" checked={show} onChange={() => setShow(!show)} />
        <label htmlFor="show" className="opacity-30">Show Options selectior</label>
      </div>
      {/* Render dinamico di tutte le sezioni configurate */}
      {SITE_SECTIONS.map((sectionConfig) => {
        const activeId = activeSections[sectionConfig.type];
        const ActiveComponent = sectionConfig.components[activeId].component;

        return (
          <div key={sectionConfig.type}>
            {/* Selettore per questa sezione */}
            {show && <SectionSelector
              sections={sectionConfig.components}
              activeId={activeId}
              onChange={(id) => handleSectionChange(sectionConfig.type, id)}
              title={sectionConfig.title}
            />}

            {/* Componente attivo per questa sezione */}
            <ActiveComponent />
          </div>
        );
      })}
    </div>
  );
}