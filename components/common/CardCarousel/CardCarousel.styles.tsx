import { IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Swiper } from 'swiper/react';

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  '.swiper&': {
    paddingLeft: 229,
  },
}));

export const StyledPrevIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: '1px solid #EDEDED',
  position: 'absolute',
  left: -21,
  top: 'calc(50% - 14px)',
  zIndex: 10,

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
}));

export const StyledNextIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: '1px solid #EDEDED',
  position: 'absolute',
  right: -21,
  top: 'calc(50% - 14px)',
  zIndex: 10,

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
}));
