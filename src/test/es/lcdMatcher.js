const wall = `|
|
|`;
export const lcdMatcher = {
    toDisplayAs(received, expected) {
        if (received !== expected) {
            return {
                message() {
                    console.warn(wall,received,wall,"≠",wall,expected,wall)
                    return `Expected
${received}
to display as
${expected}
(Check console for side by side comparison)`;
                },
                pass: false
            };
        } else {
            return {
                message() {
                    return `Expected
${received}
NOT to display as
${expected}`;
                },
                pass: true
            };
        }
    }
};