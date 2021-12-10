var userInpputHeight = prompt("Enter height of matrix");
var userInputLenght = prompt("Enter lenght of matrix");
var userInputArrayValue = prompt("Enter matrix value");
const createMatrix = () => {
  const myArray1 = [];

  for (let i = 0; i < userInpputHeight; i++) {
    myArray1[i] = [];
    for (let j = 0; j < userInputLenght; j++) {
      myArray1[i][j] = userInputArrayValue;
    }
  }
  console.log(myArray1);
};
createMatrix();
function check() {
  if (userInputLenght <= 1 || userInpputHeight <= 1) {
    console.log(-1);
  } else if (
    userInpputHeight > userInputLenght ||
    userInputLenght > userInpputHeight
  ) {
    console.log(1);
  } else if (userInpputHeight == userInputLenght) {
    console.log(2);
  }
}
check();
