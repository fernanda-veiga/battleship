import ship from "./ships";

let testShip;

beforeEach(() => {
  return (testShip = ship(4, { x: 0, y: 0 }));
});

test("Create a ship", () => {
  expect(testShip.length).toBe(4);
});

test("Horizontal ship squares", () => {
  expect(testShip.squares).toEqual([
    { x: 0, y: 0, hit: false },
    { x: 1, y: 0, hit: false },
    { x: 2, y: 0, hit: false },
    { x: 3, y: 0, hit: false },
  ]);
});

test("Vertical ship squares", () => {
  testShip = ship(4, { x: 0, y: 0 }, "vertical");
  expect(testShip.squares).toEqual([
    { x: 0, y: 0, hit: false },
    { x: 0, y: 1, hit: false },
    { x: 0, y: 2, hit: false },
    { x: 0, y: 3, hit: false },
  ]);
});

test("Hit a square", () => {
  testShip.hit({ x: 0, y: 0 });
  expect(testShip.squares).toEqual([
    { x: 0, y: 0, hit: true },
    { x: 1, y: 0, hit: false },
    { x: 2, y: 0, hit: false },
    { x: 3, y: 0, hit: false },
  ]);
});

test("Hit a square again", () => {
  testShip.hit({ x: 0, y: 0 });
  testShip.hit({ x: 3, y: 0 });
  expect(testShip.squares).toEqual([
    { x: 0, y: 0, hit: true },
    { x: 1, y: 0, hit: false },
    { x: 2, y: 0, hit: false },
    { x: 3, y: 0, hit: true },
  ]);
});

test("Miss a square", () => {
  testShip.hit({ x: 10, y: 0 });
  expect(testShip.squares).toEqual([
    { x: 0, y: 0, hit: false },
    { x: 1, y: 0, hit: false },
    { x: 2, y: 0, hit: false },
    { x: 3, y: 0, hit: false },
  ]);
});

test("Not sunk ship", () => {
  testShip.hit({ x: 3, y: 0 });
  expect(testShip.isSunk()).toBe(false);
});

test("Sunk ship", () => {
  testShip.hit({ x: 0, y: 0 });
  testShip.hit({ x: 1, y: 0 });
  testShip.hit({ x: 2, y: 0 });
  testShip.hit({ x: 3, y: 0 });
  expect(testShip.isSunk()).toBe(true);
});
