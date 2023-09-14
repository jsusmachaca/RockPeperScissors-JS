document.addEventListener('DOMContentLoaded', () => {
    const constainer = document.getElementById('container')
    
    const div = document.createElement('div');
    const divChild = document.createElement('div');
    
    
    const dTitle = document.createElement('h3');
    const p = document.createElement('p');
    const btn = document.createElement('button');
    
    div.className = 'display'
    p.className = 'message'
    btn.className = 'btn-close'
    dTitle.className = 'd-title'
    btn.innerText = 'Cerrar'

    div.appendChild(divChild);
    div.appendChild(btn)
    divChild.appendChild(dTitle);
    divChild.appendChild(p);

    constainer.appendChild(div)
})