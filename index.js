const menuIcon = document.querySelector(".menu-icon");
const header = document.getElementById("header");
const closeBtn = document.createElement("div");

closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "&times;";
header.appendChild(closeBtn);

menuIcon.addEventListener("click", () => {
  header.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("show");
});




// // Функция для закрытия меню
// function closeHeader() {
//   header.style.display = "none";
//   submenuItems.forEach(item => {
//     item.classList.remove("active");
//     item.querySelector(".submenu").style.display = "none";
//   });
// }

// // Обработчик клика по документу
// document.addEventListener("click", (event) => {
//   // Получаем элемент headerMenu (предполагается, что у него есть ID "headerMenu")
//   const header = document.getElementById("header");

//   // Проверяем, клик был ли вне меню headerMenu и кнопки menuToggle
//   if (!header.contains(event.target) && !menuToggle.contains(event.target)) {
//     closeHeader();
//   }
// });


// ... (остальной JavaScript) ...

var notificationIcon = document.getElementById("notification-icon");
var modalNotification = document.getElementById("modal-notification");
var closeButton = document.getElementsByClassName("close")[0];

notificationIcon.addEventListener("click", function () {
  modalNotification.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modalNotification.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modalNotification) {
    modalNotification.style.display = "none";
  }
});

var deleteIcons = document.getElementsByClassName("delete-icon");

for (var i = 0; i < deleteIcons.length; i++) {
  deleteIcons[i].addEventListener("click", function () {
    this.parentNode.remove();
  });
}
// ... (остальной JavaScript) ...

const registerBtn = document.getElementById("register-btn");
const registerModal = document.getElementById("register-modal");
const loginModal = document.getElementById("login-modal");
const closeButtons = document.querySelectorAll(".close-button");
const googleBtn = document.querySelector(".google-btn");
const confirmBtn = document.querySelectorAll(".confirm-btn");
const loginLink = document.getElementById("login-link");

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    registerModal.style.display = "none";
    loginModal.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  if (event.target == registerModal || event.target == loginModal) {
    registerModal.style.display = "none";
    loginModal.style.display = "none";
  }
});

googleBtn.addEventListener("click", () => {
  // Логика для входа через Google
  registerModal.style.display = "none";
  loginModal.style.display = "block";
});

confirmBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const loginEmailInput = document.getElementById("login-email");
    const loginPasswordInput = document.getElementById("login-password");

    if (
      btn.classList.contains("confirm-btn") &&
      registerModal.style.display === "block"
    ) {
      // Регистрация
      alert("Вы зарегистрированы!");
      registerModal.style.display = "none";
    } else if (
      btn.classList.contains("confirm-btn") &&
      loginModal.style.display === "block"
    ) {
      // Вход
      if (
        loginEmailInput.value === "example@example.com" &&
        loginPasswordInput.value === "password"
      ) {
        alert("Вы вошли!");
        loginModal.style.display = "none";
      } else {
        alert("Неправильный email или пароль");
      }
    }
  });
});

loginLink.addEventListener("click", () => {
  registerModal.style.display = "none";
  loginModal.style.display = "block";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Получаем элементы 1
const modala = document.getElementById("modala");
const openModalBtna = document.getElementById("open-modala");

// Получаем элементы 2
const modals = document.getElementById("modals");
const openModalBtnn = document.getElementById("open-modals");

// Получаем элементы 3
const modalss = document.getElementById("modalss");
const openModalBtnnq = document.getElementById("open-modalss");

// Открываем модальное окно при клике на кнопку 1
openModalBtna.onclick = function () {
  modala.style.display = "block";
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
    event.target.id === "modala" ||
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
