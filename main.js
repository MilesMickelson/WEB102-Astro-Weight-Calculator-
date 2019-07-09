var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
//Dropdown element with planet names as options
var select = document.getElementById("planets");
var userWeight = document.getElementById("user-weight");
planets.forEach(function(element){
    var newSelect = document.createElement("option");
    var planetNameOption = document.createTextNode(element[0]);
    newSelect.appendChild(planetNameOption);
    select.appendChild(newSelect);
})

// Function to calculate users weight on selected planet
function calculateWeight(userWeight, planetName) {
  var planetName = document.getElementById("planets").selectedIndex;
  var userWeight = document.getElementById("user-weight").value
  var gravity = planets[planetName][1];
  var result = userWeight * gravity;
  return result;
}
// Function to toggle calculation of users weight on selected planet and return message
function handleClickEvent(userWeight, planetName) {
  var userWeight = document.getElementById("user-weight").value;
  var planetName = document.getElementById("planets").value;
  var result = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
}


