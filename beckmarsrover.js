/////Mars Rover
///Horray it's working!//

//object
var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: ["(0,0)"]
  };
  
  //turning and moving functions. Could have used switch??///
  //Each logs to console its resulting direction or location.
  
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    if (rover.direction === "N") {
      rover.direction = "W";
    } else if (rover.direction === "E") {
      rover.direction = "N";
    } else if (rover.direction === "S") {
      rover.direction = "E";
    } else if (rover.direction === "W") {
      rover.direction = "S";
    } else {
      rover.direction = "N";
      console.log("Direction error. Default N direction restored");
    }
    console.log("Rover is now facing " + rover.direction);
  }
  
  function turnRight(rover) {
    console.log("turnRight was called!");
    if (rover.direction === "N") {
      rover.direction = "E";
    } else if (rover.direction === "E") {
      rover.direction = "S";
    } else if (rover.direction === "S") {
      rover.direction = "W";
    } else if (rover.direction === "W") {
      rover.direction = "N";
    } else {
      rover.direction = "N";
      console.log("Direction error. Default N direction restored");
    }
    console.log("Rover is now facing " + rover.direction);
  }
  
  function moveForward(rover) {
    console.log("moveForward was called");
    if (rover.direction === "N") {
      rover.y--;
    } else if (rover.direction === "E") {
      rover.x++;
    } else if (rover.direction === "S") {
      rover.y++;
    } else if (rover.direction === "W") {
      rover.x--;
    }
    console.log("Rover moved to (" + rover.x + "," + rover.y + ")");
  }
  
  //Function to add to travelLog property of rover object.  It works!//
  function addEntry() {
    rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
  }
  
  ///This function iterates through a string of commands rlf.
  //Calls the functions for movement which results in a list of moves logged to console.
  //Also calls addEntry function with each iteration.
  //Then at end logs travelLog to console.
  var roverCommands = "rffrfflfrff";
  function takeCommands() {
    for (var i = 0; i <= roverCommands.length; i++) {
      if (roverCommands[i] == "l") {
        turnLeft(rover);
      } else if (roverCommands[i] == "r") {
        turnRight(rover);
      } else if (roverCommands[i] == "f") {
        moveForward(rover);
      }
      addEntry();
    }
    console.log(rover.travelLog);
  }
  
  takeCommands(roverCommands);
  