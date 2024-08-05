const gridContainer = document.querySelector('#gridContainer');

const buttonContainer = document.querySelector('#buttonContainer');
const setGridButton = document.querySelector('#setGrid');
const resetGridButton = document.querySelector('#resetGrid');

let containerFull = false;

setGridButton.addEventListener('click', function(){
    const rowLength = prompt('Enter rowLength (max 100)', 10);
    setGrid(rowLength);
});

resetGridButton.addEventListener('click', ()=>resetGrid(containerFull, gridContainer));

function setGrid(size)
{
    if (size <= 100)
    {
        fullGridSize = size * size
        percentage = (1/fullGridSize) * 100;

        for (let i = 1; i <= fullGridSize; i++)
        {
            const currentDiv = document.createElement('div');
            currentDiv.classList.add('colorSquare');
            currentDiv.style.cssText = `border: 1px solid black; width: ${percentage*size}%; height: ${percentage*size}`;
            gridContainer.appendChild(currentDiv);
        }
        containerFull = true;
    };
}

function resetGrid(containerFull, container){
    if (containerFull)
        {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
                }
            containerFull = false;
        }
}