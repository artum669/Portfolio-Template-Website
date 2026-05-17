import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import TechArsenal from '@/components/sections/TechArsenal';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import NowPlaying from '@/components/sections/NowPlaying';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <TechArsenal />
      <Experience />
      <Achievements />
      <NowPlaying />
      <Contact />
    </>
  );
}
