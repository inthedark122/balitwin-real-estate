import {
  Container,
  Divider,
  Stack,
  Box,
  ButtonGroup,
  Button,
} from '@mui/material';
import Image from 'next/image';

export function Footer() {
  return (
    <Container sx={{ paddingBottom: 3.25 }}>
      <Divider sx={{ marginBottom: 3.25 }} />
      <Stack spacing={3.25} alignItems="center">
        <Box bgcolor="#D9D9D9" width={482} height={219} borderRadius={8} />

        <Stack direction="row" spacing={2}>
          <Image
            src="/app-store.png"
            alt="App Store"
            width={180}
            height={54}
            priority
          />
          <Image
            src="/google-play.png"
            alt="Google Play"
            width={181}
            height={54}
            priority
          />
        </Stack>

        <ButtonGroup variant="contained" color="inherit">
          <Button>Indonesian</Button>
          <Button color="primary">Русский</Button>
          <Button>English</Button>
        </ButtonGroup>
      </Stack>
    </Container>
  );
}
