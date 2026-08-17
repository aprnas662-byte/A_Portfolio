import { Box, BoxProps } from '@chakra-ui/react';

export function GlassCard({ children, ...props }: BoxProps) {
  return (
    <Box
      border="1px solid rgba(255,255,255,0.08)"
      bg="rgba(255,255,255,0.03)"
      backdropFilter="blur(20px)"
      borderRadius="8px"
      boxShadow="0 24px 80px rgba(0,0,0,0.35)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,240,255,0.12), transparent 32%, rgba(0,223,137,0.08))',
        opacity: 0.8,
        pointerEvents: 'none',
      }}
      {...props}
    >
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </Box>
  );
}
