import { Stack, Box, Typography } from '@mui/material';

export function Discount() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box
        bgcolor="rgba(214, 0, 28, 0.2)"
        height={19}
        display="flex"
        alignItems="center"
        paddingX={0.5}
        borderRadius={0.75}
      >
        <Typography color="#D6001C" fontWeight="bold" variant="caption">
          50%
        </Typography>
      </Box>
      <Typography
        variant="caption"
        color="#BFBFBF"
        sx={{ textDecoration: 'line-through' }}
      >
        Rp 5.600.000
      </Typography>
    </Stack>
  );
}
