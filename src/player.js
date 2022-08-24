import Gameboard from "./gameboard";
import Ship from "./ship";

const Player = (name) => {
  const gameboard = Gameboard();

  const placeShip = (ship) => {
    gameboard.place(ship.type, ship.length, ship.x, ship.y, ship.orientation);
  };

  const placeShipRandomly = (shipType, shipLength) => {
    let ship;
    let shipCount = gameboard.ships.length;

    do {
      ship = createRandomShip(shipType, shipLength);
      placeShip(ship);
    } while (shipCount === gameboard.ships.length);
  };

  const shootAt = (enemy, x, y) => {
    enemy.gameboard.receiveAttack(x, y);
  };

  const shootRandomlyAt = (enemy) => {
    const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // select random coords
    let x = xCoords[Math.floor(Math.random() * (xCoords.length))];
    let y = Math.floor(Math.random() * 10) + 1;

    // check whether the field was already hit or missed
    // find the field at xPos, yPos
    let target = enemy.gameboard.fields.filter((field) => field.x === x && field.y === y)[0];

    while (target.missed || target.hit) {
      x = xCoords[Math.floor(Math.random() * (xCoords.length))];
      y = Math.floor(Math.random() * 10) + 1;
      target = fields.filter((field) => field.x === x && field.y === y)[0];
    }

    shootAt(enemy, x, y);

    return target;
  };

  // HELPER METHODS
  const createRandomShip = (shipType, shipLength) => {
    // select random orientation
    const orientationNumber = Math.floor(Math.random() * 10) + 1;
    const orientation = orientationNumber < 6 ? 'horizontal' : 'vertical';

    const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // select random coords
    let x = xCoords[Math.floor(Math.random() * (xCoords.length - shipLength))];
    let y = Math.floor(Math.random() * (10 - shipLength)) + 1;

    if (orientation === 'horizontal' && xCoords.indexOf(x) + shipLength > 10) {
      x = xCoords[Math.floor(Math.random() * (xCoords.length - shipLength))];
    }

    if (orientation === 'vertical' && y + shipLength > 11) {
      y = Math.floor(Math.random() * (10 - shipLength)) + 1;
    }

    // create ship
    const ship = Ship(shipType, shipLength, x, y, orientation);

    return ship;
  };

  return { name, gameboard, placeShip, placeShipRandomly, shootAt, shootRandomlyAt };
};

export default Player;
