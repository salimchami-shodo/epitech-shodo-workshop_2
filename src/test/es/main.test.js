import {colour} from "../../main/es/main";

describe('Ponies', () => {
    beforeAll(() => {
        /* Runs before all tests */
    })
    afterAll(() => {
        /* Runs after all tests */
    })
    beforeEach(() => {
        /* Runs before each test */
    })
    afterEach(() => {
        /* Runs after each test */
    })

    describe('Colorful ones', () => {
        test('make each pony pink', () => {
            const actual = colour(['Alice', 'Bob', 'Eve'], `Pink`)
            expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
        })
        test('make each pony green', () => {
            const actual = colour(['Alice', 'Bob', 'Eve'], `Green`)
            expect(actual).toEqual(['Green Alice', 'Green Bob', 'Green Eve'])
        })
    })
})

const cases = [[2, 2, 4], [-2, -2, -4], [2, -2, 0]];

describe("'add' utility", () => {
    test.each(cases)(
        "given %p and %p as arguments, returns %p",
        (firstArg, secondArg, expectedResult) => {
            const result = firstArg + secondArg;
            expect(result).toEqual(expectedResult);
        }
    );
});
