let gridSize = 600;

container = document.querySelector(".container")
col = document.querySelector(".col")
submitButton = document.querySelector(".submitButton")
inputField = document.querySelector(".inputField")

submitButton.addEventListener("click", createGrid)
// TODO: Add logic so that it creates a fresh sketch pad everytime submit button is pressed
function createGrid(){
    const no_of_square = inputField.value
    for (j=0; j < no_of_square; j++){
        row = document.createElement("div")
        row.classList.add("row")
        for (i=0; i < no_of_square; i++){
            grid = document.createElement("div")
            grid.classList.add("grid")
            size = `${(gridSize/no_of_square)}px`
            grid.style.width = size
            grid.style.height = size
            grid.addEventListener("mouseover", function()
                                    {
                                        console.log("Event")
                                        this.style.backgroundColor="black"})
            row.appendChild(grid)
        }
        col.appendChild(row)
    }
}
