import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Clash Display", "Geist", "Inter", system-ui, sans-serif',
    body: '"Geist", "Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  colors: {
    ink: {
      900: '#08090B',
      950: '#030405',
      980: '#010101',
    },
    bone: {
      50: '#F4F1EA',
      200: '#CCC6BA',
      500: '#7C776F',
    },
    signal: {
      blue: '#B8D8FF',
      mint: '#BDF8DF',
      steel: '#8F9BA8',
    },
  },
  styles: {
    global: {
      html: {
        bg: '#030405',
      },
      body: {
        bg: '#030405',
        color: '#F4F1EA',
        fontFeatureSettings: '"kern"',
        textRendering: 'geometricPrecision',
      },
    },
  },
});
