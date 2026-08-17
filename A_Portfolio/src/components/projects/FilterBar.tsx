import { HStack, Button } from '@chakra-ui/react';

type FilterBarProps = {
  filters: string[];
  active: string;
  onChange: (filter: string) => void;
};

export function FilterBar({ filters, active, onChange }: FilterBarProps) {
  return (
    <HStack spacing={2} flexWrap="wrap" rowGap={2}>
      {filters.map((filter) => (
        <Button
          key={filter}
          size="sm"
          borderRadius="8px"
          bg={active === filter ? 'rgba(0,240,255,0.18)' : 'rgba(255,255,255,0.04)'}
          color={active === filter ? '#BDFBFF' : 'whiteAlpha.760'}
          border="1px solid"
          borderColor={active === filter ? 'rgba(0,240,255,0.34)' : 'rgba(255,255,255,0.08)'}
          _hover={{ bg: 'rgba(0,240,255,0.12)' }}
          onClick={() => onChange(filter)}
        >
          {filter}
        </Button>
      ))}
    </HStack>
  );
}
