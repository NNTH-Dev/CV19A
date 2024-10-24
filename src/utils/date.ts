export const convertMillisecondsToDate = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  return hour + ':' + minute;
};

/**
 *
 * @param ms number
 * @returns Promise that resolves after ms milliseconds
 */
export const delayTime = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
