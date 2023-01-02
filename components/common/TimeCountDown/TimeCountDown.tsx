import { Fragment, useState, useEffect, useCallback } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import { convertToDuration } from '../../../lib/utils/time';

type Props = {
  date: Date;
};

export function TimeCountDown({ date }: Props) {
  const [blocks, setBlocks] = useState<string[]>([]);

  const handleSetBlocks = useCallback(() => {
    const diff = differenceInSeconds(date, new Date());
    setBlocks(convertToDuration(diff));
  }, [date]);

  useEffect(() => {
    handleSetBlocks();

    const intervalId = setInterval(handleSetBlocks, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleSetBlocks]);

  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {blocks.map((block, idx) => (
        <Fragment key={idx}>
          <Box
            bgcolor="#D6001C"
            borderRadius={0.5}
            paddingX={1.25}
            paddingY={0.5}
          >
            <Typography color="common.white" variant="h6">
              {block}
            </Typography>
          </Box>
          {idx + 1 < blocks.length && <Typography>:</Typography>}
        </Fragment>
      ))}
    </Stack>
  );
}
