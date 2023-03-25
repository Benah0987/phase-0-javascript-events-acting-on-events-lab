// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `{left - 1}"px"`;
  }
}

function moveDodgerRight() {
  let left = parseInt(dodger.style.left);
  let right = left + 40;
  
  if (right < ) {
    dodger.style.left = `{left + 1}"px"`;
  }
}
//a function to prevent the dodger from escaping
function moveDodger(direction) {
  switch(direction) {
    case "left":
      moveDodgerLeft();
      break;
    case "right":
      moveDodgerRight();
      break;
    // Add additional cases for other directions
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key.startsWith("Arrow")) {
    moveDodger(e.key.substring(5).toLowerCase());
  }
});
