const quantityElement = document.getElementById("quantity");
const priceElement = document.getElementById("price");
const arrowDown = document.querySelector(".arrow-down");
const quantityButtons = document.querySelector(".quantity-buttons");
let quantity = 1;
const pricePerItem = 100; // Цена за один товар

// ... (код для показа/скрытия кнопок такой же, как в предыдущем примере) ...
arrowDown.addEventListener("click", () => {
  quantityButtons.style.display = "block"; // Показываем кнопки
});

// Скрываем кнопки при клике вне области кнопок
document.addEventListener("click", (event) => {
  if (!quantityButtons.contains(event.target)) {
    quantityButtons.style.display = "none";
  }
});




document.querySelector(".increase").addEventListener("click", () => {
  quantity++;
  quantityElement.textContent = quantity;
  updatePrice();
});

document.querySelector(".decrease").addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updatePrice();
  }
});

function updatePrice() {
  const totalPrice = quantity * pricePerItem;
  priceElement.textContent = totalPrice;
}

// Вызов функции updatePrice() при загрузке страницы
updatePrice();
