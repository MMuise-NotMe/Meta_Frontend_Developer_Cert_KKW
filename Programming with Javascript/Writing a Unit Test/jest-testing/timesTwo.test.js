const { default: TestRunner } = require("jest-runner");
const timesTwo = require("./timesTwo");

// Write the first test
test("returns the number times 2", () => {
	expect(timesTwo(10)).toBe(20);
});

// after doing npm install jest --save-dev
// have to do npm run test
