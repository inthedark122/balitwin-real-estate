import { Box } from '@mui/material';

export function HomeBanner() {
  return (
    <Box
      sx={{ background: 'linear-gradient(180deg, #DDF7FE 0%, #8FD1ED 100%)' }}
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      height={356}
      borderRadius={2.5}
    >
      Banner | Новинки от владельца
    </Box>
  );
}
