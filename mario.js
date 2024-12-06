const heightCheck = document.getElementById("heightCheck");

const displayHeight = document.getElementById("displayHeight");

const symbol = document.getElementById("symbol");

heightCheck.addEventListener("input", () => {
    displayHeight.textContent = heightCheck.value;
    drawPyramid(heightCheck.value);
})

symbol.addEventListener("input", () => {
    drawPyramid(heightCheck.value);
})

function drawPyramid(height) {
    let brick = symbol.value;

    const element = document.getElementById("pyramid");
    element.innerHTML = "";

    for (let i = 1; i <= height; i++) {
        let rowStr = "";

        for (let a = 0; a < height - i; a++) {
            rowStr += " ";
        }

        for (let b = 0; b < i; b++) {
            rowStr += brick;
        }

        console.log(rowStr);

        const para = document.createElement("p");
        const node = document.createTextNode(rowStr);
        para.appendChild(node);

        element.appendChild(para);
    }

}