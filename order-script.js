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

// // ... (остальной код) ...

// const loggedInMessage = document.getElementById("logged-in-message");

// // После успешного входа:
// function showLoggedInMessage() {
//   loggedInMessage.classList.remove("hidden");
//   modal.classList.add("hidden"); // Скрываем модальное окно
// }

// const openModalBtn = document.getElementById("open-modal-btn");
// const modal = document.getElementById("modal");
// const registerForm = document.getElementById("register-form");
// const loginForm = document.getElementById("login-form");
// const googleLoginBtn = document.getElementById("google-login-btn");
// const registerBtn = document.getElementById("register-btn");
// const loginLink = document.getElementById("login-link");

// // Открытие модального окна
// openModalBtn.addEventListener("click", () => {
//   modal.classList.remove("hidden");
//   registerForm.classList.remove("hidden"); // Показываем форму регистрации по умолчанию
// });

// // Переключение на форму входа через Google
// googleLoginBtn.addEventListener("click", () => {
//   // ... (здесь логика для входа через Google) ...
// });

// // Переключение между формами регистрации и входа
// registerBtn.addEventListener("click", () => {
//   alert("Вы зарегистрированы!"); // Замените на реальную логику регистрации
// });

// loginLink.addEventListener("click", (event) => {
//   event.preventDefault(); // Отменяем переход по ссылке
//   registerForm.classList.add("hidden");
//   loginForm.classList.remove("hidden");
// });

// // ... (получение элементов, как в предыдущем примере) ...

// // Обработка регистрации
// registerBtn.addEventListener("click", () => {
//   // ... (логика регистрации, например, отправка данных на сервер) ...
//   // После успешной регистрации:
//   alert("Вы зарегистрированы!");
//   // ... (можно добавить showLoggedInMessage() для отображения сообщения о входе) ...
// });

// // Обработка входа
// loginBtn.addEventListener("click", () => {
//   const email = loginEmailInput.value;
//   const password = loginPasswordInput.value;
//   // ... (логика проверки данных для входа, например, запрос к серверу) ...
//   // После успешного входа:
//   showLoggedInMessage();
// });

// // ... (остальной код) ...
// // ... (получение элементов, как в предыдущем примере) ...

// // Переключение на форму входа через Google
// googleLoginBtn.addEventListener("click", () => {
//   registerForm.classList.add("hidden");
//   loginForm.classList.add("hidden");
//   googleLoginForm.classList.remove("hidden");
// });

// // Обработка регистрации (имитация)
// registerBtn.addEventListener("click", () => {
//   alert("Вы зарегистрированы!");
//   showLoggedInMessage();
// });

// // Обработка входа (имитация)
// loginBtn.addEventListener("click", () => {
//   showLoggedInMessage();
// });

// ... (остальной код) ...

// ... (остальной код) ...
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCountSpan = document.getElementById("cart-count");
let cartCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
    // ... (здесь можно добавить логику добавления товара в корзину)
  });
});

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // ... (остальная логика добавления в корзину) ...

    button.textContent = "В корзине"; // Изменяем текст кнопки
    button.disabled = true; // Делаем кнопку неактивной (опционально)
  });
});

const infoButton = document.querySelector(".info-button");
const additionalInfo = document.querySelector(".additional-info");

infoButton.addEventListener("click", () => {
  if (additionalInfo.style.display === "none") {
    additionalInfo.style.display = "block"; // Показываем информацию
    infoButton.textContent = "Скрыть информацию";
  } else {
    additionalInfo.style.display = "none"; // Скрываем информацию
    infoButton.textContent = "О товаре";
  }
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
