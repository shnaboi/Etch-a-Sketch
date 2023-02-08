let color = 'black';
let sizeSlider = document.getElementById("size-slider");
let sizeHTML = document.getElementById("sizeHTML");

sizeHTML.innerHTML = sizeSlider.value;

function createBoard(size) {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let pixel = document.createElement("div");
        pixel.addEventListener("mouseover", fillPixel);
        pixel.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", pixel);
    }
}

sizeSlider.oninput = function() {
    sizeHTML.innerHTML = this.value;
    createBoard(this.value);
}

function fillPixel() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(userInput) {
    color = userInput;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.remove());
    createBoard(sizeSlider.value);
}

// setup mouse click > thicker "stroke"
document.querySelector(".board").addEventListener("click", (e) => {
    console.log('test');
})

createBoard(64);

// change color to draw with
// hold click makes bigger stroke
// make a game to try and color x% of the canvas in x seconds