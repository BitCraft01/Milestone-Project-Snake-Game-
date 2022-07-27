//Grid
let grid
let gridSquare = 25
let row = 20
let column = 20
let context

const gOver = document.querySelector("#gOver");
console.log(gOver);
const gOverScore = document.querySelector("#gOverScore")



let score = 0
function scoreCount(){
    score++
    const scoreNum = document.querySelector("#scoreNum")
    scoreNum.innerHTML = score
}


//Function to generate grid
window.onload = () => {
    grid = document.getElementById("grid")
    grid.height = row * gridSquare
    grid.width = column * gridSquare
    //Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    context = grid.getContext("2d")
    treatPosition()
    document.addEventListener("keyup", movementChange)
    setInterval(update, 2000/15)
}
//Load window

/* Sources: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
            https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect */
//Function to keep redrawing the canvas
function update(){
    if(gOver.style.display == "block"){
        return;
    }
    context.fillStyle = "black"
    context.fillRect(0, 0, grid.width, grid.height)

    context.fillStyle ="red"
    context.fillRect(treatX, treatY, gridSquare, gridSquare)
    if(snakeX === treatX && snakeY === treatY){
        
        snakeBody.push([treatX, treatY])
        
        treatPosition()
        scoreCount()
        
    }
    for(let i = snakeBody.length - 1; i > 0; i--) {
        
        snakeBody[i] = snakeBody[i - 1];
        
    }if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY]
        
    }

    context.fillStyle = "Lime"
    snakeX += speedX * gridSquare
    snakeY += speedY * gridSquare
    context.fillRect(snakeX, snakeY, gridSquare, gridSquare)
    for(let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], gridSquare, gridSquare)
    }

    //Collision detection
    if(snakeX < 0 || snakeX > column * gridSquare || snakeY < 0 || snakeY > row * gridSquare){
        gOver.style.display ="block"
        gOverScore.innerHTML = score;
        
    }
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){
            gOver.style.display = "block"
            gOverScore.innerHTML = score;
        }
    }
}

//Generating the snake
let snakeBody = []
let snakeX = gridSquare * 5;
let snakeY = gridSquare * 5;

//Declaring snake treats
let treatX
let treatY 

let speedX = 0
let speedY = 0

//function to randomize treat position
function treatPosition(){
    
    treatX = Math.floor(Math.random() * column) * gridSquare
    treatY = Math.floor(Math.random() * row) * gridSquare
    
}
