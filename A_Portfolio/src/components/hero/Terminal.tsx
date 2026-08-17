import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { terminalChecks } from '../../data/portfolio';
import { GlassCard } from '../ui/GlassCard';

export function Terminal() {
  return (
    <GlassCard p={5} maxW="470px" w="100%">
      <HStack mb={4} spacing={2}>
        <Box w="10px" h="10px" borderRadius="full" bg="#ff5f57" />
        <Box w="10px" h="10px" borderRadius="full" bg="#ffbd2e" />
        <Box w="10px" h="10px" borderRadius="full" bg="#28c840" />
        <Text fontFamily="mono" fontSize="xs" color="whiteAlpha.600" pl={2}>
          aprna-secops/health
        </Text>
      </HStack>
      <VStack align="stretch" spacing={3}>
        {terminalChecks.map((check, index) => (
          <motion.div
            key={check}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.35, duration: 0.5 }}
          >
            <HStack justify="space-between" fontFamily="mono" fontSize={{ base: 'xs', md: 'sm' }}>
              <Text color="whiteAlpha.800">&gt; {check}</Text>
              <Box w="8px" h="8px" borderRadius="full" bg="#00DF89" boxShadow="0 0 18px #00DF89" />
            </HStack>
          </motion.div>
        ))}
      </VStack>
    </GlassCard>
  );
}
