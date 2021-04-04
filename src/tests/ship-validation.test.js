import generateValidSquares, {
  isShipInvalid,
  isShipOverlapping,
  isShipAdjacent,
} from "../factory/functions/ship-validation";
//import ship from "../factory/ships";

const mockShips = [
  {
    length: 4,
    squares: [
      { x: 0, y: 0, hit: false },
      { x: 1, y: 0, hit: false },
      { x: 2, y: 0, hit: false },
      { x: 3, y: 0, hit: false },
    ],
  },
  {
    length: 4,
    squares: [
      { x: 0, y: 0, hit: false },
      { x: 0, y: 1, hit: false },
      { x: 0, y: 2, hit: false },
      { x: 0, y: 3, hit: false },
    ],
  },
  {
    length: 4,
    squares: [
      { x: 8, y: 0, hit: false },
      { x: 9, y: 0, hit: false },
      { x: 10, y: 0, hit: false },
      { x: 11, y: 0, hit: false },
    ],
  },
  {
    length: 4,
    squares: [
      { x: 0, y: 7, hit: false },
      { x: 0, y: 8, hit: false },
      { x: 0, y: 9, hit: false },
      { x: 0, y: 10, hit: false },
    ],
  },
  {
    length: 3,
    squares: [
      { x: 3, y: 4, hit: false },
      { x: 3, y: 5, hit: false },
      { x: 3, y: 6, hit: false },
    ],
  },
  {
    length: 3,
    squares: [
      { x: 2, y: 3, hit: false },
      { x: 3, y: 3, hit: false },
      { x: 4, y: 3, hit: false },
    ],
  },
];

test("Valid horizontal ship", () => {
  expect(isShipInvalid(mockShips[0])).toBe(false);
});

test("Valid vertical ship", () => {
  expect(isShipInvalid(mockShips[1])).toBe(false);
});

test("Invalid horizontal ship", () => {
  expect(isShipInvalid(mockShips[2])).toBe(true);
});

test("Invalid vertical ship", () => {
  expect(isShipInvalid(mockShips[3])).toBe(true);
});

test("Ship doesn't overlap", () => {
  expect(isShipOverlapping(mockShips[0].squares, [mockShips[4]])).toBe(false);
});

test("Ship overlaps", () => {
  expect(isShipOverlapping(mockShips[0].squares, [mockShips[1]])).toBe(true);
});

test("Ship doesn't overlap adjacent", () => {
  expect(isShipAdjacent(mockShips[0], [mockShips[4]])).toBe(false);
});

test("Ship overlaps adjacent", () => {
  expect(isShipAdjacent(mockShips[4], [mockShips[5]])).toBe(true);
});

test("Create valid squares without existing ship", () => {
  expect(generateValidSquares(4, [], "horizontal")).toEqual([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
    { x: 6, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 5, y: 2 },
    { x: 6, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
    { x: 0, y: 4 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 0, y: 5 },
    { x: 1, y: 5 },
    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 0, y: 6 },
    { x: 1, y: 6 },
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 6, y: 6 },
    { x: 0, y: 7 },
    { x: 1, y: 7 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 6, y: 7 },
    { x: 0, y: 8 },
    { x: 1, y: 8 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
    { x: 6, y: 8 },
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
    { x: 6, y: 9 },
  ]);
});

test("Create valid squares with existing ship", () => {
  expect(generateValidSquares(4, [mockShips[0]], "horizontal")).toEqual([
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 2 },
    { x: 2, y: 2 },
    { x: 3, y: 2 },
    { x: 4, y: 2 },
    { x: 5, y: 2 },
    { x: 6, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
    { x: 6, y: 3 },
    { x: 0, y: 4 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 3, y: 4 },
    { x: 4, y: 4 },
    { x: 5, y: 4 },
    { x: 6, y: 4 },
    { x: 0, y: 5 },
    { x: 1, y: 5 },
    { x: 2, y: 5 },
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 0, y: 6 },
    { x: 1, y: 6 },
    { x: 2, y: 6 },
    { x: 3, y: 6 },
    { x: 4, y: 6 },
    { x: 5, y: 6 },
    { x: 6, y: 6 },
    { x: 0, y: 7 },
    { x: 1, y: 7 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 6, y: 7 },
    { x: 0, y: 8 },
    { x: 1, y: 8 },
    { x: 2, y: 8 },
    { x: 3, y: 8 },
    { x: 4, y: 8 },
    { x: 5, y: 8 },
    { x: 6, y: 8 },
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
    { x: 5, y: 9 },
    { x: 6, y: 9 },
  ]);
});
