//Grid
let grid
let gridSquare = 25
let row = 20
let column = 20
let context

//Function to generate grid
window.onload = () => {
    grid = document.getElementById("grid")
    grid.height = row * gridSquare
    grid.width = column * gridSquare
    //Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    context = grid.getContext("2d")
    treatPosition()
    
    update()
}
//Load window

/* Sources: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
            https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect */
//Function to keep redrawing
function update(){
    context.fillStyle = "black"
    context.fillRect(0, 0, grid.width, grid.height)

    context.fillStyle = "Lime"
    context.fillRect(snakeX, snakeY, gridSquare, gridSquare)

    context.fillStyle ="red"
    context.fillRect(treatX, treatY, gridSquare, gridSquare)
}

//Generating the snake
let snakeX = gridSquare * 5;
let snakeY = gridSquare * 5;

//Declaring snake treats
let treatX
let treatY 

//function to randomize treat position
function treatPosition(){
    treatX = Math.floor(Math.random() * column) * gridSquare
    treatY = Math.floor(Math.random() * row) * gridSquare
}
