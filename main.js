const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = [
"","","","","","","","",""
];

function createBoard() {
    startCells.forEach((cell,index) => {
        document.createElement('div') =document.createElement('div');
        cellElement.classList.add('square');
        gameBoard.append(cellElement);
    })
}
createBoard();

//left off at 9:00. There is a problem with the border box, check CSS