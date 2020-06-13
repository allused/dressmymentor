
import {dressUp} from './getimages.js'
import {Clothes} from "./clothes.js";


let fcanvas = document.querySelector("canvas");


//current Flex/Second body parts
let flexBody = Clothes.currentSBody;

//current First Body parts
let prevBody = Clothes.currentBody;
flexDance();

//Clear canvas
//You have to call this before draw a new body, to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, fcanvas.width, fcanvas.height);


}

//Probably useless function, TODO when have time delete and rewrite drawFullBody with drawThings()
function drawImage(image, props) {
    drawThings(image, props)
}

//This function draws the whole body, you just have to pass the arguments, /flex not used yet
function drawFullBody(headImage, headPos, bodyImage, bodyPos, bottomImage, bottomPos, flex) {

        if (bottomImage !== undefined && bodyImage.src.includes('adidas')) {
            setTimeout(() => drawImage(bottomImage, bottomPos), 68);
        } else {
            setTimeout(() => drawImage(bottomImage, bottomPos), 60);
        }


    setTimeout(() => drawImage(bodyImage, bodyPos), 62);
    setTimeout(() => drawImage(headImage, headPos), 65);


}

//Simple drawFullBody function with clear canvas
export function bodyDraw(bodyImage, bodyPos, headImage, headPos, bottomImage, bottomPos, flex) {
    clearCanvas()
    drawFullBody(headImage, headPos, bodyImage, bodyPos, bottomImage, bottomPos, flex)
}


//Mirror context, NOT DONE YET TODO
function mirrorContext() {
    ctx.save();
    ctx.scale(-1, 1)
    //draw image here or after
    //then ctx.restore()

}

//For unmirror context, NOT DONE TODO
function unMirrorContext() {
    ctx.scale(1, 1)
}


let ctx = fcanvas.getContext('2d');
//for canvas not to stretch it
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//Object to store mouse position
let mouse = {
    'x': undefined,
    'y': undefined
}

/*
//DEMO, not good yet, Event Listener for all the canvas objects which in the contAiner array
window.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    for (let i = 0; i < contAiner.length; i++) { // check whether:
        if (mouse.x > contAiner[i][0]            // mouse x between x and x + width
            && mouse.x < contAiner[i][0] + contAiner[i][2]
            && mouse.y > contAiner[i][1]            // mouse y between y and y + height
            && mouse.y < contAiner[i][1] + contAiner[i][3]) {


        }
    }
})
*/

//Handle the FLEX button
function flexDance() {
    const flexButton = document.querySelector('#flex');
    let flex = true;
    flexButton.addEventListener('click', event => {
        //Below is the Flex Body change/animations
        if (flexBody.accessories !== undefined) {
            if (flexBody.dress !== undefined) {
                bodyDraw(flexBody.dress, secondBodyPosDress, flexBody.accessories, headPos)
            } else {
                bodyDraw(flexBody.top, sBodyTopPos, flexBody.accessories, headPos, flexBody.bottom, sBodyBottomPos)
            }
        } else {
            if (flexBody.dress !== undefined) {
                bodyDraw(flexBody.dress, secondBodyPosDress, flexBody.head, headPos)
            } else {
                bodyDraw(flexBody.top, sBodyTopPos, flexBody.head, headPos, flexBody.bottom, sBodyBottomPos)
            }
        }
        //Below is switching back to the firstBody after X sec (which was before the flex body)
        setTimeout(()=>{
            if (prevBody.accessories !== undefined) {
            if (prevBody.dress !== undefined) {
                bodyDraw(prevBody.dress, firstBodyPosDress, prevBody.accessories, headPos)
            } else {
                bodyDraw(prevBody.top, fBodyTopPos, prevBody.accessories, headPos, prevBody.bottom, fBodyBottompPos)
            }
        } else {
            if (prevBody.dress !== undefined) {
                bodyDraw(prevBody.dress, firstBodyPosDress, prevBody.head, headPos)
            } else {
                bodyDraw(prevBody.top, fBodyTopPos, prevBody.head, headPos, prevBody.bottom, fBodyBottompPos)
            }
        }
        },4000)
    })
}


//Draw basic image using the given image,coordinates(x,y),sizes(dx,dy)
function drawThings(image, props) {
    let posX = props.x;
    let posY = props.y;
    let posDx = props.dx;
    let posDy = props.dy;
    ctx.drawImage(image, posX, posY, posDx, posDy);
}



//Dress position for first dress
let firstBodyPosDress = {
    'x': 155,
    'y': 230,
    'dx': 1400,
    'dy': 700
}



//Dress position for second dress
let secondBodyPosDress = {
    'x': 220,
    'y': 90,
    'dx': 1250,
    'dy': 800
}

//Head positions
let headPos = {
    'x': 720,
    'y': 100,
    'dx': 250,
    'dy': 150
}

//First body top pos
let fBodyTopPos = {
    'x': 160,
    'y': 219,

    'dx': 1400,
    'dy': 250
}
//First Body bottom pos
let fBodyBottompPos = {
    'x': 150,
    'y': 448,
    'dx': 1400,
    'dy': 400
}

//Second Body Top parts Pos
let sBodyTopPos = {
    'x': 368,
    'y': 110,
    'dx': 950,
    'dy': 350
}

//Second Body Bottom parts Pos
let sBodyBottomPos = {
    'x': 360,
    'y': 418,
    'dx': 970,
    'dy': 420
}

//This object contains all the firstBody positions to export/hand it to clothes.js
export const fBodyPositions = {
    'top': fBodyTopPos,
    'bottom': fBodyBottompPos,
    'dress': firstBodyPosDress,
    'head': headPos
}

//Draw the basic image when the page loads
drawFullBody(prevBody.head, headPos, prevBody.top, fBodyTopPos,prevBody.bottom, fBodyBottompPos );

/*
//Makes an array from the bodies, head, to pass it to the container TODO
let firstBodyArray = [firstBodyPos.x, firstBodyPos.y, firstBodyPos.dx, firstBodyPos.dy];
let secondBodyArray = [secondBodyPos.x, secondBodyPos.y, secondBodyPos.dx, secondBodyPos.dy];
let headArray = [headPos.x, headPos.y, headPos.dx, headPos.dy];

//Makes an array from all the positions, to pass it to the eventListener, to interact with  all the canvas objects TODO
let contAiner = [firstBodyArray, secondBodyArray, headArray];
*/

//Clothes Listeners, buttons,background
Clothes.initBg()
Clothes.addButtonListeners()
Clothes.backgroundListeners()



