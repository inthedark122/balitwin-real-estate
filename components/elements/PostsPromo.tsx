import { Typography, Box, Button, Grid } from '@mui/material';
import { PostCard } from './PostCard';

export function PostsPromo() {
  return (
    <>
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
    </>
  );
}
