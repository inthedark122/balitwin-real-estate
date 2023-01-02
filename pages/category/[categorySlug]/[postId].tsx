import {
  Container,
  Breadcrumbs,
  Typography,
  Stack,
  Button,
  Box,
  Avatar,
  Divider,
} from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import { ImageViewer } from '@/components/common/ImageViewer';
import { Discount } from '@/components/elements/Discount';
import { PostContentLandForSale } from '@/components/elements/PostContentLandForSale';
import { NewsOwnerCarouseCard } from '@/components/elements/NewsOwnerCarouseCard';
import { CardCarousel } from '@/components/common/CardCarousel';
import { PostCard } from '@/components/elements/PostCard';
import { PostsPromo } from '@/components/elements/PostsPromo';
import { PostContentLandForRent } from '@/components/elements/PostContentLandForRent';
import mapExample from '../../../public/map-example.png';

const CATEGORIES = [
  { slug: 'land-for-sale', label: 'Земля на продажу' },
  { slug: 'land-for-rent', label: 'Земля в аренду' },
  { slug: 'villa-for-sale', label: 'Виллы на продажу' },
  { slug: 'villa-for-rent', label: 'Виллы в аренду' },
];

export default function CategoryView() {
  const router = useRouter();
  const { categorySlug, postId } = router.query;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return null;
  }

  return (
    <Container sx={{ paddingY: 3 }}>
      <Stack spacing={4}>
        <Breadcrumbs separator={<ArrowRightIcon sx={{ color: '#D9D9D9' }} />}>
          <Typography color="primary" variant="body2" fontWeight="bold">
            Главная BaliTwin
          </Typography>
          <Typography color="primary" variant="body2" fontWeight="bold">
            {category.label}
          </Typography>
        </Breadcrumbs>

        <Stack direction="row" spacing={4.5}>
          <ImageViewer />
          <Stack spacing={3}>
            <Typography variant="h5" fontWeight="bold">
              Земля в Куте, в центре на развилке возмле центрального
              гипермаркета Populae Market
            </Typography>
            <div>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Typography variant="h6" fontSize={28} fontWeight="bold">
                  Rp 2.800.000.000
                </Typography>
                <VerifiedIcon color="secondary" fontSize="large" />
              </Stack>
              <Discount />
            </div>
            {categorySlug === 'land-for-sale' && <PostContentLandForSale />}
            {categorySlug === 'land-for-rent' && <PostContentLandForRent />}
            <Divider />
            <Typography>
              Участок ровный правильной формы, расположен в охраняемом поселке в
              11 км от МКАД по Новорижскому шоссе. Участок огорожен, подведены
              коммуникации.Коттеджный поселок расположен в живописном и
              экологически чистом районе подмосковья в 11 км от МКАД по
              Новорижскому шоссе. Удобное транспортное расположение создает для
              поселка{' '}
            </Typography>
            <Divider />
          </Stack>
          <Stack width={323} spacing={2} flexShrink={0}>
            <Box
              sx={{
                background:
                  'linear-gradient(93.6deg, #00BFA5 21.55%, #29A08F 88.06%)',
              }}
              borderRadius={1.25}
              padding={2}
            >
              <Typography fontSize={18} fontWeight="bold" color="common.white">
                {category.label}
              </Typography>
            </Box>
            <Stack
              border="1px solid #C5C5C5"
              borderRadius={1.25}
              paddingX={2}
              paddingY={2.5}
              spacing={2}
            >
              <div>
                <Typography variant="h6" fontSize={22}>
                  {categorySlug === 'land-for-sale' && 'Продавец'}
                  {categorySlug === 'land-for-rent' && 'Арендодатель'}: Альбрус
                </Typography>
                <Stack direction="row" spacing={0.5}>
                  <VerifiedIcon color="secondary" />
                  <Typography color="primary">Документы проверены</Typography>
                </Stack>
              </div>
              <Stack direction="row" spacing={2.5} alignItems="center">
                <Avatar sx={{ width: 82, height: 82 }} alt="Putu Agus Dewa" />
                <div>
                  <Typography fontSize={18}>Агент</Typography>
                  <Typography fontSize={18} fontWeight="bold">
                    Putu Agus Dewa
                  </Typography>
                </div>
              </Stack>
              <Typography variant="h6" fontSize={28}>
                +62 815 454 22 25
              </Typography>
              <Button variant="contained" color="primary">
                Позвонить продавцу
              </Button>
              <Button variant="outlined" color="primary">
                Добавить в избранное
              </Button>

              <Stack direction="row">
                <Button
                  size="small"
                  startIcon={<ChatIcon fontSize="small" />}
                  color="inherit"
                >
                  <Typography variant="caption">Чат</Typography>
                </Button>
                <Divider orientation="vertical" sx={{ marginX: 0.5 }} />
                <Button
                  size="small"
                  startIcon={<FavoriteBorderIcon fontSize="small" />}
                  color="inherit"
                >
                  <Typography variant="caption">Сохранить</Typography>
                </Button>
                <Divider orientation="vertical" sx={{ marginX: 0.5 }} />
                <Button
                  size="small"
                  startIcon={<ShareIcon fontSize="small" />}
                  color="inherit"
                >
                  <Typography variant="caption">Поделиться</Typography>
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                background:
                  'linear-gradient(93.6deg, #00BFA5 21.55%, #29A08F 88.06%)',
              }}
              paddingX={2.5}
              paddingY={1.5}
              borderRadius={0.75}
            >
              <Typography variant="h4" fontWeight="bold" color="common.white">
                Реклама
              </Typography>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="common.white"
              >
                Продажа интересного объекта за выгодную цену
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Box
          width="100%"
          sx={{ objectFit: 'contain' }}
          component={Image}
          src={mapExample}
          alt="Map"
        />
        <Stack spacing={3.5}>
          <Stack spacing={3} direction="row" alignItems="center">
            <Typography variant="h6">
              Еще в районе Кута земля на продажу
            </Typography>

            <Button>Открыть раздел</Button>
          </Stack>

          <CardCarousel
            FirstCard={NewsOwnerCarouseCard}
            Card={PostCard}
            items={[1, 2, 3, 4, 5, 6]}
          />
        </Stack>
        <Divider />
        <PostsPromo />
      </Stack>
    </Container>
  );
}
