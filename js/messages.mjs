const loss = document.getElementById('message-loss');
const win = document.getElementById('message-win');
const close = document.getElementById('close');
const closes = document.getElementById('closes');
const mess = document.getElementById('message')
const winm= document.getElementById('messagew')

export function displays(action, bg) {

    loss.style.display = 'flex';
    loss.style.backgroundColor = bg;
    mess.innerHTML = `${action}, intentalo nuevamente :(`;
    close.addEventListener('click', ()=> {
        loss.style.display = 'none';
    })
}

export function displaysWin(action, bg) {

    win.style.display = 'flex';
    win.style.backgroundColor = bg;
    winm.innerHTML = `${action}, Felicitaciones :)`;
    closes.addEventListener('click', ()=> {
        win.style.display = 'none';
    })
}