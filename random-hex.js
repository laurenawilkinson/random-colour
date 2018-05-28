let bg = document.getElementById('random-colour'),
    btnNewColour = document.getElementById('new-colour'),
    hexOutput = document.getElementById('random-hex'),
    rgbOutput = document.getElementById('random-rgb'),
    rgbColour,
    hexColour,
    colour;

randomColour();

btnNewColour.addEventListener('click', randomColour);

// insert selector queries here

function randomColour(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    rgbColour = `rgb(${r}, ${g}, ${b})`;
    hexColour = getHex(r, g, b);
    
    bg.style.backgroundColor = hexColour;
    hexOutput.innerHTML = hexColour;
    rgbOutput.innerHTML = rgbColour;
}

function toHex(colourValue){
    let hex = colourValue.toString(16);
    console.log(hex);
    
    if (hex.length === 1){
        return 0 + hex;
    }
    else{
        return hex;
    }
}

function getHex(r, g, b){
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}