var birds = 3;

function dogHouse() { //outer function
  var dogs = 8; //visible in inner function, hidden from outer scope
  function showDogs() { //inner function
    console.log(dogs);
  }
  return showDogs;
}

var getDogs = dogHouse();

getDogs(); //8
