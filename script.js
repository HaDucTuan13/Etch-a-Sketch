const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");

function createGrid (size){
    grid.innerHTML="";
    const gridWidth=640;
    const gridHeight=640;
    const squareWidth=gridWidth/size;
    const squareHeight=gridHeight/size;
    for(let i=0;i<size*size;i++){
        const square = document.createElement("div");
        square.style.width=`${squareWidth}px`;
        square.style.height=`${squareHeight}px`;
        square.classList.add("square");
        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor="pink";
        });
        grid.appendChild(square);
    }
}

createGrid(16);

resetBtn.addEventListener("click",() => {
    let newSize = parseInt(prompt("Enter number of squares per side (Max is 100)","16"));
    if(Number.isNaN(newSize)||newSize<0 ||newSize>100){
        alert("Invalid input! please enter a number between 0 and 100 only");
        return;
    }
    createGrid(newSize);
});

// for (let i = 0; i < 16 * 16; i++) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     square.addEventListener("mouseenter",()=>{
//         square.style.backgroundColor="pink";
//     });
//     grid.appendChild(square);
// }

// const grid = document.querySelector("#grid");
// let isDrawing = false;

// // Khi nhấn chuột trái xuống trong grid
// grid.addEventListener("mousedown", (e) => {
//   if (e.button === 0) { // 0 = chuột trái
//     isDrawing = true;
//   }
// });

// // Khi nhả chuột (ở bất kỳ đâu trên trang)
// document.addEventListener("mouseup", () => {
//   isDrawing = false;
// });

// for (let i = 0; i < 16 * 16; i++) {
//   const square = document.createElement("div");
//   square.classList.add("square");

// //   // Nếu rê chuột qua ô trong lúc đang giữ chuột trái
//   square.addEventListener("mouseenter", () => {
//     if (isDrawing) {
//       square.style.backgroundColor = "lightblue";
//     }
//   });

//   // Nếu click trực tiếp vào ô
//   square.addEventListener("mousedown", () => {
//     square.style.backgroundColor = "lightblue";
//   });

//   grid.appendChild(square);
// }
