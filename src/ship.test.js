/* eslint-disable no-undef */
import Ship from "./ship";

test('has the type property', () => {
  expect(Ship('carrier', 5)).toHaveProperty('type');
});

test('has the length property', () => {
  expect(Ship('carrier', 5)).toHaveProperty('length');
});

test('all hits are false to start with', () => {
  expect(Ship('carrier', 5).hits).not.toContain('true');
});

test('the hits list contains length elements', () => {
  expect(Ship('battleship', 4).hits.length).toBe(4);
});

test('second segment of the ship got hit', () => {
  const ship = Ship('carrier', 5);
  ship.hit(1);
  expect(ship.hits[1]).toBeTruthy();
});

test("new ship isn't sunk", () => {
  const ship = Ship('carrier', 5);
  expect(ship.isSunk()).toBeFalsy();
});

test("carrier that was hit twice isn't sunk", () => {
  const ship = Ship('carrier', 5);
  ship.hit(2);
  ship.hit(0);
  expect(ship.isSunk()).toBeFalsy();
});

test('carrier that was hit five times is sunk', () => {
  const ship = Ship('carrier', 5);
  ship.hit(0);
  ship.hit(1);
  ship.hit(4);
  ship.hit(3);
  ship.hit(2);
  expect(ship.isSunk()).toBeTruthy();
});

test('submarine that was hit three times is sunk', () => {
  const ship = Ship('submarine', 3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBeTruthy();
});

test("ship's coords are set correctly", () => {
  const ship = Ship('submarine', 3, 'C', '5');
  expect(ship.x).toBe('C');
});
