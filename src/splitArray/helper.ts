export const splitArrayByIndecies = (fullArray: number[], partIndexes: number[]): number[][] => {
  let fullIndecies = Array.from(Array(fullArray.length).keys());
  let firstPartIndecies = fullIndecies.filter((i) => partIndexes.indexOf(i) >= 0);
  let secondPartIndecies = fullIndecies.filter((i) => partIndexes.indexOf(i) < 0);
  return [firstPartIndecies.map((i) => fullArray[i]), secondPartIndecies.map((i) => fullArray[i])];
};
