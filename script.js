let color = 'black';
let sizeSlider = document.getElementById("size-slider");
let sizeHTML = document.getElementById("sizeHTML");

sizeHTML.innerHTML = sizeSlider.value;

function createBoard(size) {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let pixel = document.createElement("div");
        pixel.addEventListener("mouseover", fillPixel);
        pixel.style.backgroundColor = "gray";
        board.insertAdjacentElement("beforeend", pixel);
    }
}

sizeSlider.oninput = function() {
    sizeHTML.innerHTML = this.value;
    createBoard(this.value);
    console.log(this.value);
}

createBoard(64);

function fillPixel() {
    this.style.backgroundColor = color;
}

function changeColor(userInput) {
    color = userInput;
}

function resetBoard() {
    let board = document.querySelector(".board");
    let grid = board.querySelectorAll("div");
    grid.forEach((div) => div.remove());
}

// change color to draw with / erase with
// change size of coloring board
// change background color