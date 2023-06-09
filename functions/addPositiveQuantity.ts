export default function addPositiveQuantity(input: number) {
  if (typeof input !== 'number') {
    throw new Error('Argument is not a number');
  }

  if (Number(input) < 1) {
    return 1;
  }
  return input;
}
