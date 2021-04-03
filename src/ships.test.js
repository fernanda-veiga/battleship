import ship from "./ships";

let testShip;

beforeEach(() => {
  return (testShip = ship(4, 1));
});

test("Create a ship", () => {
  expect(testShip.length).toBe(4);
});

test("Horizontal ship squares", () => {
  expect(testShip.squares).toEqual([1, 2, 3, 4]);
});

test("Vertical ship squares", () => {
  testShip = ship(4, 1, "vertical");
  expect(testShip.squares).toEqual([1, 11, 21, 31]);
});

test("Create hits array", () => {
  expect(testShip.hits).toEqual([false, false, false, false]);
});

test("Hit a square", () => {
  testShip.hit(1);
  expect(testShip.hits).toEqual([true, false, false, false]);
});

test("Hit a square again", () => {
  testShip.hit(1);
  testShip.hit(4);
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
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  expect(testShip.isSunk()).toBe(true);
});
