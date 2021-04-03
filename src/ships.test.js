import ship from "./ships";

let testShip;

beforeEach(() => {
  return (testShip = ship(4, 0));
});

test("Create a ship", () => {
  expect(testShip.length).toBe(4);
});

test("Horizontal ship squares", () => {
  expect(testShip.squares).toEqual([0, 1, 2, 3]);
});

test("Vertical ship squares", () => {
  testShip = ship(4, 0, "vertical");
  expect(testShip.squares).toEqual([0, 10, 20, 30]);
});

test("Create hits array", () => {
  expect(testShip.hits).toEqual([false, false, false, false]);
});

test("Hit a square", () => {
  testShip.hit(0);
  expect(testShip.hits).toEqual([true, false, false, false]);
});

test("Hit a square again", () => {
  testShip.hit(0);
  testShip.hit(3);
  expect(testShip.hits).toEqual([true, false, false, true]);
});

test("Miss a square", () => {
  testShip.hit(10);
  expect(testShip.hits).toEqual([false, false, false, false]);
});

test("Not sunk ship", () => {
  testShip.hit(3);
  expect(testShip.isSunk()).toBe(false);
});

test("Sunk ship", () => {
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  expect(testShip.isSunk()).toBe(true);
});
