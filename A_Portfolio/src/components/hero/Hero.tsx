import { Box, Container, Flex, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MoveDownRight } from 'lucide-react';
import { MouseEvent, ReactNode } from 'react';
import { Scene3D } from './Scene3D';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const ease = [0.76, 0, 0.24, 1] as const;

function MagneticLink({ href, children, icon }: { href: string; children: ReactNode; icon: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.6 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  return (
    <MotionBox
      as="span"
      data-magnetic
      role="group"
      display="inline-flex"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        display="inline-flex"
        alignItems="center"
        gap={2}
        py={2}
        color="bone.50"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight={500}
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
        sx={{
          svg: { transition: 'transform 420ms cubic-bezier(0.76, 0, 0.24, 1)' },
          '&:hover svg': { transform: 'translate(3px, -3px)' },
        }}
      >
        {icon}
        <Box as="span" position="relative" overflow="hidden">
          <Box as="span" display="block">
            {children}
          </Box>
          <Box
            as="span"
            position="absolute"
            left={0}
            right={0}
            bottom="-1px"
            h="1px"
            bg="bone.50"
            transform="scaleX(0.18)"
            transformOrigin="left"
            transition="transform 420ms cubic-bezier(0.76, 0, 0.24, 1)"
            _groupHover={{ transform: 'scaleX(1)' }}
          />
        </Box>
      </Link>
    </MotionBox>
  );
}

export function Hero() {
  const name = 'Aprna Kumari'.split('');

  return (
    <Box as="section" id="top" minH="100svh" position="relative" overflow="hidden" bg="ink.950">
      <Box position="absolute" inset={0} opacity={0.48}>
        <Scene3D />
      </Box>
      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(circle at 72% 18%, rgba(184,216,255,0.16), transparent 28%), radial-gradient(circle at 24% 78%, rgba(189,248,223,0.08), transparent 30%), linear-gradient(180deg, rgba(3,4,5,0.66), #030405 92%)"
      />
      <Container maxW="1440px" minH="100svh" position="relative" zIndex={1} px={{ base: 5, md: 10 }} py={{ base: 7, md: 10 }}>
        <Flex minH="calc(100svh - 80px)" direction="column" justify="space-between">
          <HStack justify="space-between" color="bone.200" fontFamily="mono" fontSize={{ base: '11px', md: 'xs' }}>
            <Text>AP / 2026</Text>
            <Text textAlign="right">FULL-STACK + PYTHON BACKEND</Text>
          </HStack>

          <Stack spacing={{ base: 7, md: 9 }} mt={{ base: 16, md: 24 }}>
            <MotionHeading
              as="h1"
              aria-label="Aprna Kumari"
              fontWeight={800}
              fontSize={{ base: 'clamp(58px, 18vw, 120px)', md: 'clamp(118px, 15.5vw, 230px)' }}
              lineHeight="0.78"
              letterSpacing="0"
              maxW="1280px"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.045, delayChildren: 0.18 } } }}
            >
              {name.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  variants={{
                    hidden: { y: '104%', opacity: 0, rotate: 5 },
                    visible: { y: 0, opacity: 1, rotate: 0 },
                  }}
                  transition={{ duration: 0.96, ease }}
                  style={{ display: letter === ' ' ? 'block' : 'inline-block', overflow: 'hidden' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </MotionHeading>

            <MotionBox initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.9, ease }}>
              <Text color="bone.200" fontSize={{ base: 'xl', md: '3xl' }} lineHeight="1.25" maxW="760px">
                Full-Stack & Python Backend Engineer.
              </Text>
            </MotionBox>
          </Stack>

          <Flex align={{ base: 'flex-start', md: 'flex-end' }} justify="space-between" gap={8} direction={{ base: 'column', md: 'row' }} pb={{ base: 4, md: 1 }}>
            <MotionBox
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.22, duration: 0.8, ease }}
              maxW="520px"
              color="bone.500"
              fontSize={{ base: 'sm', md: 'md' }}
              lineHeight="1.8"
            >
              Building precise API systems, AI security workflows, and elegant product interfaces with a backend engineer's rigor.
            </MotionBox>
            <HStack spacing={{ base: 5, md: 8 }} role="navigation" aria-label="Social links">
              <MagneticLink href="mailto:aprnas662@gmail.com" icon={<Mail size={17} strokeWidth={1.35} />}>
                Email
              </MagneticLink>
              <MagneticLink href="https://github.com/aprnas662-byte" icon={<Github size={17} strokeWidth={1.35} />}>
                GitHub
              </MagneticLink>
              <MagneticLink href="https://www.linkedin.com/in/aprna-singh-216bb4371/" icon={<Linkedin size={17} strokeWidth={1.35} />}>
                LinkedIn
              </MagneticLink>
              <Box as="a" href="#work" aria-label="Go to work section" display="inline-flex" color="bone.200">
                <MoveDownRight size={24} strokeWidth={1.15} />
              </Box>
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
