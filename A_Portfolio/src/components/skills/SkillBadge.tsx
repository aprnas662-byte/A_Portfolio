import { Box, HStack, Text } from '@chakra-ui/react';

type SkillBadgeProps = {
  label: string;
};

export function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <HStack
      as="span"
      px={3}
      py={2}
      border="1px solid rgba(255,255,255,0.1)"
      bg="rgba(255,255,255,0.035)"
      borderRadius="8px"
      spacing={2}
      minH="36px"
    >
      <Box w="6px" h="6px" borderRadius="full" bg="#00F0FF" />
      <Text fontFamily="mono" fontSize="xs" color="whiteAlpha.850">
        {label}
      </Text>
    </HStack>
  );
}
