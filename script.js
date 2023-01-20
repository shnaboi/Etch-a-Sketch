let color = 'black';
// let size = user input

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

createBoard(64);

function fillPixel() {

}

// fillPixel() -> to color the grid
// change color to draw with / erase with
// reset what we've colored
// change size of coloring board