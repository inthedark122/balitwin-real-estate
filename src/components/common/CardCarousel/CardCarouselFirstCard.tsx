import { Box, Slide } from '@mui/material';
import { type FC, type RefObject, useEffect, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

type Props = {
  FirstCard: FC;
  containerRef: RefObject<HTMLDivElement>;
  swiper?: SwiperClass;
};

export function CardCarouselFirstCard({
  FirstCard,
  containerRef,
  swiper,
}: Props) {
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    setIsBeginning(swiper.isBeginning);
    const handleSliderChange = ({ isBeginning }: SwiperClass) => {
      setIsBeginning(isBeginning);
    };

    swiper.on('slideChange', handleSliderChange);
    return () => {
      swiper.off('slideChange', handleSliderChange);
    };
  }, [swiper]);

  return (
    <Box
      display="absolute"
      overflow="hidden"
      width={356}
      height={473}
      position="absolute"
      zIndex={-1}
    >
      <Slide
        direction="right"
        appear={false}
        in={isBeginning}
        unmountOnExit
        container={containerRef.current}
        timeout={500}
      >
        <FirstCard />
      </Slide>
    </Box>
  );
}
