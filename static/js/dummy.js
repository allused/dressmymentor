//import the getimages js json, to get the images instead of img tags
import {dressUp} from './getimages.js'
import {Clothes} from "./clothes.js";

// You can choose between the two basic bodies
let fcanvas = document.querySelector("canvas");
const firstBody = dressUp.firstBody();
const secondBody = dressUp.secondBody();
const laciHead = dressUp.laciHead();
const gaborHead = dressUp.gaborHead();
const benceHead = dressUp.benceHead();
const adamHead = dressUp.adamHead();







//You have to call this before draw a new body, to clear the canves
function clearCanvas() {
    ctx.clearRect(0, 0, fcanvas.width, fcanvas.height);


}


function drawImage(image, props) {
    setTimeout(() => drawThings(image, props), 20);
}

//This function draws the whole body, you just have to pass the properties
function drawFullBody(headImage, headPos, bodyImage, bodyPos, bottomImage, bottomPos) {
    ctx.save();
    setTimeout(() => drawImage(bodyImage, bodyPos), 30);
    setTimeout(() => drawImage(headImage, headPos), 35);
    if (bottomImage != undefined) {
        if (bodyImage.src.includes('adidas') == true) {
            setTimeout(() => drawImage(bottomImage, bottomPos), 32);
        } else {
            setTimeout(() => drawImage(bottomImage, bottomPos), 28);
        }

    };
    ctx.restore();
}

function dance() {
    clearCanvas()
    ctx.save();
    ctx.translate(fcanvas.width, 0);
    ctx.scale(-1, 1);
    drawFullBody(adamHead, headPos, dressUp.sBody1Dress(), secondBodyPosDress)
    ctx.restore();

}

//Mirror context, NOT DONE YET TODO

function mirrorContext(){
    ctx.save();
    ctx.scale(-1,1)

}

//For unmirror context, NOT DONE TODO
function unMirrorContext() {
    ctx.scale(1, 1)
}


let ctx = fcanvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let mouse = {
    'x': undefined,
    'y': undefined
}


//DEMO, not good yet, plan to make a small animations
window.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;


    for (let i = 0; i < contAiner.length; i++) { // check whether:
        if (mouse.x > contAiner[i][0]            // mouse x between x and x + width
            && mouse.x < contAiner[i][0] + contAiner[i][2]
            && mouse.y > contAiner[i][1]            // mouse y between y and y + height
            && mouse.y < contAiner[i][1] + contAiner[i][3]) {

            console.log('here')
            // if (i == 0) {
            //     console.log(i)
            //     clearCanvas();
            //     //drawFullBody(adamHead, headPos, dressUp.sBody1Top(), sBodyTopPos, dressUp.sBody2Pants(), sBodyBottomPos)
            //     drawFullBody(adamHead, headPos, dressUp.sBody1Dress(), secondBodyPosDress);
            //     setTimeout(()=>dance(), 3000);
            //
            // }

        }
    }

})


//Draw basic image using the given coordinates,sizes
function drawThings(image, props) {
    let posX = props.x;
    let posY = props.y;
    let posDx = props.dx;
    let posDy = props.dy;
    ctx.drawImage(image, posX, posY, posDx, posDy);
}

//The first body position, size DO NOT CHANGE
let firstBodyPos = {
    'x': 80,
    'y': 200,
    'dx': 220,
    'dy': 380
}

let firstBodyPosDress = {
    'x': 15,
    'y': 210,
    'dx': 340,
    'dy': 450
}

//The second body position, size DO NOT CHANGE
let secondBodyPos = {
    'x': 55,
    'y': 138,
    'dx': 265,
    'dy': 410
}

let secondBodyPosDress = {
    'x': 36,
    'y': 125,
    'dx': 300,
    'dy': 500
}

//this is for lacis head, probably works with the others too
let headPos = {
    'x': 152,
    'y': 128,
    'dx': 70,
    'dy': 90
}

//TODO
let fBodyTopPos = {
    'x': 34,
    'y': 205,
    'dx': 310,
    'dy': 145
}

let fBodyBottompPos = {
    'x': 4,
    'y': 345,
    'dx': 370,
    'dy': 250
}

//Second Body Top parts Pos
let sBodyTopPos = {
    'x': 75,
    'y': 115,
    'dx': 230,
    'dy': 265
}

//Second Body Bottom parts Pos
let sBodyBottomPos = {
    'x': 71,
    'y': 345,
    'dx': 240,
    'dy': 250
}

//setTimeout(()=>drawThings(secondBody, secBodyPos), 30);
//drawFullBody(adamHead,headPos, dressUp.fBody1Top(),fBodyTopPos, dressUp.fBody1Pants(), fBodyBottompPos);
drawFullBody(adamHead, headPos, dressUp.firstBody(), firstBodyPos);

//Makes an array from the bodies, head, to pass it to the container
let firstBodyArray = [firstBodyPos.x, firstBodyPos.y, firstBodyPos.dx, firstBodyPos.dy];
let secondBodyArray = [secondBodyPos.x, secondBodyPos.y, secondBodyPos.dx, secondBodyPos.dy];
let headArray = [headPos.x, headPos.y, headPos.dx, headPos.dy];

//Makes an array from all the positions, to pass it to the eventListener, to get all the canvas objects
let contAiner = [firstBodyArray, secondBodyArray, headArray];

//Clothes things


Clothes.addButtonListeners()