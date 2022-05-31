/* eslint-disable no-restricted-syntax */
function calculateRating(ratings) {
  const keys = Object.keys(ratings);
  let sum = 0;
  let count = 0;
  if (keys.length > 0) {
    for (const key of keys) {
      sum += Number(key) * Number(ratings[key]);
      count += Number(ratings[key]);
    }
    return sum / count;
  }
  return -1;
}

export default calculateRating;
