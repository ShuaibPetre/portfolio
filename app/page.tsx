import React from 'react';
import Home from './home';
import ProjectsPage from './projects/project';
import AboutSection from './about/about';
import Scroll from './components/scroll'
export default function  HomePage() {
  return (
    <main className="">
      <Home />
      <Scroll />
      <AboutSection />
      <ProjectsPage />
    </main>
  );
};

