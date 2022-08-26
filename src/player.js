import Gameboard from "./gameboard";
import Ship from "./ship";

const Player = (name) => {
  ///
  const fleet = [
    Ship('carrier', 5),
    Ship('battleship', 4),
    Ship('destroyer', 3),
    Ship('submarine', 3),
    Ship('patrol boat', 2),
  ];

  let currentShip = fleet[0];
  let shipsPlaced = false;

  const gameboard = Gameboard();
  
  const placeShip = (ship) => {
    gameboard.place(ship);
  };

  const placeShipRandomly = (fleetShip) => {
    const shipCount = gameboard.ships.length;

    do {
      randomizeShip(fleetShip);
      placeShip(fleetShip);
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
  const randomizeShip = (ship) => {
    // select random orientation
    const orientationNumber = Math.floor(Math.random() * 10) + 1;
    const orientation = orientationNumber < 6 ? 'horizontal' : 'vertical';

    const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // select random coords
    let x = xCoords[Math.floor(Math.random() * (xCoords.length - ship.length))];
    let y = Math.floor(Math.random() * (10 - ship.length)) + 1;

    if (orientation === 'horizontal' && xCoords.indexOf(x) + ship.length > 10) {
      x = xCoords[Math.floor(Math.random() * (xCoords.length - ship.length))];
    }

    if (orientation === 'vertical' && y + ship.length > 11) {
      y = Math.floor(Math.random() * (10 - ship.length)) + 1;
    }

    // set ship
    ship.x = x;
    ship.y = y;
    ship.orientation = orientation;
  };

  return {
    name,
    gameboard,
    fleet,
    currentShip,
    placeShip,
    placeShipRandomly,
    shootAt,
    shootRandomlyAt,
    shipsPlaced,
  };
};

export default Player;
