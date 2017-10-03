export default function formatNumber(format, number) {
  let formattedNumber = format;
  const lengthOfNumber = number.length;

  for (let i = 0; i < lengthOfNumber; i++) {
    formattedNumber = formattedNumber.replace('#', number[i]);
  }

  const indexOfHash = formattedNumber.indexOf('#');
  const hasRemainingHash = indexOfHash > -1;

  if (hasRemainingHash) {
    return formattedNumber.slice(0, indexOfHash);
  }

  return formattedNumber;
}
