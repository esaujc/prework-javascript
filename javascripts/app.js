// Rover Object Goes Here
var rover1 = {
  direction: "N",
  x: 0,
  y:0,
  travelLog: [{posX: 0,posY: 0}],
  name: "Rover 1",
}
var rover2 = {
  direction: "E",
  x: 0,
  y: 9,
  travelLog: [{posX: 0,posY: 9}],
  name: "Rover 2",
}

// Los Rover se identifican con O y los obstáculos con X
var board = [
  ["O", null, null, "X", null,null,null,null,null,null],
  [null, "X", null, null, null,null,null,null,null,null],
  ["X", null, null, null, null,null,null,null,null,null],
  [null, null, null, null, null,"X",null,null,null,null],
  [null, null, null, null, null,null,null,null,null,null],
  [null, null, null, null, null,null,null,null,"X",null],
  [null, null, null, null, null,null,null,null,null,null],
  [null, null, null, null, null,"X",null,null,null,null],
  [null, "X", null, null, null,null,null,null,null,null],
  ["O", null, null, null, null,null,null,null,null,null],
];

var previousCommand = "None";
var nextCommand = "None";


// ======================

// ======================

// Esta función actualiza el estado de los comandos cuando giramos a la izquierda
function commandLeft(rover){
  previousCommand = nextCommand;
  nextCommand = "Left";
}

function turnLeft(rover){
//  console.log("turnLeft was called!");
//  console.log("Old Direction: "+ rover.direction);
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      commandLeft(rover);
      break;
    case "W":
        rover.direction = "S";
        commandLeft(rover);
        break;
    case "S":
        rover.direction = "E";
        commandLeft(rover);
      break;
    case "E":
        rover.direction = "N";
        commandLeft(rover);
        break;
    default:
       console.log("Value not valid");
  }
//  console.log("Actual direction:  "+ rover.direction);
  start(rover);
}

// Esta función actualiza el estado de los comandos cuando giramos a la derecha
function commandRight(rover){
  previousCommand = nextCommand;
  nextCommand = "Right";
}

function turnRight(rover){
//  console.log("turnRight was called!");
  //console.log("Old Direction: "+ rover.direction);
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      commandRight(rover);
      break;
      case "E":
        rover.direction = "S";
        commandRight(rover);
        break;
      case "S":
        rover.direction = "W";
        commandRight(rover);
      break;
      case "W":
        rover.direction = "N";
        commandRight(rover);
        break;
    default:
       console.log("Value not valid");
  }
//  console.log("Actual direction: "+ rover.direction);
  start(rover);
}

function moveForward(rover){
//  console.log("moveForward was called");
//  console.log("Old position: [" + rover.x + ", " + rover.y + "]"  );
  switch (rover.direction) {
    case "N":
      if (rover.y === 0){
        console.log("Error: Rover will be out the limits (North)");
      }  else if (!checkObstacle(rover.y-1,rover.x)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.y -= 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY+1][posX] = board[posY][posX]; // Actualizamos la posición actual
        board[posY][posX] = "O";                 // y la siguiente del tablero
      }else{
          console.log("Error: Some obstacle avoid our movement");
      }
      break;
      case "E":
      if (rover.x === 9){
        console.log("Error: Rover will be out the limits (East)");
      } else if (!checkObstacle(rover.y,(rover.x)+1)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.x += 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY][posX-1] = board[posY][posX]; // Actualizamos la posición actual
        board[posY][posX] = "O";                 // y la siguiente del tablero
      }else{
        console.log("Error: Some obstacle avoid our movement");
      }
        break;
      case "S":
      if (rover.y === 9){
        console.log("Error: Rover will be out the limits (South)");
      }  else if (!checkObstacle(rover.y+1,rover.x)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.y += 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY-1][posX] = board[posY][posX]; // Actualizamos la posición actual
        board[posY][posX] = "O";                 // y la siguiente del tablero
      }else{
          console.log("Error: Some obstacle avoid our movement");
        }
      break;
      case "W":
      if (rover.x === 0){
        console.log("Error: Rover will be out the limits(West)");
      }  else if (!checkObstacle(rover.y,(rover.x)-1)){ // Cambiamos el orden porque el tablero se muestra como X Y
          rover.x -= 1;
          var posX = rover.x;
          var posY = rover.y;
          var newPosition = {posX,posY};
          rover.travelLog.push(newPosition);
          board[posY][posX+1] = board[posY][posX]; // Actualizamos la posición actual
          board[posY][posX] = "O";                 // y la siguiente del tablero
      }else{
        console.log("Error: Some obstacle avoid our movement");
      }
      break;
      default:
       console.log("Value not valid");
  }

// Se podría pasar a una función. Actualiza el estado de los comandos cuando avanzamos
  if ((rover.direction === "N") || (rover.direction === "S") || (rover.direction === "W") || (rover.direction === "E") ){
    previousCommand = nextCommand;
    nextCommand = "Forward";
  }

//  console.log("Actual position: [" + rover.x + ", " + rover.y + "]"  );
  start(rover);
}

function moveBackward(rover){
//  console.log("moveForward was called");
//  console.log("Old position: [" + rover.x + ", " + rover.y + "]"  );
  switch (rover.direction) {
    case "S":
      if (rover.y === 0){
        console.log("Error: Rover will be out the limits (North)");
      }  else if (!checkObstacle(rover.y-1,rover.x)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.y -= 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY+1][posX] = board[posY][posX];
        board[posY][posX] = "O";
      }else{
          console.log("Error: Some obstacle avoid our movement");
      }
      break;
      case "W":
      if (rover.x === 9){
        console.log("Error: Rover will be out the limits (East)");
      } else if (!checkObstacle(rover.y,(rover.x)+1)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.x += 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY][posX-1] = board[posY][posX];
        board[posY][posX] = "O";
      }else{
        console.log("Error: Some obstacle avoid our movement");
      }
        break;
      case "N":
      if (rover.y === 9){
        console.log("Error: Rover will be out the limits (South)");
      }  else if (!checkObstacle(rover.y+1,rover.x)){ // Cambiamos el orden porque el tablero se muestra como X Y
        rover.y += 1;
        var posX = rover.x;
        var posY = rover.y;
        var newPosition = {posX,posY};
        rover.travelLog.push(newPosition);
        board[posY-1][posX] = board[posY][posX];
        board[posY][posX] = "O";
      }else{
          console.log("Error: Some obstacle avoid our movement");
        }
      break;
      case "E":
      if (rover.x === 0){
        console.log("Error: Rover will be out the limits(West)");
      }  else if (!checkObstacle(rover.y,(rover.x)-1)){ // Cambiamos el orden porque el tablero se muestra como X Y
          rover.x -= 1;
          var posX = rover.x;
          var posY = rover.y;
          var newPosition = {posX,posY};
          rover.travelLog.push(newPosition);
          board[posY][posX+1] = board[posY][posX];
          board[posY][posX] = "O";
      }else{
        console.log("Error: Some obstacle avoid our movement");
      }
      break;
      default:
       console.log("Value not valid");
  }
// Se podría pasar a una función. Actualiza el estado de los comandos cuando retrocedemos
  if ((rover.direction === "N") || (rover.direction === "S") || (rover.direction === "W") || (rover.direction === "E") ){
    previousCommand = nextCommand;
    nextCommand = "Backwards";
  }

//  console.log("Actual position: [" + rover.x + ", " + rover.y + "]"  );
  start(rover);
}

// Mustra el recorrido que ha hecho el Rover
function tracking(rover){
  console.log(rover.travelLog);
}

// Función de prueba que utilicé para mover el Rover
function menu(option){
  switch (option) {
    case "f":
    case "F":
      moveForward(rover1);
      break;
    case "l":
    case "L":
        turnLeft(rover1);
        break;
    case "r":
    case "R":
        turnRight(rover1);
        break;
    default:
        console.log("Error: invalid option.");
  }
}

// Función para mover el Rover seleccionado mediante lista
function moveRover(list,rover){
  for (var i=0; i< list.length;i++){
    if (list[i] === "r"){
      turnRight(rover);
      }
      else if(list[i] === "l"){
        turnLeft(rover);
      }else if(list[i] === "f"){
        moveForward(rover);
      }

  }

}

// Función para ver si hay obstáculos u otros Rovers
function checkObstacle(x,y){
  var ret = false;

  if ((board[x][y] === "X") ||(board[x][y] === "O")) {
    ret = true;
  }
//  console.log(board[x][y]);
  return ret;


}


// Función de Inicio
function start(rover){
  //console.clear();
  console.log("Rover Name: " + rover.name);
  console.log("Rover Direction: " + rover.direction);
  console.log("Actual position: [" + rover.x + ", " + rover.y + "]"  );
  console.log("Previous Command: " + previousCommand);
  console.log("Next Command: " + nextCommand);

  paintBoard();
}

//Función para dibujar el Tablero
function paintBoard(){

  for (i=0; i< 10; i++){
    for (j=0; j< 10; j++){


    if (board[i][j] === null){
      document.getElementById(i+"-"+j).innerHTML =  "___";
    }else{
      document.getElementById(i+"-"+j).innerHTML =  "_"+board[i][j]+"_";
  }


    }
  }
}

//Función para cambiar de Rover y ver sus datos.
function changeRover(rover){
  start(rover);
}

//El programa inicia con el Rover 1
start(rover1);
