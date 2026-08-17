import { Box } from '@chakra-ui/react';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { Education } from './components/education/Education';
import { Hero } from './components/hero/Hero';
import { Projects } from './components/projects/Projects';
import { TechStack } from './components/skills/TechStack';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.055,
      wheelMultiplier: 0.74,
      smoothWheel: true,
    });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Box minH="100vh" overflow="hidden" bg="ink.950" color="bone.50">
      <CustomCursor />
      <Hero />
      <Projects />
      <TechStack />
      <Education />
    </Box>
  );
}

export default App;
