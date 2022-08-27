/* eslint-disable no-undef */
import Player from './player';
import Ship from './ship';

let player;

beforeEach(() => {
  player = Player('Jim');
  return player;
});

test("player's name is set correctly", () => {
  expect(player.name).toBe('Jim');
});

test("there are 100 fields in the player's gameboard", () => {
  expect(player.gameboard.fields.length).toBe(100);
});

test('when places vertical carrier on F4, cannot place another horizontal carrier on C5', () => {
  const ship1 = Ship('carrier', 5, 'F', 4, 'vertical');
  const ship2 = Ship('carrier', 5, 'C', 5);

  player.placeShip(ship1);
  player.placeShip(ship2);
  expect(player.gameboard.ships.length).toBe(1);
});

test('when places vertical carrier on F4, can place another vertical carrier on H2', () => {
  const ship1 = Ship('carrier', 5, 'F', 4, 'vertical');
  const ship2 = Ship('carrier', 5, 'H', 2, 'vertical');

  player.placeShip(ship1);
  player.placeShip(ship2);
  expect(player.gameboard.ships.length).toBe(2);
});

test('correctly places five horizontal ships', () => {
  const ship1 = Ship('carrier', 5, 'A', 1);
  const ship2 = Ship('battleship', 4, 'C', 3);
  const ship3 = Ship('destroyer', 3, 'B', 5);
  const ship4 = Ship('submarine', 3, 'F', 7);
  const ship5 = Ship('patrol boat', 2, 'E', 10);

  player.placeShip(ship1);
  player.placeShip(ship2);
  player.placeShip(ship3);
  player.placeShip(ship4);
  player.placeShip(ship5);
  expect(player.gameboard.ships.length).toBe(5);
});

test('there are no ships before the first one is added', () => {
  expect(player.gameboard.ships.length).toBe(0);
});

test('always places randomly just one ship', () => {
  const ship = Ship('carrier', 5);
  player.placeShipRandomly(ship);
  expect(player.gameboard.ships.length).toBe(1);
});

test('player attacks enemy and hits a ship', () => {
  const ship1 = Ship('carrier', 5, 'A', 1);
  const ship2 = Ship('battleship', 4, 'C', 3);
  const ship3 = Ship('destroyer', 3, 'B', 5);
  const ship4 = Ship('submarine', 3, 'F', 7);
  const ship5 = Ship('patrol boat', 2, 'E', 10);

  let player2 = Player('Steve');

  player2.placeShip(ship1);
  player2.placeShip(ship2);
  player2.placeShip(ship3);
  player2.placeShip(ship4);
  player2.placeShip(ship5);

  player.shootAt(player2, 'E', 3);
  expect(player2.gameboard.fields[24].hit).toBeTruthy();
});

test('player attacks enemy and misses', () => {
  const ship1 = Ship('carrier', 5, 'A', 1);
  const ship2 = Ship('battleship', 4, 'C', 3);
  const ship3 = Ship('destroyer', 3, 'B', 5);
  const ship4 = Ship('submarine', 3, 'F', 7);
  const ship5 = Ship('patrol boat', 2, 'E', 10);

  let player2 = Player('Steve');

  player2.placeShip(ship1);
  player2.placeShip(ship2);
  player2.placeShip(ship3);
  player2.placeShip(ship4);
  player2.placeShip(ship5);

  player.shootAt(player2, 'F', 5);
  expect(player2.gameboard.fields[45].missed).toBeTruthy();
});
