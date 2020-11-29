export const getRandom = (min, max) => {
  return ((Math.random() * (max - min + 1)) >> 0) + min;
};
