import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const ease = [0.76, 0, 0.24, 1] as const;

const groups = [
  { label: 'Core Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C', 'Java', 'PHP'] },
  { label: 'Frontend & UI', skills: ['React', 'HTML', 'CSS', 'Bootstrap', 'Chakra UI'] },
  { label: 'Backend & DB', skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'FastAPI'] },
  { label: 'Tools & Security', skills: ['Git', 'Scikit-learn', 'Threat Detection'] },
];

export function TechStack() {
  return (
    <Box as="section" py={{ base: 18, md: 30 }} bg="linear-gradient(180deg, #030405 0%, #08090B 100%)" overflow="hidden">
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <Stack spacing={{ base: 12, md: 18 }}>
          <Stack spacing={4} maxW="780px">
            <Text color="bone.500" fontFamily="mono" fontSize="xs">
              TECHNICAL INDEX
            </Text>
            <Heading fontSize={{ base: '42px', md: '82px' }} lineHeight="0.9" letterSpacing="0">
              Spacious tools for exacting systems.
            </Heading>
            <Text color="bone.500" maxW="500px" lineHeight="1.8">
              A focused toolkit for secure APIs, refined interfaces, and applied AI workflows without excess.
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 4 }}
            spacing={{ base: 10, md: 12, xl: 16 }}
            borderTop="1px solid rgba(244,241,234,0.12)"
            pt={{ base: 10, md: 14 }}
          >
            {groups.map((group, index) => (
              <MotionBox
                key={group.label}
                data-magnetic
                minH={{ base: '280px', md: '440px' }}
                p={{ base: 6, md: 8 }}
                borderLeft="1px solid rgba(244,241,234,0.12)"
                bg="linear-gradient(145deg, rgba(244,241,234,0.045), rgba(244,241,234,0.012))"
                backdropFilter="blur(18px)"
                initial={{ opacity: 0, y: 42, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-12% 0px' }}
                transition={{ type: 'spring', stiffness: 50, damping: 20, delay: index * 0.08 }}
                whileHover={{
                  borderColor: 'rgba(244,241,234,0.28)',
                  backgroundColor: 'rgba(244,241,234,0.04)',
                  transition: { duration: 0.45, ease },
                }}
              >
                <Text color="bone.500" fontFamily="mono" fontSize="xs" mb={8}>
                  {group.label}
                </Text>
                <Stack spacing={6}>
                  {group.skills.map((skill, skillIndex) => (
                    <MotionBox
                      key={skill}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.72, delay: index * 0.08 + skillIndex * 0.045, ease }}
                    >
                      <Text
                        color="bone.200"
                        fontSize={{ base: '28px', md: 'clamp(26px, 2.4vw, 38px)' }}
                        lineHeight="1.16"
                        fontWeight={700}
                        transition="color 360ms cubic-bezier(0.76, 0, 0.24, 1)"
                        _hover={{ color: 'bone.50' }}
                      >
                        {skill}
                      </Text>
                    </MotionBox>
                  ))}
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
