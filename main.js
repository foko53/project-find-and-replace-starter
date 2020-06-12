const findInput = document.querySelector(".find-input")

const replaceInput = document.querySelector(".replace-input")

const replaceAllButton = document.querySelector(".replace-all-button")

const rowElements = document.querySelectorAll(".row")

function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function () {
    let oldWord = findInput.value
    let newWord = replaceInput.value

    for (let index = 0; index < rowElements.length; index += 1) {
        let oldElement = rowElements[index]
        let cellElements = getCellElements(oldElement)

        for (let cellIndex = 0; cellIndex < cellElements.length; cellIndex += 1) {
            let curentCell = cellElements[cellIndex]
            let cellString = curentCell.innerHTML

            if (cellString.includes(oldWord)) {
                let newString = cellString.replace(oldWord, newWord)
                curentCell.innerHTML = newString

            }

        }

    }

})


