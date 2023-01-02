import {
  Box,
  Typography,
  AppBar,
  Button,
  Link,
  Stack,
  InputAdornment,
  IconButton,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import NextLink from 'next/link';
import { StyledOutlinedInput, StyledIconButton } from './Header.styles';

export function Header() {
  const handleSearch = () => {
    // TODO: implement search
  };

  return (
    <AppBar color="transparent" position="static">
      <Box bgcolor="#F1F2F3">
        <Container maxWidth="xl" sx={{ paddingX: 3 }}>
          <Stack spacing={3.5} direction="row" height={34} alignItems="center">
            <Typography variant="body2" fontWeight="bold" color="#525252">
              Скачать BaliTwin App
            </Typography>
            <Box flexGrow={1} />
            <Typography variant="body2" fontWeight="bold" color="#525252">
              О BaliTwin
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#525252">
              Партнеры BaliTwin
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#525252">
              Образовательный центр BaliTwin
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#525252">
              Вакансии в BaliTwin
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#525252">
              Реклама в BaliTwin
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ paddingY: 3 }}>
        <Stack direction="row" spacing={4} width="100%">
          <NextLink href="/">
            <Image
              src="/balitwin.svg"
              alt="Logo"
              width={166}
              height={16}
              priority
            />
          </NextLink>
          <Typography variant="body2">Категории</Typography>
          <StyledOutlinedInput
            size="small"
            placeholder="Поиск..."
            endAdornment={
              <InputAdornment position="end">
                <StyledIconButton onClick={handleSearch} edge="end">
                  <SearchIcon />
                </StyledIconButton>
              </InputAdornment>
            }
          />

          <Stack direction="row" spacing={2}>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Button color="secondary" variant="contained">
              Разместить объявление
            </Button>
            <Button color="inherit" variant="contained">
              Войти
            </Button>
          </Stack>
        </Stack>
        <Stack paddingTop={2} direction="row" alignItems="center">
          <Box width={302} />
          <Stack direction="row" spacing={2}>
            {[
              { slug: 'land-for-sale', label: 'Земля на продажу' },
              { slug: 'land-for-rent', label: 'Земля в аренду' },
              { slug: 'villa-for-sale', label: 'Виллы на продажу' },
              { slug: 'villa-for-rent', label: 'Виллы в аренду' },
            ].map((category) => (
              <Link
                key={category.slug}
                component={NextLink}
                href={`/category/${category.slug}`}
                color="inherit"
                underline="hover"
                variant="body2"
              >
                {category.label}
              </Link>
            ))}
          </Stack>
          <Box flexGrow={1} />
          <LocationOnIcon />
          <Typography variant="body2">Выберите регион: Бали</Typography>
        </Stack>
      </Container>
    </AppBar>
  );
}
