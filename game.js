import Character from './Character.js'
import Item from "./Item.js"
import {characterImage} from "./Character.js";
import {characterImageWalkLeft} from "./Character.js";
import {characterImageWalkRight} from "./Character.js";
const backgroundImage = new Image()

characterImage.src = "assets/idle.png"
backgroundImage.src = "assets/background.png"
const appleImage = new Image()
appleImage.src = "assets/apple.png"

const character = new Character({
    img: characterImage,
    pos: {
        x: 150,
        y: 485
    }
})


const fruit = new Item({
    img: appleImage,
    pos: {
        x: 150,
        y: 285
    }
})

const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');
let isNotOver = true



const cursor = {
    x: 0,
    y: 0
}


const key = {

    ArrowRight: {pressed: false},
    ArrowLeft: {pressed: false}
}

const backgroundMusic = new Audio("/assets/Monkeys Spinning Monkeys (Kevin MacLeod) - Background Music (HD).mp3")


window.addEventListener("keydown", function (evt) {


    if (evt.key === 'ArrowRight') {
        key.ArrowRight.pressed = true


}
    if (evt.key==='ArrowLeft')
     key.ArrowLeft.pressed = true


})

window.addEventListener("keyup", function (evt) {

    if (evt.key ==='ArrowRight') {
        key.ArrowRight.pressed = false

    }


    if (evt.key==='ArrowLeft')
        key.ArrowLeft.pressed = false

})

canvas.addEventListener("click", function (evt) {
    let gameRect = canvas.getBoundingClientRect()
    cursor.x = evt.clientX - gameRect.left
    cursor.y = evt.clientY - gameRect.top
    if (cursor.x >= 540 && cursor.x <= 660 && cursor.y >= 375 && cursor.y <= 425) {
        ctx.clearRect(540, 375, 120, 50)
        game()
    }



})
function checkCollision(obj, ctx){
    if (obj.x>=ctx.x){
        console.log("kolizja")
    }
    else {
        console.log("brak kolizji")
    }
}

function game() {
        animate()
        backgroundMusic.loop=true
        backgroundMusic.play()





}



function showStartButton(){

    ctx.fillStyle="brown"
    ctx.fillRect(540, 375, 120, 50)
    ctx.font= "28px Arial"
    ctx.fillStyle = "#FFD38D"
    ctx.fillText("START", 555, 410)
}


function animate(){

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fruit.draw(ctx)
    character.draw(ctx, key)
  //  character.move(ctx)

    requestAnimationFrame(animate)
}

showStartButton()



