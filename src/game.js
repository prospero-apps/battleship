import Player from "./player";
import Ship from "./ship";
import {
  intro,
  container,
  gbScreen,
  drawGameboard,
  informPlayer,
  axes,
  // horizontalButton,
  // verticalButton,
  shipLabel
} from "./dom";

const Game = (playerName) => {  
  // set defaults
  // available modes: placement (when players can place ships)
  // and battle (when players shoot at each other)
  // let currentMode = 'placement';
  // let currentOrientation = 'horizontal';

  // hide intro and display gameboard screen
  intro.style.display = 'none';
  container.appendChild(gbScreen);

  // set players
  const player1 = Player(playerName);
  const player2 = Player('Computer');

  // set player2's gameboard
  player2.placeShipRandomly(player2.fleet[0]);
  player2.placeShipRandomly(player2.fleet[1]);
  player2.placeShipRandomly(player2.fleet[2]);
  player2.placeShipRandomly(player2.fleet[3]);
  player2.placeShipRandomly(player2.fleet[4]);

  // create and hide player2's gameboard
  const gb2 = drawGameboard(player2);
  gbScreen.appendChild(gb2);
  gb2.style.display = 'none';

  // create player info text
  const playerInfo = informPlayer(player1);
  gbScreen.appendChild(playerInfo);

  // display axis buttons
  gbScreen.appendChild(axes);

  // shipLabel.textContent = currentShip.type;
  shipLabel.textContent = player1.currentShip.type;

  // horizontalButton.addEventListener('click', () => {
  //   currentOrientation = 'horizontal';
  //   horizontalButton.classList.add('clicked');
  //   verticalButton.classList.remove('clicked');
  // });

  // verticalButton.addEventListener('click', () => {
  //   currentOrientation = 'vertical';
  //   verticalButton.classList.add('clicked');
  //   horizontalButton.classList.remove('clicked');
  // });

  // display player1's gameboard
  const gb1 = drawGameboard(player1);
  gbScreen.appendChild(gb1);

  // for (const square of gb1.children) {
  //   square.addEventListener('click', () => {
  //     if (currentMode === 'placement' && player1.gameboard.ships.length < 5) {
  //       let playerShipCount = player1.gameboard.ships.length;

  //       currentShip.x = square.dataset.x;
  //       currentShip.y = +square.dataset.y;
  //       currentShip.orientation = currentOrientation;
  //       player1.placeShip(currentShip);

  //       if (player1.gameboard.ships.length > playerShipCount) {
  //         let lastShip = player1.gameboard.ships[player1.gameboard.ships.length - 1];
  //         // square.classList.add('ship');      
  //       }

        

  //       let currentShipIndex = fleet.indexOf(currentShip);
  //       if (currentShipIndex < 4) {
  //         currentShip = fleet[fleet.indexOf(currentShip) + 1];
  //       }
        
        

  //       console.log(player1.gameboard.ships.length);
  //       }
  //   })
  // }



  // for (const square of gb1.children) {
  //   square.addEventListener('click', () => {
  //     if (player1.gameboard.ships.length < 5) {
  //       let playerShipCount = player1.gameboard.ships.length;

  //       currentShip.x = square.dataset.x;
  //       currentShip.y = +square.dataset.y;
  //       currentShip.orientation = currentOrientation;
  //       player1.placeShip(currentShip);

  //       if (player1.gameboard.ships.length > playerShipCount) {
  //         let lastShip = player1.gameboard.ships[player1.gameboard.ships.length - 1];
  //         // square.classList.add('ship');      
  //       }

        

  //       let currentShipIndex = fleet.indexOf(currentShip);
  //       if (currentShipIndex < 4) {
  //         currentShip = fleet[fleet.indexOf(currentShip) + 1];
  //       }
        
        

  //       console.log(player1.gameboard.ships.length);
  //       }
  //   })
  // }


  
  return { player1, player2 };
};



export default Game;
