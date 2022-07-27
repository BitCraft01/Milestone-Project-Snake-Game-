function movementChange(e){
    if(e.code === "ArrowUp" && speedY != 1){
        speedX = 0
        speedY = -1
    }else if(e.code === "ArrowDown" && speedY != -1){
        speedX = 0
        speedY = 1
    }else if(e.code === "ArrowLeft" && speedX != 1){
        speedX = -1
        speedY = 0
    }else if(e.code === "ArrowRight" && speedX != -1){
        speedX = 1
        speedY = 0
    }else if(gOver.style.display === "block"){
        speedX = 0
        speedY = 0
    }
}