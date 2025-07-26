export const validateTemperatures = (temperatures) => {
  const onlyDigitsAndDecimalsCheck = /^(0|[+-]\d+(\.\d+)?)$/;

  if (
    !(
      temperatures &&
      temperatures.length > 0 &&
      typeof temperatures === "string"
    )
  ) {
    return false;
  }

  return temperatures
    .split(" ")
    .every((t) => onlyDigitsAndDecimalsCheck.test(t));
};
