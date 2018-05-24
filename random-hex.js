let bg = document.getElementById('random-colour'),
    btnNewColour = document.getElementById('new-colour'),
    hexOutput = document.getElementById('random-hex'),
    colour;

randomColour();

btnNewColour.addEventListener('click', randomColour);

function randomColour(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    colour = `rgb(${r}, ${g}, ${b})`;
    bg.style.backgroundColor = colour;
    hexOutput.innerHTML = colour;
    
    console.log(colour);
}

function getHex(colour){
    // translate rgb into hex
}