import { Box, Container, Flex, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const MotionBox = motion(Box);
const ease = [0.76, 0, 0.24, 1] as const;

const projects = [
  {
    index: '01',
    title: 'SentinelAI',
    subtitle: 'Enterprise AI API Security Gateway',
    href: 'https://github.com/aprnas662-byte/SentinelAI',
    details:
      '3-stage security gateway combining deterministic pattern checks, ML-driven payload anomaly detection, and LLM threat mitigation. Built with Python, FastAPI, PostgreSQL, and Scikit-learn.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Scikit-learn'],
  },
  {
    index: '02',
    title: 'Resume-to-Job Matcher',
    subtitle: 'ATS Simulator',
    href: 'https://github.com/aprnas662-byte/Resume_to_Job_Matcher_ATS_Simulator',
    details:
      'End-to-end ATS simulator with a 4-step processing pipeline for PDF extraction, text sanitization, keyword matching, and skills-gap analysis. Built with React, Chakra UI, Python, and FastAPI.',
    stack: ['React', 'Chakra UI', 'Python', 'FastAPI'],
  },
];

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [72, -72]);
  const ruleScale = useTransform(scrollYProgress, [0.16, 0.48], [0, 1]);

  return (
    <MotionBox
      ref={ref}
      as="article"
      position="relative"
      py={{ base: 16, md: 24 }}
      borderTop="1px solid rgba(244,241,234,0.12)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20% 0px' }}
      transition={{ duration: 1, ease }}
    >
      <MotionBox position="absolute" top={0} left={0} h="1px" bg="bone.50" style={{ scaleX: ruleScale, transformOrigin: 'left' }} />
      <Flex direction={{ base: 'column', lg: 'row' }} justify="space-between" gap={{ base: 10, lg: 20 }} align="flex-start">
        <Stack spacing={7} flex="1">
          <Text fontFamily="mono" color="bone.500" fontSize="xs">
            {project.index} / FEATURED SYSTEM
          </Text>
          <Box overflow="hidden">
            <MotionBox
              initial={{ y: '110%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.92, ease }}
            >
              <Heading fontSize={{ base: '48px', md: '88px', xl: '118px' }} lineHeight="0.88" letterSpacing="0" fontWeight={800} maxW="850px">
                {project.title}
              </Heading>
            </MotionBox>
          </Box>
          <Text color="bone.200" fontSize={{ base: 'lg', md: '2xl' }} lineHeight="1.25">
            {project.subtitle}
          </Text>
        </Stack>

        <MotionBox style={{ y: contentY }} w={{ base: '100%', lg: '39%' }} pt={{ lg: 10 }}>
          <Stack spacing={8}>
            <Text color="bone.200" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.85">
              {project.details}
            </Text>
            <Flex gap={3} flexWrap="wrap">
              {project.stack.map((item) => (
                <Box
                  key={item}
                  as="span"
                  px={3}
                  py={2}
                  borderTop="1px solid rgba(244,241,234,0.18)"
                  color="bone.500"
                  fontFamily="mono"
                  fontSize="11px"
                >
                  {item}
                </Box>
              ))}
            </Flex>
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              display="inline-flex"
              alignItems="center"
              gap={3}
              w="fit-content"
              color="bone.50"
              fontWeight={600}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              sx={{
                svg: { transition: 'transform 420ms cubic-bezier(0.76, 0, 0.24, 1)' },
                '&:hover svg': { transform: 'translate(5px, -5px)' },
              }}
            >
              View repository <ArrowUpRight size={18} strokeWidth={1.35} />
            </Link>
          </Stack>
        </MotionBox>
      </Flex>
    </MotionBox>
  );
}

export function Projects() {
  return (
    <Box as="section" id="work" position="relative" bg="ink.950">
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <HStack justify="space-between" align="flex-end" py={{ base: 12, md: 20 }} color="bone.500">
          <Text fontFamily="mono" fontSize="xs">
            SELECTED WORK
          </Text>
          <Text display={{ base: 'none', md: 'block' }} maxW="360px" textAlign="right" fontSize="sm" lineHeight="1.7">
            Large-scale project studies with scroll-tuned depth and quiet technical detail.
          </Text>
        </HStack>
        {projects.map((project) => (
          <ProjectPanel key={project.title} project={project} />
        ))}
      </Container>
    </Box>
  );
}
