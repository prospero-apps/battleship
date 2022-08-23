/* eslint-disable no-undef */
import Gameboard from './gameboard';

let gameboard;

beforeEach(() => {
  gameboard = Gameboard();
  return gameboard;
});

test('there are 100 fields', () => {
  expect(gameboard.fields.length).toBe(100);
});

test('the fourth field (with index 3) has coords D1', () => {
  const coords = gameboard.fields[3].x + gameboard.fields[3].y;
  expect(coords).toBe('D1');
});

test("place('carrier', 5, 'D', 4) creates ship with coords 'D4'", () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const coords = ship.x + ship.y;
  expect(coords).toBe('D4');
});

test('when placing horizontal carrier on B5, field F5 is not free', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5);
  const f5 = gameboard.fields.filter((field) => field.x === 'F' && field.y === 5)[0];
  expect(f5.free).toBeFalsy();
});

test('when placing horizontal carrier on B5, field G5 is free', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5);
  const g5 = gameboard.fields.filter((field) => field.x === 'G' && field.y === 5)[0];
  expect(g5.free).toBeTruthy();
});

test('when placing vertical carrier on B5, field B7 is not free', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const b7 = gameboard.fields.filter((field) => field.x === 'B' && field.y === 7)[0];
  expect(b7.free).toBeFalsy();
});

test('when placing vertical carrier on B5, field B10 is free', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const b10 = gameboard.fields.filter((field) => field.x === 'B' && field.y === 10)[0];
  expect(b10.free).toBeTruthy();
});

test('when placing a ship of length 5, five fields are not free', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const notFree = gameboard.fields.filter((field) => field.free === false);
  expect(notFree.length).toBe(5);
});

test('by default a ship you place is horizontal', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5);
  expect(ship.orientation).toBe('horizontal');
});

test('a ship you place is oriented vertically if you choose so', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  expect(ship.orientation).toBe('vertical');
});

//

test('when placing horizontal carrier on D4, field F4 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const f = gameboard.fields.filter((field) => field.x === 'F' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field C4 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const f = gameboard.fields.filter((field) => field.x === 'C' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field I4 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const f = gameboard.fields.filter((field) => field.x === 'I' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field D3 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const f = gameboard.fields.filter((field) => field.x === 'D' && field.y === 3)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field D5 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const f = gameboard.fields.filter((field) => field.x === 'D' && field.y === 5)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing a horizontal ship of length 5, 17 fields are not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 4);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(17);
});

test('when placing a horizontal ship of length 5 at the top, 12 fields are not usable', () => {
  const ship = gameboard.place('carrier', 5, 'D', 1);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(12);
});

//

test('when placing vertical carrier on B5, field B8 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 8)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field B4 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field B10 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 10)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field A7 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const f = gameboard.fields.filter((field) => field.x === 'A' && field.y === 7)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field C9 is not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const f = gameboard.fields.filter((field) => field.x === 'C' && field.y === 9)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing a vertical ship of length 5, 17 fields are not usable', () => {
  const ship = gameboard.place('carrier', 5, 'B', 5, 'vertical');
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(17);
});

test('when placing a vertical ship of length 3 on the right, 8 fields are not usable', () => {
  const ship = gameboard.place('carrier', 3, 'J', 5, 'vertical');
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(8);
});

//
test('when placing three ships, the array of ships contains them all', () => {
  const ship1 = gameboard.place('carrier', 5, 'C', 2);
  const ship2 = gameboard.place('battlefield', 4, 'D', 4);
  const ship3 = gameboard.place('submarine', 5, 'F', 8);
  expect(gameboard.ships.length).toBe(3);
});

test("can't place ship in forbidden fields", () => {
  const ship1 = gameboard.place('carrier', 5, 'C', 2);
  const ship2 = gameboard.place('battlefield', 4, 'C', 3);
  const ship3 = gameboard.place('submarine', 5, 'E', 1);
  expect(gameboard.ships.length).toBe(1);
});
