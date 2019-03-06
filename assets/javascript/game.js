var targetNumber = Math.floor(Math.random() * 101 + 19);
$("#number-to-guess").text(targetNumber);

var num1 = Math.floor(Math.random() * 11 + 1)
console.log(num1)
var num2 = Math.floor(Math.random() * 11 + 1)
console.log(num2)
var num3 = Math.floor(Math.random() * 11 + 1)
console.log(num3)
var num4 = Math.floor(Math.random() * 11 + 1)
console.log(num4)

var totalScore = 0;
var wins = 0;
var losses = 0;

$(".totalScore").text(totalScore)
$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset() {
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#number-to-guess").text(targetNumber);

    num1 = Math.floor(Math.random() * 11 + 1)
    console.log(num1)
    num2 = Math.floor(Math.random() * 11 + 1)
    console.log(num2)
    num3 = Math.floor(Math.random() * 11 + 1)
    console.log(num3)
    num4 = Math.floor(Math.random() * 11 + 1)
    console.log(num4)

    totalScore = 0;
    $(".totalScore").text(totalScore)
}

$("#green").on("click", function () {
    totalScore = totalScore + num1;
    $(".totalScore").text(totalScore);
    console.log(totalScore)
    if (totalScore == targetNumber) {
        win();
    } else if (totalScore > targetNumber) {
        lose();
    }
});

$("#blue").on("click", function () {
    totalScore = totalScore + num2;
    $(".totalScore").text(totalScore);
    console.log(totalScore)
    if (totalScore === targetNumber) {
        win();
    } else if (totalScore > targetNumber) {
        lose();
    }
});
$("#red").on("click", function () {
    totalScore = totalScore + num3;
    $(".totalScore").text(totalScore);
    console.log(totalScore)
    if (totalScore == targetNumber) {
        win();
    } else if (totalScore > targetNumber) {
        lose();
    }
});
$("#purple").on("click", function () {
    totalScore = totalScore + num4;
    $(".totalScore").text(totalScore);
    console.log(totalScore)
    if (totalScore == targetNumber) {
        win();
    } else if (totalScore > targetNumber) {
        lose();
    }
});

function win() {
    alert("You Won!");
    wins++;
    $("#numberWins").text(wins)
    reset();
}

function lose() {
    alert("You Lose!");
    losses++;
    $("#numberLosses").text(losses)
    reset();
}