const Gameboard = () => {
  const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const yCoords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // array of ships
  const ships = [];

  // create fields
  const fields = [];
  for (const y of yCoords) {
    for (const x of xCoords) {
      fields.push({ x, y, free: true, usable: true, missed: false, hit: false });
    }
  }
  
  const place = (ship) => {
    if (shipAllowed(ship)) {
      reserveFields(ship);
      ships.push(ship);
    }
  };

  const receiveAttack = (xPos, yPos) => {
    // find the field at xPos, yPos
    const attackedField = fields.filter((field) => field.x === xPos && field.y === yPos)[0];

    // check if there is a ship at this position
    const hitShip = attackedField.free === false;

    if (hitShip) {
      // mark field as hit
      attackedField.hit = true;

      // if a ship was hit, identify it
      const hitUnit = ships.filter((ship) => ship.fields.includes(attackedField))[0];

      // check which segment of the ship was hit
      const hitSegment = hitUnit.fields.filter((field) => field === attackedField)[0];
      // find index of hit segment
      const hitSegmentIndex = hitUnit.fields.indexOf(hitSegment);

      // hit the ship
      hitUnit.hit(hitSegmentIndex);

      // check if the ship should sink
      if (hitUnit.isSunk()) {
        const hitUnitIndex = ships.indexOf(hitUnit);
        ships.splice(hitUnitIndex, 1);
      }
    } else {
      attackedField.missed = true;
    }
  };

  // HELPER METHODS
  const reserveFields = (ship) => {
    const startField = fields.filter((field) => field.x === ship.x && field.y === ship.y)[0];

    // reserve fields for ship and disable surrounding fields
    const startFieldIndex = fields.indexOf(startField);
    // horizontal ship
    if (ship.orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        fields[startFieldIndex + i].free = false;
        ship.fields[i] = fields[startFieldIndex + i];

        // disable the field where the ship is...
        fields[startFieldIndex + i].usable = false;

        // and the fields above the ship...
        if (startFieldIndex > 9) {
          fields[startFieldIndex + i - 10].usable = false;
        }
        // and the fields below.
        if (startFieldIndex < 90) {
          fields[startFieldIndex + i + 10].usable = false;
        }
      }
      // disable the fields on both sides of the ship
      if (startFieldIndex % 10 !== 0) {
        fields[startFieldIndex - 1].usable = false;
      }
      if ((startFieldIndex + ship.length) % 10 !== 0) {
        fields[startFieldIndex + ship.length].usable = false;
      }
    // vertical ship
    } else {
      for (let i = 0; i < ship.length; i++) {
        fields[startFieldIndex + 10 * i].free = false;
        ship.fields[i] = fields[startFieldIndex + 10 * i];

        // disable the field where the ship is...
        fields[startFieldIndex + 10 * i].usable = false;

        // and the fields to the left...
        if (startFieldIndex % 10 !== 0) {
          fields[startFieldIndex + 10 * i - 1].usable = false;
        }
        // and the fields to the right.
        if ((startFieldIndex + 1) % 10 !== 0) {
          fields[startFieldIndex + 10 * i + 1].usable = false;
        }
      }
      // disable the fields on both sides of the ship
      if (startFieldIndex > 9) {
        fields[startFieldIndex - 10].usable = false;
      }
      if (startFieldIndex + 10 * (ship.length - 1) < 90) {
        fields[startFieldIndex + 10 * ship.length].usable = false;
      }
    }
  };

  const shipAllowed = (ship) => {
    const startField = fields.filter((field) => field.x === ship.x && field.y === ship.y)[0];
    const startFieldIndex = fields.indexOf(startField);

    if (ship.orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        if (fields[startFieldIndex + i].usable === false
        || (startFieldIndex % 10) > (10 - ship.length)) {
          return false;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (fields[startFieldIndex + 10 * i].usable === false
        || (ship.y) > (11 - ship.length)) {
          return false;
        }
      }
    }
    return true;
  };
  
  const allShipsSunk = () => ships.every((ship) => ship.isSunk());
    
  return {
    fields,
    ships,
    place,
    receiveAttack,
    allShipsSunk,
  };
};

export default Gameboard;
