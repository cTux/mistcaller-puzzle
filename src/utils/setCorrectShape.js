export const setCorrectShape = (items) => {
  return items.map(x => {
    x.correct = !items.some(y => y.id !== x.id && y.shape === x.shape)
      || !items.some(y => y.id !== x.id && y.fill === x.fill)
      || !items.some(y => y.id !== x.id && y.wrap === x.wrap);
    return x;
  });
};
