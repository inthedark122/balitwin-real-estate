import { Box, Typography } from '@mui/material';
import { forwardRef } from 'react';

export const NewsOwnerCarouseCard = forwardRef(function NewsOwnerCarouseCard(
  props,
  ref,
) {
  return (
    <Box
      ref={ref}
      width="100%"
      height="100%"
      bgcolor="primary.main"
      borderRadius={2.5}
      paddingX={3.5}
      paddingY={4.5}
      {...props}
    >
      <Typography
        variant="h4"
        color="white"
        textTransform="uppercase"
        fontSize={30}
        fontWeight="bold"
      >
        Новинка
      </Typography>
      <Typography
        variant="h4"
        color="white"
        textTransform="uppercase"
        fontSize={20}
        fontWeight="bold"
      >
        от владельцев
      </Typography>
    </Box>
  );
});
