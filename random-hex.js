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
document.getElementById('all').addEventListener('click', () =>{
    console.log('all is checked');
    randomColour();
    
    // btn events
    btnNewColour.addEventListener('click', randomColour);
    btnNewColour.removeEventListener('click', randomBlue);
    btnNewColour.removeEventListener('click', randomGreen);
    btnNewColour.removeEventListener('click', randomRed);
    btnNewColour.removeEventListener('click', randomYellow);
});

document.getElementById('red').addEventListener('click', () =>{
    console.log('red is checked');
    randomRed();
    
    // btn events
    btnNewColour.addEventListener('click', randomRed);
    btnNewColour.removeEventListener('click', randomBlue);
    btnNewColour.removeEventListener('click', randomGreen);
    btnNewColour.removeEventListener('click', randomColour);
    btnNewColour.removeEventListener('click', randomYellow);
});

document.getElementById('yellow').addEventListener('click', () =>{
    console.log('yellow is checked');
    randomYellow();
    
    // btn events
    btnNewColour.addEventListener('click', randomYellow);
    btnNewColour.removeEventListener('click', randomBlue);
    btnNewColour.removeEventListener('click', randomGreen);
    btnNewColour.removeEventListener('click', randomColour);
    btnNewColour.removeEventListener('click', randomRed);
});

document.getElementById('blue').addEventListener('click', () =>{
    console.log('blue is checked');
    randomBlue();
    
    // btn events
    btnNewColour.addEventListener('click', randomBlue);
    btnNewColour.removeEventListener('click', randomRed);
    btnNewColour.removeEventListener('click', randomGreen);
    btnNewColour.removeEventListener('click', randomColour);
    btnNewColour.removeEventListener('click', randomYellow);
});

document.getElementById('green').addEventListener('click', () =>{
    console.log('green is checked');
    randomGreen();
    
    // btn events
    btnNewColour.addEventListener('click', randomGreen);
    btnNewColour.removeEventListener('click', randomBlue);
    btnNewColour.removeEventListener('click', randomRed);
    btnNewColour.removeEventListener('click', randomColour);
    btnNewColour.removeEventListener('click', randomYellow);
});

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

function randomRed(){
    // select random red
    let r = Math.floor(Math.random() * (255 - 150 + 1) + 150);
    let g = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 100);
    
    rgbColour = `rgb(${r}, ${g}, ${b})`;
    hexColour = getHex(r, g, b);
    
    bg.style.backgroundColor = hexColour;
    hexOutput.innerHTML = hexColour;
    rgbOutput.innerHTML = rgbColour;
}

function randomYellow(){
    // select random yellow
    let r = 255;
    let g = Math.floor(Math.random() * (255 - 100 + 1) + 100);
    let b = Math.floor(Math.random() * 30);
    
    rgbColour = `rgb(${r}, ${g}, ${b})`;
    hexColour = getHex(r, g, b);
    
    bg.style.backgroundColor = hexColour;
    hexOutput.innerHTML = hexColour;
    rgbOutput.innerHTML = rgbColour;
}

function randomBlue(){
    // select random blue
    let r = Math.floor(Math.random() * 150);
    let g = Math.floor(Math.random() * 150);
    let b = Math.floor(Math.random() * (255 - 150 + 1) + 150);
    
    rgbColour = `rgb(${r}, ${g}, ${b})`;
    hexColour = getHex(r, g, b);
    
    bg.style.backgroundColor = hexColour;
    hexOutput.innerHTML = hexColour;
    rgbOutput.innerHTML = rgbColour;
}

function randomGreen(){
    // select random green
    let r = Math.floor(Math.random() * 150);
    let g = Math.floor(Math.random() * (255 - 150 + 1) + 150);
    let b = Math.floor(Math.random() * 150);
    
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