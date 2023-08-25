import { displays, displaysWin } from "./messages.mjs";


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const sciss = document.getElementById('scissors');
const machine = document.getElementById('machine');
const imgs = ['img/piedra.png', 'img/papel.png', 'img/tijera.png'];



function setRandomNumber(listImages) {
    let randomed = Math.floor(Math.random()*3);
    machine.src = listImages[randomed];
    return randomed;
}

function initChanges(listImages) {
    let indexes = 0;
    const interval = setInterval(()=> {
        machine.src = listImages[indexes];
        indexes = (indexes + 1) % listImages.length;
    }, 100);
    return interval;
}

function stopChanges(interval, play, listImages) {
    setTimeout(()=> {
        clearInterval(interval);
        const randNum = setRandomNumber(listImages);
    
        if (play == 0) { // Rock
            if (play < randNum && play != randNum && randNum == 1) {
                displays('Papel cubre Roca', '#0f101a');
                console.log('Has perdido');
            }
            else if (play == randNum){
                console.log('has empatado');
            }else{
                console.log('has ganado');
                displaysWin('Roca aplaste Tijera', 'white')
            }
        }
        else if (play == 1) { // Paper
            if (play < randNum && play != randNum && randNum == 2) {
                displays('Tijera corta Papel', '#0f101a')
                console.log('Has perdido');
            }
            else if (play == randNum) {
                console.log('has empatado');
            }else{
                displaysWin('Papel cubre Roca', 'white')
                console.log('has ganado');
            }
        }
        else if (play >= 2) { // Scissors
            if (play > randNum && play != randNum && randNum == 0) {
                displays('Piedra aplasta Tijeras', '#0f101a')
                console.log('Has perdido');
            }
            else if (play == randNum) {
                console.log('has empatado');
            }else {
                displaysWin('Tijera corta Papel', 'white')
                console.log('has ganado');
            }
        }
    },1300);
}

function changeImages(play) {
    const interval = initChanges(imgs);
    stopChanges(interval, play, imgs);
}

rock.addEventListener('click', ()=>{
    changeImages(0);
})

paper.addEventListener('click', ()=> {
    changeImages(1);
})

sciss.addEventListener('click', ()=> {
    changeImages(2);
})
