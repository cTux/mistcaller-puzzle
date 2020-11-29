export const shuffle = (arr) => {
  const result = [ ...arr ];
  let counter = result.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = result[counter];
    result[counter] = result[index];
    result[index] = temp;
  }

  return result;
}
