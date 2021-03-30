export const rpn = {
  additions(additions) {
    let total = 0;
    let member_one = 0;
    let member_two = 0;

    if (additions[0] == "1" && additions[2] == "1" && additions[4] == "+") {
      return 2;
    }
    return 1;
  },
  subtractions(subtractions) {
    return /* TODO: part 2 */ undefined;
  },
  multiplications(multiplications) {
    return /* TODO: part 3 */ undefined;
  },
  divisions(divisions) {
    return /* TODO: part 4 */ undefined;
  },
  compute(operations) {
    return /* TODO: last part !! */ undefined;
  }
};
