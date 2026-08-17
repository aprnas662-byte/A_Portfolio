import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { MouseEvent, ReactNode, useRef } from 'react';

const MotionBox = motion(Box);
const ease = [0.76, 0, 0.24, 1] as const;

const education = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    meta: 'CIMAGE Group of Institutions',
    date: '2024 - 2027',
  },
  {
    title: 'Intermediate (74.5%)',
    meta: 'Parvati High School, Rampur Hasan Lai',
    date: 'Completed',
  },
  {
    title: 'Matriculation (75%)',
    meta: 'Rajkiyakrit High School, Bikram',
    date: 'Completed',
  },
];

const certifications = [
  'Accenture Data Analytics Job Simulation - Forage',
  'Data Analytics Proficiency Certification',
  'HTML Training Certification - EduPyramids / Spoken Tutorial Project, IIT Bombay (June 2025)',
  'Python Programming Course - GeeksforGeeks, 3-week Program (2025)',
  'Power BI for Beginners - Simplilearn SkillUp (June 2025)',
];

function MagneticSurface({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.7 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.08);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.08);
  };

  return (
    <MotionBox
      data-magnetic
      position="relative"
      minH="174px"
      p={{ base: 5, md: 6 }}
      overflow="hidden"
      border="1px solid rgba(244,241,234,0.1)"
      bg="linear-gradient(135deg, rgba(244,241,234,0.07), rgba(244,241,234,0.018))"
      backdropFilter="blur(18px)"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ borderColor: 'rgba(244,241,234,0.28)' }}
      transition={{ duration: 0.45, ease }}
      _before={{
        content: '""',
        position: 'absolute',
        inset: '-1px',
        bg: 'radial-gradient(circle at 22% 0%, rgba(184,216,255,0.16), transparent 34%)',
        opacity: 0,
        transition: 'opacity 520ms cubic-bezier(0.76, 0, 0.24, 1)',
      }}
      _hover={{ _before: { opacity: 1 } }}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </MotionBox>
  );
}

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 72%', 'end 35%'] });
  const trackScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0, 0.5], [48, -18]);

  return (
    <Box
      ref={ref}
      as="section"
      position="relative"
      py={{ base: 18, md: 30 }}
      bg="radial-gradient(circle at 78% 18%, rgba(184,216,255,0.075), transparent 32%), #050505"
      overflow="hidden"
    >
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <Flex direction={{ base: 'column', xl: 'row' }} gap={{ base: 14, xl: 20 }} align="flex-start">
          <MotionBox style={{ y: headingY }} position={{ xl: 'sticky' }} top={{ xl: 24 }} flex="0 0 38%">
            <Stack spacing={4}>
              <Text color="bone.500" fontFamily="mono" fontSize="xs">
                EDUCATION / CERTIFICATIONS
              </Text>
              <Heading fontSize={{ base: '42px', md: '82px' }} lineHeight="0.9" letterSpacing="0">
                Proof of craft, still in motion.
              </Heading>
              <Text color="bone.500" maxW="420px" lineHeight="1.8">
                Academic waypoints and practical certifications arranged as a quiet timeline of momentum.
              </Text>
            </Stack>
          </MotionBox>

          <Box flex="1" position="relative" pl={{ base: 8, md: 12 }}>
            <Box position="absolute" left={{ base: '7px', md: '11px' }} top={0} bottom={0} w="1px" bg="rgba(244,241,234,0.12)" />
            <MotionBox
              position="absolute"
              left={{ base: '7px', md: '11px' }}
              top={0}
              bottom={0}
              w="1px"
              bg="linear-gradient(180deg, rgba(184,216,255,0), rgba(184,216,255,0.9), rgba(189,248,223,0.42))"
              boxShadow="0 0 22px rgba(184,216,255,0.45)"
              style={{ scaleY: trackScale, transformOrigin: 'top' }}
            />

            <Stack spacing={{ base: 10, md: 14 }}>
              {education.map((item, index) => (
                <MotionBox
                  key={item.title}
                  position="relative"
                  initial={{ opacity: 0, y: 42, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20, delay: index * 0.08 }}
                >
                  <Box
                    position="absolute"
                    left={{ base: '-34px', md: '-46px' }}
                    top="8px"
                    w={{ base: '14px', md: '18px' }}
                    h={{ base: '14px', md: '18px' }}
                    borderRadius="full"
                    bg="#050505"
                    border="1px solid rgba(244,241,234,0.58)"
                    boxShadow="0 0 24px rgba(244,241,234,0.18)"
                  />
                  <Flex direction={{ base: 'column', md: 'row' }} gap={5} justify="space-between" borderTop="1px solid rgba(244,241,234,0.12)" pt={6}>
                    <Stack spacing={2}>
                      <Flex align="center" gap={3} color="bone.200">
                        <GraduationCap size={18} strokeWidth={1.25} />
                        <Text fontFamily="mono" fontSize="xs">
                          {item.date}
                        </Text>
                      </Flex>
                      <Heading as="h3" fontSize={{ base: '24px', md: '36px' }} lineHeight="1" letterSpacing="0">
                        {item.title}
                      </Heading>
                    </Stack>
                    <Text color="bone.500" maxW="310px" lineHeight="1.7">
                      {item.meta}
                    </Text>
                  </Flex>
                </MotionBox>
              ))}

              <Box pt={{ base: 4, md: 8 }}>
                <Text color="bone.500" fontFamily="mono" fontSize="xs" mb={5}>
                  CERTIFICATIONS
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  {certifications.map((certificate, index) => (
                    <MotionBox
                      key={certificate}
                      initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: '-8% 0px' }}
                      transition={{ type: 'spring', stiffness: 50, damping: 20, delay: index * 0.06 }}
                    >
                      <MagneticSurface>
                        <Stack h="100%" justify="space-between" spacing={8}>
                          <Award size={18} strokeWidth={1.2} color="#CCC6BA" />
                          <Text color="bone.200" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.45">
                            {certificate}
                          </Text>
                        </Stack>
                      </MagneticSurface>
                    </MotionBox>
                  ))}
                </SimpleGrid>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
