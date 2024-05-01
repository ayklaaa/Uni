const quantityElement = document.getElementById("quantity");
const priceElement = document.getElementById("price");
const arrowDown = document.querySelector(".arrow-down");
const quantityButtons = document.querySelector(".quantity-buttons");
let quantity = 1;
const pricePerItem = 4400; // Цена за один товар

// // ... (код для показа/скрытия кнопок такой же, как в предыдущем примере) ...
// arrowDown.addEventListener("click", () => {
//   quantityButtons.style.display = "block"; // Показываем кнопки
// });

// // Скрываем кнопки при клике вне области кнопок
// document.addEventListener("click", (event) => {
//   if (!quantityButtons.contains(event.target)) {
//     quantityButtons.style.display = "none";
//   }
// });

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




// Получаем элементы 1
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");

// Получаем элементы 2
const modals = document.getElementById("modals");
const openModalBtnn = document.getElementById("open-modals");

// Получаем элементы 3
const modalss = document.getElementById("modalss");
const openModalBtnnq = document.getElementById("open-modalss");

// Открываем модальное окно при клике на кнопку 1
openModalBtn.onclick = function () {
  modal.style.display = "block";
};
// Открываем модальное окно при клике на кнопку 2
openModalBtnn.onclick = function () {
  modals.style.display = "block";
};
// Открываем модальное окно при клике на кнопку 3
openModalBtnnq.onclick = function () {
  modalss.style.display = "block";
};

window.onclick = function (event) {
  if (
    event.target.id === "modal" ||
    event.target.id === "modals" ||
    event.target.id === "modalss"
  ) {
    event.target.style.display = "none";
  }
};

// script.js
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsList = document.getElementById("results-list");
// Пример данных (замените на свои данные)
const data = [
  { title: "Статья 1", content: "Lorem ipsum..." },
  { title: "Статья 2", content: "Dolor sit amet..." },
  // ...
];

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm)
  );

  resultsList.innerHTML = ""; // Очищаем список результатов

  filteredData.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    resultsList.appendChild(li);
  });
});
