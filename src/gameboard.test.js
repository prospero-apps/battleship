/* eslint-disable no-undef */
import Gameboard from './gameboard';
import Ship from './ship';

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
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const coords = ship.x + ship.y;
  expect(coords).toBe('D4');
});

test('when placing horizontal carrier on B5, field F5 is not free', () => {
  const ship = Ship('carrier', 5, 'B', 5);
  gameboard.place(ship);
  const f5 = gameboard.fields.filter((field) => field.x === 'F' && field.y === 5)[0];
  expect(f5.free).toBeFalsy();
});

test('when placing horizontal carrier on B5, field G5 is free', () => {
  const ship = Ship('carrier', 5, 'B', 5);
  gameboard.place(ship);
  const g5 = gameboard.fields.filter((field) => field.x === 'G' && field.y === 5)[0];
  expect(g5.free).toBeTruthy();
});

test('when placing vertical carrier on B5, field B7 is not free', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const b7 = gameboard.fields.filter((field) => field.x === 'B' && field.y === 7)[0];
  expect(b7.free).toBeFalsy();
});

test('when placing vertical carrier on B5, field B10 is free', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const b10 = gameboard.fields.filter((field) => field.x === 'B' && field.y === 10)[0];
  expect(b10.free).toBeTruthy();
});

test('when placing a ship of length 5, five fields are not free', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const notFree = gameboard.fields.filter((field) => field.free === false);
  expect(notFree.length).toBe(5);
});

test('by default a ship you place is horizontal', () => {
  const ship = Ship('carrier', 5, 'B', 5);
  gameboard.place(ship);
  expect(ship.orientation).toBe('horizontal');
});

test('a ship you place is oriented vertically if you choose so', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  expect(ship.orientation).toBe('vertical');
});

//

test('when placing horizontal carrier on D4, field F4 is not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'F' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field C4 is not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'C' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field I4 is not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'I' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field D3 is not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'D' && field.y === 3)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing horizontal carrier on D4, field D5 is not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'D' && field.y === 5)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing a horizontal ship of length 5, 17 fields are not usable', () => {
  const ship = Ship('carrier', 5, 'D', 4);
  gameboard.place(ship);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(17);
});

test('when placing a horizontal ship of length 5 at the top, 12 fields are not usable', () => {
  const ship = Ship('carrier', 5, 'D', 1);
  gameboard.place(ship);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(12);
});

//

test('when placing vertical carrier on B5, field B8 is not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 8)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field B4 is not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 4)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field B10 is not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'B' && field.y === 10)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field A7 is not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'A' && field.y === 7)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing vertical carrier on B5, field C9 is not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const f = gameboard.fields.filter((field) => field.x === 'C' && field.y === 9)[0];
  expect(f.usable).toBeFalsy();
});

test('when placing a vertical ship of length 5, 17 fields are not usable', () => {
  const ship = Ship('carrier', 5, 'B', 5, 'vertical');
  gameboard.place(ship);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(17);
});

test('when placing a vertical ship of length 3 on the right, 8 fields are not usable', () => {
  const ship = Ship('carrier', 3, 'J', 5, 'vertical');
  gameboard.place(ship);
  const notUsable = gameboard.fields.filter((field) => field.usable === false);
  expect(notUsable.length).toBe(8);
});

//
test('when placing three ships, the array of ships contains them all', () => {
  const ship1 = Ship('carrier', 5, 'C', 2);
  gameboard.place(ship1);
  const ship2 = Ship('battleship', 4, 'D', 4);
  gameboard.place(ship2);
  const ship3 = Ship('submarine', 5, 'F', 8);
  gameboard.place(ship3);
  expect(gameboard.ships.length).toBe(3);
});

test("can't place ship in forbidden fields", () => {
  const ship1 = Ship('carrier', 5, 'C', 2);
  gameboard.place(ship1);
  const ship2 = Ship('battleship', 4, 'C', 3);
  gameboard.place(ship2);
  const ship3 = Ship('submarine', 3, 'E', 1);
  gameboard.place(ship3);
  expect(gameboard.ships.length).toBe(1);
});

test("makes sure that if a horizontal carrier is on C2 and E2 is hit, the ship's third segment is hit", () => {
  const ship = Ship('carrier', 5, 'C', 2);
  gameboard.place(ship);
  gameboard.receiveAttack('E', 2);
  expect(ship.hits[2]).toBeTruthy();
});

test("makes sure that if a vertical carrier is on C2 and C4 is hit, the ship's third segment is hit", () => {
  const ship = Ship('carrier', 5, 'C', 2, 'vertical');
  gameboard.place(ship);
  gameboard.receiveAttack('C', 4);
  expect(ship.hits[2]).toBeTruthy();
});

test('removes sunk ship', () => {
  const ship1 = Ship('carrier', 5, 'C', 2);
  gameboard.place(ship1);
  const ship2 = Ship('submarine', 3, 'A', 5, 'vertical');
  gameboard.place(ship2);
  const ship3 = Ship('battleship', 4, 'G', 8);
  gameboard.place(ship3);
  gameboard.receiveAttack('A', 6);
  gameboard.receiveAttack('A', 5);
  gameboard.receiveAttack('A', 7);
  expect(gameboard.ships.length).toBe(2);
});

