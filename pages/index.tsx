import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import { CardCarousel } from '../components/common/CardCarousel';
import { TimeCountDown } from '../components/common/TimeCountDown';
import { NewsOwnerCarouseCard } from '../components/elements/NewsOwnerCarouseCard';
import { PostCard } from '../components/elements/PostCard';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 6 }} component={Stack} spacing={6}>
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

      <Stack spacing={3.5}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Typography variant="h6">Рекомендации к продаже</Typography>
          <Button>Открыть раздел</Button>
        </Stack>

        <CardCarousel
          FirstCard={NewsOwnerCarouseCard}
          Card={PostCard}
          items={[1, 2, 3, 4, 5, 6]}
        />
      </Stack>

      <Divider />

      <Stack spacing={3.5}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Typography variant="h6">
            Акции и скидки по новым объявлениям
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="#C2C2C2">
            До завершения осталось
          </Typography>
          <TimeCountDown date={new Date(2023, 0, 9)} />
          <Button>Открыть раздел</Button>
        </Stack>

        <CardCarousel
          FirstCard={NewsOwnerCarouseCard}
          Card={PostCard}
          items={[1, 2, 3, 4, 5, 6]}
        />
      </Stack>

      <Divider />

      <Typography variant="h6">Promo предложение от владельца земли</Typography>

      <Box
        sx={{ background: 'linear-gradient(180deg, #6FD217 0%, #1E9736 100%)' }}
        height={204}
        borderRadius={2.5}
        padding={2}
      >
        <Typography fontSize={30} color="common.white">
          Акции и скидки от владельцев
        </Typography>
      </Box>

      <div>
        <Grid container direction="row" spacing={2} flexWrap="wrap">
          {Array.from({ length: 15 }).map((_, idx) => (
            <Grid key={idx} item>
              <PostCard />
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container justifyContent="center">
        <Button color="primary" variant="outlined" size="large">
          Больше объявлений
        </Button>
      </Grid>
    </Container>
  );
}
