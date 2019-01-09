// Code your solution in this file
function findMatching(drivers, driverName) {
  // debugger;
  return drivers.filter(function(name) {return name.toLowerCase() == driverName.toLowerCase()})
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(name) {return name.slice(0, letters.length) == letters})
}

function matchName(drivers, letters) {
  for (const key in drivers){
    // debugger;
    return drivers.filter(function(name) {return name["name"].slice(0, letters.length) == letters})
  }
}
