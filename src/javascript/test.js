function whichColumnIsAvailable(column) {
  //returns which cell on the selected column is available
  //   if (column[0] !== 0) {
  //     return;
  //   }

  for (let i = 5; i >= 0; i--) {
    if (column[i] === 0) {
      column[i] = "X";
      console.log(column);
    }
  }
}

let myArray = [0, 0, 0, 0, 0, 0];

whichColumnIsAvailable(myArray);
console.log(myArray);

const myObj = { name: "berk" };
console.log(myObj);
