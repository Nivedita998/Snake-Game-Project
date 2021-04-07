import {
  update as updateSnake,
  draw as drawSnake,
  snake_speed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderedTime = 0;
let gameOver = false;
// selecting gameboard  div from index.html
const gameBoard = document.querySelector("#game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost :-( .Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }

  // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint
  window.requestAnimationFrame(main);

  const secondsSincelastRender = (currentTime - lastRenderedTime) / 1000;

  //means if secondslastrender is less than half of snake speed then return or dont run below code
  if (secondsSincelastRender < 1 / snake_speed) return;

  lastRenderedTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
