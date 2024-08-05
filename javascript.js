const gridContainer = document.querySelector('#gridContainer');

const buttonContainer = document.querySelector('#buttonContainer');
const setGridButton = document.querySelector('#setGrid');
const resetGridButton = document.querySelector('#resetGrid');

let containerFull = false;
let rowLength = 10;

setGridButton.addEventListener('click', function(){
    // prompting outside the function makes the function more scalable for different inputs
    rowLength = prompt('Enter rowLength (max 100)', 10);
    setGrid(rowLength);

});

resetGridButton.addEventListener('click', function(){
    resetGrid(containerFull, gridContainer);
    setGrid(rowLength);
});

function setGrid(size)
{
    if (size <= 100)
    {
        if (containerFull)
        {
            resetGrid(containerFull, gridContainer);
        }

        fullGridSize = size * size
        // Determines percentage of an individual square so the height and width of each div can be set appropriately
        percentage = (1/fullGridSize) * 100;
        sizeOfSingleSquare = percentage * size;
        for (let i = 1; i <= fullGridSize; i++)
        {
            const currentDiv = document.createElement('div');
            currentDiv.classList.add('colorSquare');
            currentDiv.style.cssText = `border: 1px solid #FB4F93; width: ${sizeOfSingleSquare}%; height: ${sizeOfSingleSquare}`;
            currentDiv.addEventListener('mouseover', () => currentDiv.style.backgroundColor = 'pink')
            gridContainer.appendChild(currentDiv);
        }
        containerFull = true;
    };
}

function resetGrid(containerFull, container){
    if (containerFull)
        {
            while (container.firstChild) 
                {
                    container.removeChild(container.firstChild);
                }
            containerFull = false;
        }
}