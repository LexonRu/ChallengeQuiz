alert("The quiz start!");
var track = 0;
var qOne = prompt("Which color is in the background?");
 if (qOne === "white") {
   var track = track + 1;
 } else {
   alert("Answer is wrong!");
 }
 var qTwo = prompt("Who is the president of Russia?");
 if (qTwo === "Putin" || qTwo === "putin") {
   track +=  1;
 } else {
   alert("Answer is wrong!");
 }
var qTree = prompt("1+1= ? ");
if (parseInt(qTree) === 2) {
  track = track + 1;
} else {
  alert("Answer is wrong!");
}
var qFour = prompt("1+3= ?");
if (parseInt(qFour) === 4) {
  track = track + 1;
} else {
  alert("Answer is wrong!");
}
var qFive = prompt("Six plus six will be?");
if (parseInt(qFive) === 12) {
  track = track + 1;
} else {
  alert("Answer is wrong Really Wrong!!");
}

if (track === 5) {
  document.write("Awesome! You are really good in math! Corerect answers - " + track);
  document.write("<br> You gain the gold crown");
} else if (track === 3 || track === 4) {
  document.write("Nice! You have " + track + " correct answers");
  document.write("<br> You gain the silver crown");
} else if (track === 1 || track === 2) {
  document.write("Go better next time! You have " + track + " correct answers");
  document.write("<br> you gain the bronze crown, if you are not a gay");
} else {
  document.write("you are fucking loser!");
}
