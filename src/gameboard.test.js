import gameboard from "./gameboard";
import ship from "./ships";

let testGameboard = gameboard();

test("Valid horizontal ship", () => {
  expect(testGameboard.isShipValid(ship(4, { x: 0, y: 0 }))).toBe(true);
});

test("Valid vertical ship", () => {
  expect(testGameboard.isShipValid(ship(4, { x: 0, y: 0 }, "vertical"))).toBe(
    true
  );
});

test("Invalid horizontal ship", () => {
  expect(testGameboard.isShipValid(ship(4, { x: 8, y: 0 }))).toBe(false);
});

test("Invalid vertical ship", () => {
  expect(testGameboard.isShipValid(ship(4, { x: 0, y: 70 }, "vertical"))).toBe(
    false
  );
});
