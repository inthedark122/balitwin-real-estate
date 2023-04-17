import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import { StyledNextIconButton } from './CardCarousel.styles';

type Props = {
  swiper: SwiperClass;
};

export default function CardCarouseNextButton({ swiper }: Props) {
  const [isEnd, setIsEnd] = useState(true);

  useEffect(() => {
    setIsEnd(swiper.isEnd);
    const handleSliderChange = ({ isEnd }: SwiperClass) => {
      setIsEnd(isEnd);
    };

    swiper.on('slideChange', handleSliderChange);
    return () => {
      swiper.off('slideChange', handleSliderChange);
    };
  }, [swiper]);

  return (
    <Fade in={!isEnd} appear={false}>
      <StyledNextIconButton onClick={() => swiper.slideNext()} disabled={isEnd}>
        <NavigateNextIcon />
      </StyledNextIconButton>
    </Fade>
  );
}
