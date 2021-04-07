import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

//css grid starts with 1 so we have to put 1 as y which is a positin of food to display on gameboard
let food = getRandomFoodPosition();

const EXPANSION_RATE = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const FoodElement = document.createElement("div");
  FoodElement.style.gridRowStart = food.y;
  FoodElement.style.gridColumnStart = food.x;
  FoodElement.classList.add("food");
  gameBoard.appendChild(FoodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
