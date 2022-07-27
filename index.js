let snakePosition = [168, 169, 170, 171]
let foodPosition = 100 
//Assigning the squares
const squares = document.querySelectorAll(".grid .square");


//Apple creation
const foodSquare = squares[foodPosition]

foodSquare.style.cssText = 
"background-color: green";
"border-radius: 50%";


//Snake creation
for(let i of snakePosition) {
    const snakePiece = squares[i];
    snakePiece.style.backgroundColor = "gold";
}

//User input

let movements = []

window.addEventListener("keydown", function (event) {
    if(!["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(event.key))
    return

event.preventDefault()
    if(event.key = "ArrwoLeft") {
        movements.push("left")
        return
    }
    
    if(event.key = "ArrowRight") {
        movements.push("right")
        return
    }

    if (event.key = "ArrowDown") {
        movements.push("down")
        return
    }

    if(event.key = "ArrowUp"){
        movements.push("up")
        return
    }


})
