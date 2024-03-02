function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



// Функція для створення елементів та додавання їх у DOM
function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  // Очищаємо контейнер перед створенням нових елементів
  boxesContainer.innerHTML = "";
  
  const baseSize = 30; // Базовий розмір першого елемента
  const sizeIncrement = 10; // Інкремент розміру

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = baseSize + i * sizeIncrement;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

// Функція для очищення контейнера від елементів
function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const input = document.querySelector("input[type='number']");

  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value);
    // Перевіряємо, чи введене значення в межах діапазону 1-100
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ""; // Очищаємо значення input
    }
  });

  destroyButton.addEventListener("click", () => {
    destroyBoxes();
  });
});
