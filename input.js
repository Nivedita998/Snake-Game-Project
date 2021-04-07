let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

//ArrowUp , ArrowDown , ArrowLeft , ArrowRight are event.code
// of keydown event which finds the key which is pressed whn it is pressed
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      //this condition is for if snake is moving up thn by applying this it cannot move down
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      //this condition is for if snake is moving down thn by applying this it cannot move up
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      //this condition is for if snake is moving left thn by applying this it cannot move right
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      //this condition is for if snake is moving right thn by applying this it cannot move left
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
