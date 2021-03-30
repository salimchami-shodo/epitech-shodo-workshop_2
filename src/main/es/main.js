function fizz(number) {
  if (!(number % 3)) return "FIZZ";
}
function buzz(number) {
  if (!(number % 5)) return "BUZZ";
}
function tazz(number) {
  if (!(number % 7)) return "TAZZ";
}
function retnumb(number) {
  return number;
}
export const fizzBuzzer = {
  fizzBuzz(number) {
    return fizz(number) + buzz(number);
  },
  fizzBuzzTazz(number) {
    return fizz(number) + buzz(number) + tazz(number);
  },
  fizzFizz(number) {
    return "FIZZFIZZ";
  }
};
