import React from 'react';
import HeroSection from '@/components/features/HeroSection';
import ManifestoSection from '@/components/features/ManifestoSection';
import ServicesHorizontal from '@/components/features/ServicesHorizontal';
import MaterialInspector from '@/components/features/MaterialInspector';
import SpotlightGallery from '@/components/features/SpotlightGallery';
import VideoGallery from '@/components/features/VideoGallery';
import ArtisanProcess from '@/components/features/ArtisanProcess';
import ContactSection from '@/components/features/ContactSection';
import PageSEO from '@/components/seo/PageSEO';
import { HOME_SEO } from '@/data/seoData';

export default function Home() {
  return (
    <main id="main-content" className="relative z-20">
      <PageSEO
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        canonical={HOME_SEO.canonical}
        ogTitle={HOME_SEO.ogTitle}
        ogImage={HOME_SEO.ogImage}
        // Note: Global JSON-LD for Home is already in index.html, no need to duplicate here.
      />

      {/* 01. Hero Section with Video-Masked Typography */}
      <HeroSection />

      {/* 02. The Atelier Manifesto (Asymmetric Editorial Bento Grid) */}
      <ManifestoSection />

      {/* 03. Haute Services Horizontal Showcase */}
      <ServicesHorizontal />

      {/* 04. Tactile Light & Swatch Inspector */}
      <MaterialInspector />

      {/* 05. The Private Archive (Interactive Spotlight Grid) */}
      <SpotlightGallery />

      {/* 05.5 Video Showcase */}
      <VideoGallery />

      {/* 06. The 5-Stage Artisan Alchemy */}
      <ArtisanProcess />

      {/* 07. Private Client Inquiry (Floating Labels with Gold Glow) */}
      <ContactSection />
    </main>
  );
}
