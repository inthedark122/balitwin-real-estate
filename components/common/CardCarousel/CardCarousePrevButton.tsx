import { Swiper as SwiperClass } from 'swiper/types';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { StyledPrevIconButton } from './CardCarousel.styles';
import { useEffect, useState } from 'react';
import { Fade } from '@mui/material';

type Props = {
  swiper: SwiperClass;
};

export default function CardCarousePrevButton({ swiper }: Props) {
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
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
    <Fade in={!isBeginning} appear={false}>
      <StyledPrevIconButton
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <NavigateBeforeIcon />
      </StyledPrevIconButton>
    </Fade>
  );
}
