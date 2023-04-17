import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
  CardActionArea,
} from '@mui/material';
import NextLink from 'next/link';
import { Discount } from './Discount';

export function PostCard() {
  return (
    <Card sx={{ width: 232, flexShrink: 0, borderRadius: 2.5 }}>
      <CardActionArea component={NextLink} href="/category/land-for-sale/1">
        <CardMedia
          sx={{ width: 232, height: 216, borderRadius: 2.5 }}
          image="https://theworldtravelguy.com/wp-content/uploads/2020/05/DJI_0910-3.jpg"
          title="Rice field"
        />
        <CardContent component={Stack} spacing={0.5}>
          <Typography variant="body2">
            Продам землю в центре Убуда 10 соток, Лимапан Симабул...
          </Typography>
          <Typography variant="subtitle2" fontSize={16} fontWeight="bold">
            Rp 2.800.000
          </Typography>
          <Discount />
          <Stack direction="row" spacing={0.5}>
            <Box
              bgcolor="error.main"
              width={18}
              height={18}
              borderRadius={9}
              flexShrink={0}
            />
            <Typography variant="caption">Продавец</Typography>
            <Typography variant="caption" fontWeight="bold">
              Альбрус
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5}>
            <Box
              bgcolor="grey.500"
              width={18}
              height={18}
              borderRadius={9}
              flexShrink={0}
            />
            <Typography variant="caption">Площадь:</Typography>
            <Typography variant="caption" fontWeight="bold">
              10 соток
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
