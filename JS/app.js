  const gridSize = 10; 
    const grid = document.getElementById('battleship-grid');

function createGrid() {
    for (let row = 0; row < gridSize; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < gridSize; col++) {
            const td = document.createElement('td');
            td.dataset.row = row; 
            td.dataset.col = col; 
            td.addEventListener('click', handleCellClick); // Add click handler
            tr.appendChild(td);
        }
        grid.appendChild(tr);
    }
}
function handleCellClick(event) {
    const cell = event.target;
    cell.classList.add('hit'); 
}
function handleCellClick(event) {
    const cell = event.target;
    cell.classList.add('miss'); 
}

createGrid(); 





// const enemyGrid = document.getElementById(enemyGrid);

// let enemyArray=[F1,F2,F3,F4,G1,G2,G3,G4,H1,H2,H3,H4,I1,I2,I3,I4,]
// let replacements =[ship1, ship2];
// function shuffleAndReplace(array, ships) {
//   let enemyGrid=[];
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

  
//   for (const index in replacements) {
//     if (array[index] !== undefined) { 
//         array[index] = replacements[index];
//     } else {
//       console.warn(`Index ${index} out of range in original array`);
//     }
//   }
//   if(item===ship1 || item===ship2){
//     let hit;
//     return hit;
//     console.log(`${hit}`);
//   } else console.log(`${miss}`);
  
  // return array;
// }

// did not work Why?****************************
//2 d array
const playerGrid = document.getElementById(enemyGrid);
let playerArray=[A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,]
playerArray=[]
const player = document.getElementById(playerGrid);
const rows = 4;
const columns = 4;
function createArray(row, col){
const arrayPlayer = [];
for (let i=0; i<row; i++){
    arrayPlayer [i] = [];
    for (let j=0; j<col; j++){
        arrayPlayer[i][j] = i * j + 1;
    }
}
}
// ************did not work Why??????
  function makeBoard(){
    let gridContainer = document.getElementById(grid-container);
    for (let i=0; i<4; i++){
    for(let j=0; j<4; j++){
    const gridItem = document.getElementById("item");
    gridItem.classList.add('grid-item')
    gridItem.textContent = arrayPlayer[i][j];
    gridContainer.appendChild(gridItem)
}
}
  }

