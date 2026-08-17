import { Box } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };
    const enter = (event: Event) => {
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest('button, a, input, textarea, [data-magnetic]')));
    };
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerover', enter);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', enter);
    };
  }, [x, y]);

  return (
    <MotionBox
      display={{ base: 'none', lg: 'block' }}
      position="fixed"
      left={0}
      top={0}
      w={active ? '54px' : '36px'}
      h={active ? '54px' : '36px'}
      border="1px solid rgba(244,241,234,0.58)"
      borderRadius="999px"
      pointerEvents="none"
      zIndex={1000}
      mixBlendMode="difference"
      style={{ x: springX, y: springY }}
      sx={{ transition: 'width 160ms ease, height 160ms ease' }}
      _after={{
        content: '""',
        position: 'absolute',
        inset: '9px',
        borderRadius: 'inherit',
        bg: active ? 'rgba(244,241,234,0.2)' : 'rgba(244,241,234,0.08)',
      }}
    />
  );
}
