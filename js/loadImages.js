
document.addEventListener('DOMContentLoaded', () => {

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const sciss = document.getElementById('scissors');
    const initialState = document.getElementById('none-play');
    
    const constainer = document.querySelector('.display')
    const message = document.querySelector('.message')
    const button_close = document.querySelector('.btn-close')
    const dTitle = document.querySelector('.d-title')


    const imgs = ['img/piedra.png', 'img/papel.png', 'img/tijera.png'];
    
    
    function getRandomNumber(listImages) {
        let randomed = Math.floor(Math.random()*3);
        initialState.src = listImages[randomed];
        return randomed;
    }
    
    function initChanges(listImages) {
        let indexes = 0;
        const interval = setInterval(()=> {
            initialState.src = listImages[indexes];
            indexes = (indexes + 1) % listImages.length;
        }, 100);
        return interval;
    }
    
    function changeImages(play) {
        const interval = initChanges(imgs);
        setPlay(interval, play, imgs);
    }
    
    function setPlay(interval, play, listImages) {
        setTimeout(()=> {
            clearInterval(interval);
            const randNum = getRandomNumber(listImages);
        
            if (play == 0) { // Rock
                if (play < randNum && play != randNum && randNum == 1) {
                    showDisplayLoss('Papel cubre a Roca');
                    console.log('Has perdido');
                }

                else if (play == randNum){
                    console.log('has empatado');
                } else{
                    showDisplayWin('Roca aplaste Tijera')
                }
            }
            
            else if (play == 1) { // Paper
                if (play < randNum && play != randNum && randNum == 2) {
                    showDisplayLoss('Tijera corta Papel')
                    console.log('Has perdido');
                }

                else if (play == randNum) {
                    console.log('has empatado');
                } else{
                    showDisplayWin('Papel cubre Roca')
                }
            }

            else if (play >= 2) { // Scissors
                if (play > randNum && play != randNum && randNum == 0) {
                    showDisplayLoss('Roca aplasta Tijera')
                    console.log('Has perdido');
                }

                else if (play == randNum) {
                    console.log('has empatado');
                } else {
                    showDisplayWin('Tijea corta Papel')
                }
            }
        },1300);
    }

    function showDisplayLoss(alert) {
        constainer.style.display = 'flex'
        dTitle.textContent = 'Qué mala suerte'
        message.innerText = `Has perdido, ${alert}`

        button_close.addEventListener('click', () => {
            constainer.style.display = 'none'
        })
    }

    function showDisplayWin(alert) {
        constainer.style.display = 'flex'
        dTitle.textContent = 'Felicitaciones'
        message.innerText = `¡Ganaste!, ${alert}`

        button_close.addEventListener('click', () => {
            constainer.style.display = 'none'
        })
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

})  