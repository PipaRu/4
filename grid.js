const container = document.getElementById("container");

function makeRows() {
    container.style.setProperty('--grid-rows', 9);
    container.style.setProperty('--grid-cols', 9);

    let ch = false
    let words = Array("", "A", "B", "C", "D", "E", "F", "G", "H")
    for (let k = 0; k < 9; k++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.innerText = words[k];
    }
    for (let j = 0; j < 8; j++) {
        let cell = document.createElement("div");
        cell.innerText = j.toString();
        container.appendChild(cell).className = "grid-item";
        ch = !ch
        for (let i = 0; i < 8; i++) {
            let cell = document.createElement("div");
            cell.style.backgroundColor = (i % 2 === (ch ? 1 : 0)) ? "black" : "white";
            container.appendChild(cell).className = "grid-item";
        }
    }
}

makeRows();

