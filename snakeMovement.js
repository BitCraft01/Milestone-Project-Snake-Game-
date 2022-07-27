function movementChange(e){
    if(e.code === "ArrowUp"){
        speedX = 0
        speedY = -1
    }else if(e.code === "ArrowDown"){
        speedX = 0
        speedY = 1
    }else if(e.code === "ArrowLeft"){
        speedX = -1
        speedY = 0
    }else if(e.code === "ArrowRight"){
        speedX = 1
        speedY = 0
    }
}