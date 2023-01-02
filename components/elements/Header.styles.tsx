import { IconButton, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor:
    theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)',
  position: 'relative',
  height: 40,
  width: 40,
  right: -2,
  borderRadius: 4,
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  // borderRadius: 20,
  flexGrow: 1,
}));
