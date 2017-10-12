function stripFormatting(formattedNumber) {
  return formattedNumber.replace(/(\s|[^\d])/g, '').slice(0, 10);
}

export default stripFormatting;
