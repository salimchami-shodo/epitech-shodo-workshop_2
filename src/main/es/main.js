export const rpn = {
  additions(additions) {
    let total = 0;
    let member_one = 0;
    let member_two = 0;

    for (let i = additions.length; i > 0; i--) {
        if (additions[i] === '+') {
            for (let y = i; y > 0; y--) {
                if (additions[y] >= '0' && additions[y] <= "9") {
                    member_one = parseInt(additions[y]);
                }
                if (additions[y] >= '0' && additions[y] <= "9" && member_one) {
                    member_two = parseInt(additions[y]);
                }
                if (member_one && member_two) {
                    total += member_one + member_two;
                    i = y;
                }
            }
        }
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
