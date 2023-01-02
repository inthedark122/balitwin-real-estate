import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const IMAGES = [
  {
    id: 0,
    src: 'https://theworldtravelguy.com/wp-content/uploads/2020/05/DJI_0910-3.jpg',
  },
  {
    id: 1,
    src: 'https://thingstodoinbali.com/wp-content/uploads/rice-fields-bali_tegallalang-rice-terraces.jpg',
  },
  {
    id: 2,
    src: 'https://thingstodoinbali.com/wp-content/uploads/jatiluwih2.jpg',
  },
  {
    id: 3,
    src: 'https://media.istockphoto.com/id/1294440437/photo/stunning-view-of-a-farmer-huts-and-a-beautiful-and-colorful-morning-sky-reflected-in-the-rice.jpg?s=612x612&w=0&k=20&c=A_azc2Rr6g873U5sSvBMJpfMZvD0Ux-8BQ8u9Q-bsg0=',
  },
  {
    id: 4,
    src: 'https://balibusrental.com/wp-content/uploads/tegalalang-rice-terrace.jpg',
  },
  {
    id: 5,
    src: 'https://twistedsifter.com/wp-content/uploads/2016/01/bali-rice-fields-from-above-trey-ratcliff.jpg',
  },
  {
    id: 6,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1afqsBtpAaDKdnbISUNJ4hP8kCTfAYhDbfg&usqp=CAU',
  },
  { id: 7, src: 'https://i.ytimg.com/vi/KuqZqWIHIjk/maxresdefault.jpg' },
];

export function ImageViewer() {
  const [mainImage, setMainImage] = useState(IMAGES[0]);

  return (
    <Stack spacing={1} width={430}>
      <Box
        component="img"
        src={mainImage.src}
        width={430}
        height={401}
        borderRadius={1.25}
      />
      <Swiper
        spaceBetween={6}
        slidesPerView="auto"
        slidesPerGroupAuto
        modules={[A11y]}
      >
        {IMAGES.map((image) => {
          return (
            <SwiperSlide key={image.id} style={{ width: 81 }}>
              <Box
                component="img"
                width={81}
                height={76}
                src={image.src}
                borderRadius={1.25}
                sx={{ cursor: 'pointer' }}
                onClick={() => setMainImage(image)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Stack>
  );
}
