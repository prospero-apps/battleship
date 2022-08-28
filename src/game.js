import Player from "./player";

const content = document.getElementById('content');

const Game = () => {
  // GENERAL LAYOUT
  // container for all the elements
  const container = document.createElement('div');
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

  // GAME SCREEN
  let gameScreen;
  const createGameScreen = () => {
    gameScreen = document.createElement('div');
    gameScreen.id = 'game-screen';

    return gameScreen;
  };

  // START GAME
  let shipInfo;
  let player1;
  let player2;

  // gameboards
  let gb1;
  let gb2;

  let placementPanel;

  const startGame = (player1Name) => {
    // create game screen
    const gameScreen = createGameScreen();
    container.appendChild(gameScreen);

    // create gameboard panel
    const gameboardPanel = document.createElement('div');
    gameboardPanel.id = 'gameboard-panel';

    // create players
    player1 = Player(player1Name);
    player2 = Player('Computer');

    // set and hide player2's gameboard
    player2.placeShipRandomly(player2.fleet[0]);
    player2.placeShipRandomly(player2.fleet[1]);
    player2.placeShipRandomly(player2.fleet[2]);
    player2.placeShipRandomly(player2.fleet[3]);
    player2.placeShipRandomly(player2.fleet[4]);

    gb2 = drawGameboard(player2);
    gameboardPanel.appendChild(gb2);
    gb2.style.display = 'none';

    // create player info and axis buttons
    placementPanel = createPlacementPanel(player1);
    gameScreen.appendChild(placementPanel);

    gameScreen.appendChild(gameboardPanel);

    shipInfo = createCurrentShipInfo(player1);
    placementPanel.appendChild(shipInfo);

    // show player1's gameboard
    gb1 = drawGameboard(player1);
    gameboardPanel.appendChild(gb1);
  };

  // update current ship
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
    
      if (!field.free && player === player1) {
        square.classList.add('ship');
      }      

      square.addEventListener('click', () => {

        // player clicks to place ships
        if (gameMode === 'placement') {
          placeShip(player, frame, field); 
          
          // player clicks to shoot
        } else {
          if (player == player2) {
            fight(field, square);
          }          
        }      
      });

      frame.appendChild(square);
    }

    return frame;
  };

  const placeShip = (player, frame, field) => {
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
          startBattle();
        }
      }
    }
  };

  // CREATE PLACEMENT PANEL
  // let placementContainer;
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

  // GAME 
  const startBattle = () => {
    gameMode = 'battle';
    placementPanel.style.display = 'none';
    // gameScreen.style.flexDirection = 'row';
    gb2.style.display = 'grid';
    gb1.style.transform = 'scale(.8)';

    for (const square of gb1.children) {
      if (square.classList.contains('forbidden')) {
        square.classList.remove('forbidden');
      }
    }
  };

  const fight = (field, square) => {
    player1.shootAt(player2, field);

    if (field.missed) {
      square.classList.add('missed');
    }

    if (field.hit) {
      square.classList.add('hit');
    }

    if (player2.gameboard.allShipsSunk()) {
      isWinner(player1);
    } else {
      const target = player2.shootRandomlyAt(player1);

      const targetIndex = player1.gameboard.fields.indexOf(target);
      const targetSquare = gb1.children[targetIndex];

      if (target.missed) {
        targetSquare.classList.add('missed');
      }

      if (target.hit) {
        targetSquare.classList.add('hit');
      }

      if (player1.gameboard.allShipsSunk()) {
        isWinner(player2);
      }
    };
  };

  const isWinner = (player) => {
    gameScreen.style.display = 'none';
    const gameoverPanel = document.createElement('div');
    gameoverPanel.id = 'gameover-panel';

    const playAgainLabel = document.createElement('div');
    playAgainLabel.id = 'play-again-label';
    playAgainLabel.textContent = `The winner is ${player.name}.`;

    const playAgainButton = document.createElement('button');
    playAgainButton.id = 'play-again-button';
    playAgainButton.textContent = 'Play Again';

    playAgainButton.addEventListener('click', () => {
      playAgain();
    });

    gameoverPanel.appendChild(playAgainLabel);
    gameoverPanel.appendChild(playAgainButton);

    container.appendChild(gameoverPanel);
  };
};

const playAgain = () => {
  content.innerHTML = '';
  Game();
};

export default Game;
