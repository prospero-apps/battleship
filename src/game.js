import Player from "./player";

// GENERAL LAYOUT
const content = document.getElementById('content');

// container for all the elements
export const container = document.createElement('div');
container.id = 'container';

// title header
const title = document.createElement('div');
title.id = 'title';
title.textContent = 'BATTLESHIP';
container.appendChild(title);
content.appendChild(container);

// GAME DEFAULTS
// available modes: placement (when players can place ships)
// and battle (when players shoot at each other)
let gameMode = 'placement';
let currentOrientation = 'horizontal';

// INTRO SCREEN
const createIntroScreen = () => {
  // intro container
  const intro = document.createElement('div');
  intro.id = 'intro';

  // name entry
  const nameEntry = document.createElement('div');

  const nameLabel = document.createElement('label');
  nameLabel.id = 'name-label';
  nameLabel.htmlFor = 'name-input';
  nameLabel.textContent = "Enter player's name";

  const nameInput = document.createElement('input');
  nameInput.id = 'name-input';

  nameEntry.appendChild(nameLabel);
  nameEntry.appendChild(nameInput);

  intro.appendChild(nameEntry);

  // start button
  const startButton = document.createElement('button');
  startButton.id = 'start-button';
  startButton.textContent = 'Start Game';
  startButton.addEventListener('click', () => {
    // hide intro screen
    intro.style.display = 'none';

    // start game
    startGame(nameInput.value);
  });

  intro.appendChild(startButton);
  container.appendChild(intro);

  return intro;
};

// GAME SCREEN
const createGameScreen = () => {
  const gameScreen = document.createElement('div');
  gameScreen.id = 'game-screen';

  return gameScreen;
};

// START GAME
let shipInfo;
const startGame = (player1Name) => {
  // create game screen
  const gameScreen = createGameScreen();
  container.appendChild(gameScreen);
  // let currentOrientation = 'horizontal';

  // create players
  const player1 = Player(player1Name);
  const player2 = Player('Computer');

  // set and hide player2's gameboard
  player2.placeShipRandomly(player2.fleet[0]);
  player2.placeShipRandomly(player2.fleet[1]);
  player2.placeShipRandomly(player2.fleet[2]);
  player2.placeShipRandomly(player2.fleet[3]);
  player2.placeShipRandomly(player2.fleet[4]);

  const gb2 = drawGameboard(player2);
  gameScreen.appendChild(gb2);
  gb2.style.display = 'none';

  // create player info and axis buttons
  const placementPanel = createPlacementPanel(player1);
  gameScreen.appendChild(placementPanel);

  shipInfo = createCurrentShipInfo(player1);
  placementPanel.appendChild(shipInfo);

  // show player1's gameboard
  const gb1 = drawGameboard(player1);
  gameScreen.appendChild(gb1);
};

const updateCurrentShipInfo = (player) => {
  shipInfo.textContent = `Place your ${player.currentShip.type}.`;
};

// CREATE PLAYER'S GAMEBOARD
const drawGameboard = (player) => {
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
      // player clicks to place ships
      if (gameMode === 'placement') {
        if (!player.shipsPlaced) {        
          player.currentShip.x = field.x;
          player.currentShip.y = field.y;
          player.currentShip.orientation = currentOrientation;
          
          // let player add ship
          let shipCount = player.gameboard.ships.length;
          player.placeShip(player.currentShip);
          if (shipCount < player.gameboard.ships.length) {

            // style all squares that belong to the ship
            for (let shipPart of player.currentShip.fields) {
              let index = player.gameboard.fields.indexOf(shipPart);
              frame.children[index].classList.add('ship');
            }

            // mark fields the player can't place ships on
            for (let field of player.gameboard.fields) {
              if (!field.usable && field.free) {
                let index = player.gameboard.fields.indexOf(field);
                frame.children[index].classList.add('forbidden');
              }
            }
            
            // update current ship, so the next one to add
            if (player.gameboard.ships.length < 5) {
              player.currentShip = player.fleet[player.fleet.indexOf(player.currentShip) + 1];
              updateCurrentShipInfo(player);            
            } else {
              player.shipsPlaced = true;
            }
          }  
        } 
      // player clicks to shoot
      } else {
        console.log('shoot');
      }
      
    });

    frame.appendChild(square);
  }

  return frame;
};

// CREATE PLACEMENT PANEL
const createPlacementPanel = (player) => {
  const placementContainer = document.createElement('div');
  placementContainer.id = 'placement-container';

  // info text
  const info = document.createElement('div');
  info.textContent = `Hey ${player.name}, place your ships by clicking on the board. Select axis before each placement.`;
  placementContainer.appendChild(info);

  // axes
  const axes = document.createElement('div');
  axes.className = 'axes';

  const horizontalButton = document.createElement('button');
  horizontalButton.textContent = 'HORIZONTAL';
  horizontalButton.className = 'axis-button clicked';

  const verticalButton = document.createElement('button');
  verticalButton.textContent = 'VERTICAL';
  verticalButton.className = 'axis-button';  

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
  axes.appendChild(verticalButton);

  placementContainer.appendChild(axes);

  return placementContainer;
};

// CREATE CURRENT SHIP INFO
const createCurrentShipInfo = (player) => {
  const shipLabel = document.createElement('div');
  shipLabel.id = 'ship-label';
  shipLabel.textContent = `Place your ${player.currentShip.type}.`;

  return shipLabel;
};

const Game = () => {
  // CREATE INTRO SCREEN
  const screen = createIntroScreen();
};

export default Game;
