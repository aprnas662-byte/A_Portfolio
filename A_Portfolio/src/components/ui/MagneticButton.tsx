import { Box, BoxProps, HStack } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MouseEvent, ReactElement, ReactNode } from 'react';

const MotionBox = motion(Box);

type MagneticButtonProps = Omit<BoxProps, 'children'> & {
  children: ReactNode;
  href?: string;
  target?: string;
  leftIcon?: ReactElement;
  variantMode?: 'primary' | 'glass';
};

export function MagneticButton({ children, href, target, leftIcon, variantMode = 'primary', ...props }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14 });
  const springY = useSpring(y, { stiffness: 180, damping: 14 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  };

  return (
    <MotionBox
      as="span"
      display="inline-block"
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      <Box
        as={href ? 'a' : 'button'}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        type={href ? undefined : 'button'}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        h="48px"
        px={6}
        borderRadius="8px"
        fontWeight={800}
        letterSpacing="0"
        textDecoration="none"
        cursor="pointer"
        color={variantMode === 'primary' ? '#071014' : 'white'}
        bg={variantMode === 'primary' ? 'linear-gradient(90deg, #00F0FF, #00DF89)' : 'rgba(255,255,255,0.04)'}
        border={variantMode === 'primary' ? '0' : '1px solid rgba(255,255,255,0.12)'}
        boxShadow={variantMode === 'primary' ? '0 0 34px rgba(0,240,255,0.28)' : 'none'}
        _hover={{ boxShadow: '0 0 44px rgba(0,240,255,0.34)', textDecoration: 'none' }}
        _active={{ transform: 'translateY(0)' }}
        {...props}
      >
        <HStack spacing={2}>
          {leftIcon}
          <Box as="span">{children}</Box>
        </HStack>
      </Box>
    </MotionBox>
  );
}
