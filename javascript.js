const gridContainer = document.querySelector('#gridContainer');

const buttonContainer = document.querySelector('#buttonContainer');
const setGridButton = document.querySelector('#setGrid');
const resetGridButton = document.querySelector('#resetGrid');
const colorPicker = document.querySelector("#color-picker");
const toggleGridLineButton = document.querySelector('#toggleGridLines');
const gridDisplaySize = document.querySelector('#displaySize');

let containerFull = false;
let rowLength = 10;
let penColour = '#000000';
let gridLines = true;

// Set grid to be active at length 10x10 immediately
setGrid(10);
// Set display size on page load
gridDisplaySize.textContent = `Grid size: ${rowLength} x ${rowLength}`;

setGridButton.addEventListener('click', function(){
    // prompting outside the function makes the function more scalable for different inputs
    rowLength = prompt('Enter rowLength (max 100)', 10);
    setGrid(rowLength);

});

resetGridButton.addEventListener('click', function(){
    resetGrid(containerFull, gridContainer);
    setGrid(rowLength);
});

toggleGridLineButton.addEventListener('click', () => toggleGridLines(gridContainer));

colorPicker.addEventListener('input', () => changePenColour())
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
            currentDiv.style.borderS
            currentDiv.addEventListener('mouseover', () => currentDiv.style.backgroundColor = penColour);
            gridContainer.appendChild(currentDiv);
        }
        containerFull = true;
        // Set display size text to display size on change
        gridDisplaySize.textContent = `Grid size: ${size} x ${size}`;
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

function changePenColour()
{
    penColour = `${colorPicker.value}`;
}

function toggleGridLines(container) {
    let allChildren =  container.querySelectorAll('.colorSquare');
    if (gridLines)
    {
        allChildren.forEach((item)=> {
            item.style.border = 'none';
        });
        gridLines = false;
    }
    else
    {
        allChildren.forEach((item)=> {
            item.style.border = '1px solid #FB4F93';
        });
        gridLines = true;
    }
}