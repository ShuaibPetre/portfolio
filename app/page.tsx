import React from 'react';
import Home from './home';
import ProjectsPage from './projects/project';
import AboutSection from './about/about';

export default function  HomePage() {
  return (
    <main className="">
      <Home />
      <AboutSection />
      <ProjectsPage />
    </main>
  );
};

