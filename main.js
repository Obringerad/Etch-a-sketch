var sizeButton = document.getElementById('sizeButton');
var userInput;
let gridContainer = document.getElementById('gridContainer');

//button fuctions
    sizeButton.addEventListener('click', function(){
        userInput = parseInt(window.prompt('How many squares per side? (Up to 100)'));
        createGrid(userInput);
        gridContainer.style.setProperty('--divs-per-side', userInput);
});

function createGrid(numberOfDivs){
    gridContainer.innerHTML = ''; //clears grid

    let totalDivs = numberOfDivs * numberOfDivs;

    let itemWidth = 100 / numberOfDivs;
    let itemHeight = 100 / numberOfDivs;

    // create grid-item divs
    for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.style.width = `${itemWidth}%`;
    div.style.height = `${itemHeight}%`;
    div.addEventListener('mouseover', function() {
        div.classList.add('hovered');
    });
    gridContainer.appendChild(div);
    }
    gridContainer.style.setProperty('--divs-per-side', userInput);
}

