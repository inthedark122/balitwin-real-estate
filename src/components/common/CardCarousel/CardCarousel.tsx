import { useState, useRef, type FC } from 'react';
import { A11y } from 'swiper';
import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { StyledSwiper } from './CardCarousel.styles';
import CardCarouseNextButton from './CardCarouseNextButton';
import CardCarousePrevButton from './CardCarousePrevButton';

import 'swiper/css';
import { CardCarouselFirstCard } from './CardCarouselFirstCard';

type Props<Item = unknown> = {
  FirstCard?: FC;
  Card: FC<{ values: Item }>;
  items: Item[];
};

export function CardCarousel({ FirstCard, Card, items }: Props) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      position="relative"
      height={473}
      display="flex"
      alignItems="center"
      ref={containerRef}
    >
      {FirstCard && (
        <CardCarouselFirstCard
          FirstCard={FirstCard}
          swiper={swiper}
          containerRef={containerRef}
        />
      )}
      <StyledSwiper
        spaceBetween={20}
        slidesPerView="auto"
        slidesPerGroupAuto
        modules={[A11y]}
        onSwiper={setSwiper}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx} style={{ width: 232, padding: 4 }}>
            <Card values={item} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      {swiper && (
        <>
          <CardCarousePrevButton swiper={swiper} />
          <CardCarouseNextButton swiper={swiper} />
        </>
      )}
    </Box>
  );
}
