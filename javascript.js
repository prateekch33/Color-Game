var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var resdes=document.querySelector("#resdes");
var count=0;

for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
    count=0;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resdes.textContent="Yeah! Lets Start the Game 😊"
}

resetBtn.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    count=0;
    resdes.textContent="Yeah! Lets Start the Game 😊"
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
resdes.textContent="Yeah! Lets Start the Game 😊"
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!  See the Result Below 👇";            
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);            
            h1.style.backgroundColor = clickedColor;
            resdes.textContent="In "+(count+1)+" try you WON the game.!!🥳";
        }
        else {
            count++;
            this.style.backgroundColor = "#2c2b2b";
            messageDisplay.textContent = "Try Again"; 
            resdes.textContent="No Problem!! Try Again!! 🙂"          
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}