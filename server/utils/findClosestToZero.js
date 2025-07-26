export const findClosestToZero = (temperatures) => {
  const closestToZero = temperatures.reduce((closest, current) => {
    const currentAbs = Math.abs(parseFloat(current));
    const closestAbs = Math.abs(parseFloat(closest));
    if (
      currentAbs < closestAbs ||
      (currentAbs === closestAbs && parseFloat(current) > parseFloat(closest))
    ) {
      return current;
    }
    return closest;
  });

  return closestToZero;
};
