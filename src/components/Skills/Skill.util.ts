const MAX_LEVELS = 5;
const ONE_HUNDRED_PERCENT = 100;

export const getLevelWidth = (level: number): string => {
  const percent = level / MAX_LEVELS * ONE_HUNDRED_PERCENT;
  return `${percent}%`;
}