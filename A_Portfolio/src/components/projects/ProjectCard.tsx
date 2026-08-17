import { Box, Heading, HStack, ListItem, Stack, Tag, Text, UnorderedList } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ThreatSimulator } from './ThreatSimulator';

const MotionBox = motion(Box);

type Project = {
  title: string;
  subtitle: string;
  category: string;
  accent: string;
  tech: string[];
  highlights: string[];
  demo: boolean;
};

export function ProjectCard({ project }: { project: Project }) {
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(useTransform(ry, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(rx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rx.set(px - 0.5);
    ry.set(py - 0.5);
    setShine({ x: px * 100, y: py * 100 });
  };

  return (
    <MotionBox
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      data-magnetic
    >
      <GlassCard
        p={{ base: 5, md: 7 }}
        minH="100%"
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, ${project.accent}33, transparent 28%)`,
          pointerEvents: 'none',
        }}
      >
        <Stack spacing={5}>
          <Box>
            <Text fontFamily="mono" fontSize="xs" color={project.accent}>
              {project.category}
            </Text>
            <Heading as="h3" mt={2} fontSize={{ base: '26px', md: '34px' }}>
              {project.title}
            </Heading>
            <Text color="whiteAlpha.700" mt={1}>
              {project.subtitle}
            </Text>
          </Box>
          <HStack flexWrap="wrap" gap={2}>
            {project.tech.map((tech) => (
              <Tag key={tech} bg="rgba(255,255,255,0.07)" color="whiteAlpha.850" borderRadius="8px" fontFamily="mono" fontSize="xs">
                {tech}
              </Tag>
            ))}
          </HStack>
          <UnorderedList spacing={3} color="whiteAlpha.800" pl={4}>
            {project.highlights.map((highlight) => (
              <ListItem key={highlight}>{highlight}</ListItem>
            ))}
          </UnorderedList>
          {project.demo && <ThreatSimulator />}
        </Stack>
      </GlassCard>
    </MotionBox>
  );
}
