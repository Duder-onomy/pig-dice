//business logic

function Player(name) {
  this.name = name;
  this.tempScore=0;
  this.totalScore=0;
}
Player.prototype.Pass= function(tempScore) {
  this.totalScore = this.totalScore + tempScore;
if (activePlayer===player1) {
activePlayer=player2
} else {activePlayer=player1}
}
//
// Player.prototype.totalScore = function (rolled) {
//   this.score = this.score + rolled;
// }
// // if first roll do this
// function Firstroll(rolled) {
//   this.rolled = rolled;
// }
// console.log(Firstroll);
// //if subsequent roll do this
// Firstroll.prototype.tempScore = function(rolled) {
//   this.rolled = this.rolled+rolled;
// }




//method
rollit = function (){
  return Math.floor((Math.random() * 6) + 1);
}

$(document).ready(function() {
  tempScore=0;
  $('#players').submit(function() {
    event.preventDefault();
    name1=$("#name1").val();
    name2=$("#name2").val();
    player1=new Player(name1);
    player2=new Player(name2);
    $("#players").addClass("hidden");
    $("#player1").removeClass("hidden");
});

$("#rollem").click(function() {
rolled=rollit();
if(rolled===1){
  tempScore=0

} else {
  tempScore=tempScore+rolled
  console.log(tempScore);
  console.log(player1);
}

});
$("#rollem2").click(function() {
rolled=rollit();
if(rolled===1){
  tempScore=0

} else {
  tempScore=tempScore+rolled
  console.log(tempScore);
  console.log(player2);
}

});
rolled=rollit();
console.log(tempScore);


$(".pass").click(function() {
$("#player1").toggleClass("hidden");
$("#player2").toggleClass("hidden");
console.log(player1);
console.log(player2);
});
});



//user interface logic
// $(document).ready(function() {
//   $('#players').submit(function() {
//     event.preventDefault();
//     rolled=rollit();
//     name1=$("#name1").val();
//     player1=new Player(name);
//     console.log(rolled);
//     $('#dice').append("<p>" +rolled+ "</p>");
//   });

//   name1= name1.val();
//   name2=name2.val();
// var player1= new player(name1);
// var player2= new player(name2);
// })
