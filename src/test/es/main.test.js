import {lcdConverter} from "../../main/es/main";
import {lcdMatcher} from "./lcdMatcher";
expect.extend(lcdMatcher);

const simpleDigits = unPresent([
    [1, `
   
  |
  |`],
    [2, `
 _ 
 _|
|_ `],
    [3, `
 _ 
 _|
 _|`],
    [4, `
   
|_|
  |`],
    [5, `
 _ 
|_ 
 _|`],
    [6, `
 _ 
|_ 
|_|`],
    [7, `
 _ 
  |
  |`],
    [8, `
 _ 
|_|
|_|`],
    [9, `
 _ 
|_|
 _|`],
    [0, `
 _ 
|/|
|_|`]
]);

const longNumbers = unPresent([
    [262, `
 _  _  _ 
 _||_  _|
|_ |_||_ `],
    [306, `
 _  _  _ 
 _||/||_ 
 _||_||_|`],
    [427, `
    _  _ 
|_| _|  |
  ||_   |`],
    [522, `
 _  _  _ 
|_  _| _|
 _||_ |_ `],
    [709, `
 _  _  _ 
  ||/||_|
  ||_| _|`],
    [758, `
 _  _  _ 
  ||_ |_|
  | _||_|`],
    [765, `
 _  _  _ 
  ||_ |_ 
  ||_| _|`],
    [1186, `
       _  _ 
  |  ||_||_ 
  |  ||_||_|`],
    [1526, `
    _  _  _ 
  ||_  _||_ 
  | _||_ |_|`],
    [1950, `
    _  _  _ 
  ||_||_ |/|
  | _| _||_|`],
    [3012, `
 _  _     _ 
 _||/|  | _|
 _||_|  ||_ `],
    [3738, `
 _  _  _  _ 
 _|  | _||_|
 _|  | _||_|`],
    [4062, `
    _  _  _ 
|_||/||_  _|
  ||_||_||_ `],
    [4143, `
          _ 
|_|  ||_| _|
  |  |  | _|`],
    [4147, `
          _ 
|_|  ||_|  |
  |  |  |  |`],
    [4574, `
    _  _    
|_||_   ||_|
  | _|  |  |`],
    [4866, `
    _  _  _ 
|_||_||_ |_ 
  ||_||_||_|`],
    [5780, `
 _  _  _  _ 
|_   ||_||/|
 _|  ||_||_|`],
    [6056, `
 _  _  _  _ 
|_ |/||_ |_ 
|_||_| _||_|`],
    [7631, `
 _  _  _    
  ||_  _|  |
  ||_| _|  |`],
    [8040, `
 _  _     _ 
|_||/||_||/|
|_||_|  ||_|`],
    [8165, `
 _     _  _ 
|_|  ||_ |_ 
|_|  ||_| _|`],
    [9315, `
 _  _     _ 
|_| _|  ||_ 
 _| _|  | _|`],
    [9489, `
 _     _  _ 
|_||_||_||_|
 _|  ||_| _|`],
    [9840, `
 _  _     _ 
|_||_||_||/|
 _||_|  ||_|`]
]);

describe('LCD Converter', () => {
    describe('to LCD', () => {
        describe('single digits', () => {
            test.each(simpleDigits)(
                "%p => to lcd",
                (number, representation) => {
                    expect(lcdConverter.toLCD(number)).toDisplayAs(representation);
                });
        });
        describe('multiple digits', () => {
            test.each(longNumbers)(
                "%p => to lcd",
                (number, representation) => {
                    expect(lcdConverter.toLCD(number)).toDisplayAs(representation);
                });
        });
    });
    describe('from LCD', () => {
        describe('single digits', () => {
            test.each(simpleDigits)(
                "lcd to %p",
                (number, representation) => {
                    expect(lcdConverter.fromLCD(representation)).toEqual(number);
                });
        });
        describe('multiple digits', () => {
            test.each(longNumbers)(
                "lcd to %p",
                (number, representation) => {
                    expect(lcdConverter.fromLCD(representation)).toEqual(number);
                });
        });
    });
});

/**
 * This function is to preserve both actual desired value and test lisibility
 */
function unPresent(caseArray) {
    return caseArray.map(([input, result]) => [input, result.substring(1)]);
}
