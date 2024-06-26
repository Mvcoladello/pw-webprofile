import React from 'react';
import { Header } from "./components/header";
import { ResumeCard } from "./components/resume-card";
import { FeaturedWorksSection } from "./components/featuredworksSection";
import { TechCarousel } from "./components/carrousel";

export default function App() {
  return (
    <div className='max-w-4xl space-y-6 mx-auto justify-center'>
      <Header/>
      <ResumeCard/>
      <FeaturedWorksSection/>
      <TechCarousel/>
    </div>
  );
}

