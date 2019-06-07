// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", // possible direction values are "N", "S", "E", "W"
  x: 0,
  y: 0,
  travelLog: [0,0]
}
// ======================

// Grid Object
// ======================

var grid = [
  ["0,0", "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9"],
  ["1,0", "1,1", "1,2", "1,3", "1,4", "1,5", "1,6", "1,7", "1,8", "1,9"],
  ["2,0", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9"],
  ["3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9"],
  ["4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9"],
  ["5,0", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9"],
  ["6,0", "6,1", "6,2", "6,3", "6,4", "6,5", "6,6", "6,7", "6,8", "6,9"],
  ["7,0", "7,1", "7,2", "7,3", "7,4", "7,5", "7,6", "7,7", "7,8", "7,9"],
  ["8,0", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9"],
  ["9,0", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9"]
];
// ======================

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
  console.log("Rover turns: " + rover.direction);
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
		case 'W':
			rover.direction = 'N';
			break;
  }
  console.log("Rover turns: " + rover.direction);
}

function moveForward(rover) {
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.x;
      rover.y++;
      grid[rover.x][rover.y];
      break;
    case "S":
      rover.x;
      rover.y--;
      grid[rover.x][rover.y];
      break;
    case "E":
      rover.x++;
      rover.y;
      grid[rover.x][rover.y];
      break;
    case "W":
      rover.x--;
      rover.y;
      grid[rover.x][rover.y];
      break;
  }
  console.log("Move 1 position forward to the: " + rover.direction);
  console.log(`grid[${rover.x}][${rover.y}]`);
}

function doCommands(command) {  
	for (let i = 0; i < command.length; i++) {
    console.log(`Rover is facing ${rover.direction}`);
		switch (command[i]) {
			case 'l':
        turnLeft(rover);
        //
        break;
      case 'r':
        turnRight(rover);
        //
        break;
      case 'f':
        moveForward(rover);
        //
        break;
    }
	}
}

doCommands("rffrfflfrff");