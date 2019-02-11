// variables
var crystalYellow = tallyOneTwelve();
var crystalBlue = tallyOneTwelve();
var crystalSpike = tallyOneTwelve();
var crystalSputnik = tallyOneTwelve();
console.log("MY yellow VALUES: " + crystalYellow);
console.log("MY blue VALUES: " + crystalBlue);
console.log("MY sputnik VALUES: " + crystalSputnik);
console.log("MY spike VALUES: " + crystalSpike);

// random number start of the game between 19-120
// tally = 0 at start

var compRandomNumber = Math.floor(Math.random() * (120 - 9 + 1) + 9);
$("#starterNumber").replaceWith(compRandomNumber);
console.log("THIS IS MY COMP NUM: " + compRandomNumber);
var compTallyNumber = 0;
$("#tally").replaceWith(compTallyNumber);

$("#yellow").on("click", function() {
  compTallyNumber = compTallyNumber + crystalYellow;
  console.log("yellow " + compTallyNumber);
  return compTallyNumber;
});

$("#blue").on("click", function() {
  compTallyNumber = compTallyNumber + crystalBlue;
  console.log("blue " + compTallyNumber);
  return compTallyNumber;
});

$("#sputnik").on("click", function() {
  console.log("sputnik");
});

$("#spike").on("click", function() {
  console.log("spike");
});

function tallyOneTwelve() {
  //   yellow = Math.ceil(Math.random() * 12);
  //   blue = Math.ceil(Math.random() * 12);
  //   sputnik = Math.ceil(Math.random() * 12);
  //   spike = Math.ceil(Math.random() * 12);
  //
  var myRandNum = Math.ceil(Math.random() * 12);
  return myRandNum;
}

//testing
function hello() {
  console.log("HELLO WORLD!");
}
