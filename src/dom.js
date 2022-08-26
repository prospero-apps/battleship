// general layout
export const content = document.getElementById('content');

export const container = document.createElement('div');
container.id = 'container';

// title header
const title = document.createElement('div');
title.id = 'title';
title.textContent = 'BATTLESHIP';
container.appendChild(title);

// INTRO SCREEN
export const intro = document.createElement('div');
intro.id = 'intro';

// name entry
const nameEntry = document.createElement('div');
nameEntry.id = 'name-entry';

const nameLabel = document.createElement('label');
nameLabel.id = 'name-label';
nameLabel.htmlFor = 'name-input';
nameLabel.textContent = "Enter player's name";

export const nameInput = document.createElement('input');
nameInput.id = 'name-input';

nameEntry.appendChild(nameLabel);
nameEntry.appendChild(nameInput);

intro.appendChild(nameEntry);

export const startButton = document.createElement('button');
startButton.id = 'start-button';
startButton.textContent = 'Start Game';

intro.appendChild(startButton);

container.appendChild(intro);

// GAMEBOARD SCREEN
export const gbScreen = document.createElement('div');
gbScreen.id = 'gb-screen';

// info for player 1
export const informPlayer = (player) => {
  const playerInfo = document.createElement('div');
  playerInfo.className = 'player-info';
  const infoLine1 = document.createElement('div');
  const infoLine2 = document.createElement('div');

  infoLine1.textContent = `Hey ${player.name}, place your ships by clicking on the board.`;
  infoLine2.textContent = 'Select axis before each placement.';

  playerInfo.appendChild(infoLine1);
  playerInfo.appendChild(infoLine2);

  return playerInfo;
};

// axes
export const axes = document.createElement('div');
axes.className = 'axes';

export const horizontalButton = document.createElement('button');
horizontalButton.textContent = 'HORIZONTAL';
horizontalButton.className = 'axis-button clicked';

export const shipLabel = document.createElement('div');
shipLabel.id = 'ship-label';

export const verticalButton = document.createElement('button');
verticalButton.textContent = 'VERTICAL';
verticalButton.className = 'axis-button';

let currentOrientation = 'horizontal';

horizontalButton.addEventListener('click', () => {
  currentOrientation = 'horizontal';
  horizontalButton.classList.add('clicked');
  verticalButton.classList.remove('clicked');
});

verticalButton.addEventListener('click', () => {
  currentOrientation = 'vertical';
  verticalButton.classList.add('clicked');
  horizontalButton.classList.remove('clicked');
});

axes.appendChild(horizontalButton);
axes.appendChild(shipLabel);
axes.appendChild(verticalButton);

// gameboard
export const drawGameboard = (player) => {
  const frame = document.createElement('div');
  frame.className = 'frame';

  for (const field of player.gameboard.fields) {
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = field.x + field.y;
    square.dataset.x = field.x;
    square.dataset.y = field.y;
    
    if (!field.free) {
      square.classList.add('ship');
    }

    square.addEventListener('click', () => {
      if (!player.shipsPlaced) {        
        player.currentShip.x = field.x;
        player.currentShip.y = field.y;
        player.currentShip.orientation = currentOrientation;
        
        
        let shipCount = player.gameboard.ships.length;
        player.placeShip(player.currentShip);
        if (shipCount < player.gameboard.ships.length) {

          for (let shipPart of player.currentShip.fields) {
            let index = player.gameboard.fields.indexOf(shipPart);
            frame.children[index].classList.add('ship');
          }

          if (player.gameboard.ships.length < 5) {
            player.currentShip = player.fleet[player.fleet.indexOf(player.currentShip) + 1];
            shipLabel.textContent = player.currentShip.type;
          } else {
            player.shipsPlaced = true;
            console.log('All ships placed.');
          }
        } else {
          console.log('not added');
        }       
      }
    });

    frame.appendChild(square);
  }

  return frame;
};
