const index = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(index.sum(1, 2)).toBe(3);
});

test('find "team" to be "["team", "City"]"', () => {
  let obj = {
    name: "Pep",
    lastName: "Guardiola",
    team: "City",
  };

  console.log("This is an example");

  expect(index.findKey(obj, "team")).toMatchObject([["team", "City"]]);
});
