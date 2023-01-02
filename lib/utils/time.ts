import { addHours, getMinutes, getHours, differenceInDays, getSeconds } from 'date-fns';

const SECONDS_TO_MILLISECONDS_COEFF = 1000;
const MINUTES_IN_HOUR = 60;

const normalizeTime = (time: string): string =>
  time.length === 1 ? `0${time}` : time;

export const convertToDuration = (secondsAmount: number): string[] => {
  const milliseconds = secondsAmount * SECONDS_TO_MILLISECONDS_COEFF;

  const date = new Date(milliseconds);
  const timezoneDiff = date.getTimezoneOffset() / MINUTES_IN_HOUR;
  const dateWithoutTimezoneDiff = addHours(date, timezoneDiff);

  const days = normalizeTime(String(differenceInDays(date, new Date(0))));
  const hours = normalizeTime(String(getHours(dateWithoutTimezoneDiff)));
  const minutes = normalizeTime(String(getMinutes(dateWithoutTimezoneDiff)));
  const seconds = normalizeTime(String(getSeconds(dateWithoutTimezoneDiff)));

  return [days, hours, minutes, seconds];

  // return {
  //   hours: hoursOutput,
  //   minutes,
  //   seconds,
  // };
};
