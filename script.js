let gridSize = 800;

container = document.querySelector(".container")
col = document.querySelector(".col")
submitButton = document.querySelector(".submitButton")
inputField = document.querySelector(".inputField")

submitButton.addEventListener("click", createGrid)

function createGrid(){
    clearGrid();
    const no_of_square = inputField.value
    for (j=0; j < no_of_square; j++){
        row = document.createElement("div")
        row.classList.add("row")
        for (i=0; i < no_of_square; i++){
            grid = document.createElement("div")
            grid.classList.add("grid")
            size = Math.floor(gridSize/no_of_square);
            grid.style.width = `${(size)}px`
            grid.style.height = `${(size)}px`
            grid.addEventListener("mouseover", function()
                                    {
                                        console.log("Event")
                                        this.style.backgroundColor="black"})
            row.appendChild(grid)
        }
        container.appendChild(row)
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
