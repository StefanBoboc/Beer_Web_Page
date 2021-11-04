//---GLUMA CU DISPARIȚIE ÎNTÂRZIATĂ---
function log(){
    let b = document.getElementById('joke');
    b.remove();
}

setTimeout(log,10000);

//---CREARE DE OBIECTE + ȘTERGEREA---
function creare(){
    var newElement = document.createElement('p');

    newElement.setAttribute('style', 'white-space: pre;');
    newElement.textContent = 'Ai intrat la secțiunea "Despre Comandă"?\r\nCeee?! Nu ți-a plăcut berea noastră?\r\nVrei banii înapoi?!!\r\n...\r\nAh... Ești doar curios...\r\nScuze! Pa Pa!';

    var gluma = document.getElementById('joke');

    gluma.appendChild(newElement);
};

creare();