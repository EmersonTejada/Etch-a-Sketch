const container = document.querySelector("#container");

const gridSize = 16;

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseenter", () => {
      square.style.background = "#333";
    });
    container.appendChild(square);
  }
}

createGrid(gridSize);

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
  let newSize = prompt("¿Cuántos cuadrados por lado? (máx: 100)");
  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Por favor ingresa un numero valido entre 1 y 100");
    return;
  }

  createGrid(newSize)
});
