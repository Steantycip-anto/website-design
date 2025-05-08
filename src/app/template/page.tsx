"use client"
import { CompletePage } from "@/app/page"

import * as Heros from "@/components/templates/heros"
import * as Caracteristics from "@/components/templates/caracteristics"
import * as Galleries from "@/components/templates/galleries"
import * as Videos from "@/components/templates/videos"
import * as CaseStudies from "@/components/templates/case-study"
import * as Splits from "@/components/templates/splits"
import * as Contacts from "@/components/templates/contacts"

const SITE_SECTIONS = [
    {
      type: "hero",
      title: "Hero",
      components: {
        "hero-1": { name: "Hero 1", component: Heros.HeaderDetail },
        "hero-2": { name: "Hero 1", component: Heros.HeroSection },
      },
      defaultActive: "hero-2"
    },
    {
      type: "caracteristics",
      title: "Caracteristics",
      components: {
        "caracteristics-1": { name: "Caracteristics 1", component: Caracteristics.SpecsFeatures },
        "caracteristics-2": { name: "Caracteristics 2", component: Caracteristics.FeatureGrid },
        "caracteristics-3": { name: "Caracteristics 3", component: Caracteristics.FeaturesSection },
        "caracteristics-4": { name: "Caracteristics 4", component: Caracteristics.TechGridVariant },
      },
      defaultActive: "caracteristics-1"
    },
    {
      type: "galleries",
      title: "Galleries",
      components: {
        "gallery-1": { name: "Interactive Gallery", component: Galleries.InteractiveGallery },
      },
      defaultActive: "gallery-1"
    },
    {
      type: "videos",
      title: "Videos",
      components: {
        "video-1": { name: "Video 1", component: Videos.VideoShowcase },
      },
      defaultActive: "video-1"
    },
    {
      type: "case-study",
      title: "Case Study",
      components: {
        "case-study-1": { name: "Case Study 1", component: CaseStudies.CaseStudySection },
      },
      defaultActive: "case-study-1"
    },
    {
      type: "slit",
      title: "Split",
      components: {
        "split-1": { name: "Split 1", component: Splits.SplitSection },
        "split-2": { name: "Split 2", component: Splits.Feature1 },
        "split-3": { name: "Split 3", component: Splits.CircularOrbsVariant },
        "split-4": { name: "Split 4", component: Splits.AsymmetricStatsVariant },
        "split-5": { name: "Split 5", component: Splits.DiagonalSplitVariant },
      },
      defaultActive: "split-3"
    },
    {
      type: "contacts",
      title: "Contacts",
      components: {
        "contact-1": { name: "Contact 1", component: Contacts.ContactCTA },
      },
      defaultActive: "contact-1"
    },
  ];

const Page = () => <CompletePage site_sections={SITE_SECTIONS} />
export default Page