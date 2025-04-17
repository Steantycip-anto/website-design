"use client"

import { useState } from "react";

// Importazione dinamica dei componenti delle sezioni
import * as HeadersComponents from "@/components/headers";
import * as HeroComponents from "@/components/heroes";
import * as Customers from "@/components/customers";
import * as Expertises from "@/components/expertises";
import * as Models3D from "@/components/models3d";
import * as Timelines from "@/components/timelines";
import * as Features from "@/components/features";


const SITE_SECTIONS = [
  {
    type: "header",
    title: "Header",
    components: {
      "Header": { name: "Header", component: HeadersComponents.Header },
      "DarkHeader": { name: "Dark Header", component: HeadersComponents.DarkHeader },
      "MinimalHeader": { name: "Minimal Header", component: HeadersComponents.MinimalHeader },
      "AnimatedHeader": { name: "Animated Header", component: HeadersComponents.AnimatedHeader }
    },
    defaultActive: "Header"
  },
  {
    type: "hero",
    title: "Hero",
    components: {
      "hero-split": { name: "Modern Split", component: HeroComponents.HeroSplit },
      "hero-fullscreen": { name: "Full Screen", component: HeroComponents.HeroFullScreen },
      "hero-animated": { name: "Animated", component: HeroComponents.HeroAnimated },
      "hero-variant1": { name: "Variant 1", component: HeroComponents.Variant1 },
      "hero-variant2": { name: "Variant 2", component: HeroComponents.Variant2 },
      "hero-variant3": { name: "Variant 3", component: HeroComponents.Variant3 },
    },
    defaultActive: "hero-variant1"
  },
  {
    type: "customers",
    title: "Customers",
    components: {
      "customers1": { name: "Customers 1", component: Customers.Customers1 },
      "customers2": { name: "Customers 2", component: Customers.Customers2 },
      "customers3": { name: "Customers 3", component: Customers.Customers3 },
      "logo-wall-3D": { name: "Logo Wall 3D", component: Customers.LogoWall3D },
      "expanding-grid-logos": { name: "Expanding Grid Logos", component: Customers.ExpandingGridLogos },
    },
      defaultActive: "customers1"
    },
  {
    type: "expertise",
    title: "Expertise",
    components: {
      "expertise1": { name: "Expertise 1", component: Expertises.Expertise1 },
      "expertise-tab-slider": { name: "Tab Slider", component: Expertises.ExpertiseTabSlider },
      "expertise-cards-hover": { name: "Cards Hover", component: Expertises.ExpertiseCardsHover },
      "expertise-horizontal-timeline1": { name: "Horizontal Timeline 1", component: Expertises.ExpertiseHorizontalTimeline1 },
      "expertise-horizontal-timeline2": { name: "Horizontal Timeline 2", component: Expertises.ExpertiseHorizontalTimeline2 },
    },
      defaultActive: "expertise1"
    },
    {
      type: "3dModels",
      title: "3D Models",
      components: {
      "models1": { name: "Models 1", component: Models3D.Models1 },
        "models2": { name: "Models 2", component: Models3D.Models2 },
        "models3": { name: "Models 3", component: Models3D.Models3 },
        "models4": { name: "Models 4", component: Models3D.Models4 },
        "models5": { name: "Models 5", component: Models3D.Models5 },
    },
    defaultActive: "models5"
  },
    {
      type: "timeline",
      title: "Timeline",
      components: {
      "timeline1": { name: "Timeline 1", component: Timelines.Timeline1 },
    },
    defaultActive: "timeline1"
  },
    {
      type: "feature",
      title: "Feature",
      components: {
      "feature1": { name: "Feature 1", component: Features.Feature1 },
      // Aggiungi un nuovo content component qui
    },
    defaultActive: "feature1"
  },
  // Aggiungi una nuova categoria di sezione qui
  // {
  //   type: "testimonials",
  //   title: "Testimonials",
  //   components: {
  //     "testimonials-grid": { name: "Grid Layout", component: TestimonialComponents.TestimonialsGrid },
  //     "testimonials-carousel": { name: "Carousel", component: TestimonialComponents.TestimonialsCarousel },
  //   },
  //   defaultActive: "testimonials-grid"
  // },
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
            className={`cursor-pointer px-4 py-2 rounded ${
              activeId === id ? "bg-red-600" : "hover:bg-gray-700"
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

export default function Page() {
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

  const [show, setShow] = useState(true)
  return (
    <div className="min-h-screen bg-gray-50">
      <input id="show" type="checkbox" checked={show} onChange={() => setShow(!show)} />
      <label htmlFor="show">Show Options selectior</label>
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