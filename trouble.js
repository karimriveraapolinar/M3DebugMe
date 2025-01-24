let v1 = 3;
let v2 = 4;
let equals = " equals ";
//i couldve just added quotes to the alert around equals but i didnt and instead decided to make a variable for it
alert("3 times 4" + equals + v1 * v2);

//fixed spelling on style and getelementbyid
// This sets the general styling for the divs within the section tag using .style
let section = document.getElementById("s1");
section.style.width = "50%";
section.style.textAlign = "center";
section.style.fontFamily = "arial, serif";
section.style.fontWeight = "bold";
section.style.fontStyle = "italic";
section.style.fontSize = "20px";

// Sets the customization for each individual color/div tag
// .innerHTML is used to add content within each div tag.
// .style.backgroundColor is used to assign a different background color to each div

//innerHTML spelling fixed
// RED
const red = document.getElementById("red");
red.innerHTML = "RED";
red.style.backgroundColor = "red";

// ORANGE
const orange = document.getElementById("orange");
orange.innerHTML = "ORANGE";
orange.style.backgroundColor = "orange";

// YELLOW
const yellow = document.getElementById("yellow");
yellow.innerHTML = "YELLOW";
yellow.style.backgroundColor = "yellow";

// GREEN
const green = document.getElementById("green");
green.innerHTML = "GREEN";
green.style.backgroundColor = "green";

// INDIGO
const indigo = document.getElementById("indigo");
indigo.innerHTML = "INDIGO";
indigo.style.backgroundColor = "indigo";

// PURPLE
const violet = document.getElementById("violet");
violet.innerHTML = "VIOLET";
violet.style.backgroundColor = "violet";
