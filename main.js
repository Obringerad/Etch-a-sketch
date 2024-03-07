// Number of divs you want to create
const numberOfDivs = 256;

// Get the grid container element
const gridContainer = document.getElementById('gridContainer');

// Create and append divs to the grid container
for (let i = 0; i < numberOfDivs; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
}