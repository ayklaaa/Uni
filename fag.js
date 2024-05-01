// Массив с вопросами и ответами
const faqData = [
  {
    question: "Оплатить",
    answer:
      "Отправка заказа возможна только после полной оплаты заказа. <p> Возможна оплата банковской картой или через сервисы ЮMoney/SberPay/TinkoffPay/СБП",
  },
  {
    question: "Доставка",
    answer:
      "Доставка осуществляется Почтой России/Boxberry <p> Стоимость доставки рассчитывается автоматически при оформлении заказа.<p> При оформлении доставки Почтой России, получение заказа происходит в почтовом отделении по указанному в заказе индексу. При оформлении доставки Boxberry, получение заказа происходит в выбранном покупателем ПВЗ Boxberry.<p>Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.<p>Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.<p>Возможна ускоренная доставка курьерской службой EMS, тариф рассчитывается автоматически при оформлении заказа.<p>Для жителей Санкт-Петербурга возможен самовывоз в магазине.",
  },
  {
    question: "Отменить заказ?",
    answer:
      "Отправка заказа возможна только после полной оплаты заказа. <p> Возможна оплата банковской картой или через сервисы ЮMoney/SberPay/TinkoffPay/СБП",
  },
  {
    question: "Изменить заказ?",
    answer:
      "Доставка осуществляется Почтой России/Boxberry <p> Стоимость доставки рассчитывается автоматически при оформлении заказа.<p> При оформлении доставки Почтой России, получение заказа происходит в почтовом отделении по указанному в заказе индексу. При оформлении доставки Boxberry, получение заказа происходит в выбранном покупателем ПВЗ Boxberry.<p>Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.<p>Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.<p>Возможна ускоренная доставка курьерской службой EMS, тариф рассчитывается автоматически при оформлении заказа.<p>Для жителей Санкт-Петербурга возможен самовывоз в магазине.",
  },
  {
    question: "У меня есть промокод. Как его использовать?",
    answer:
      "Отправка заказа возможна только после полной оплаты заказа. <p> Возможна оплата банковской картой или через сервисы ЮMoney/SberPay/TinkoffPay/СБП",
  },
  {
    question: "Где мой заказ?",
    answer:
      "Доставка осуществляется Почтой России/Boxberry <p> Стоимость доставки рассчитывается автоматически при оформлении заказа.<p> При оформлении доставки Почтой России, получение заказа происходит в почтовом отделении по указанному в заказе индексу. При оформлении доставки Boxberry, получение заказа происходит в выбранном покупателем ПВЗ Boxberry.<p>Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.<p>Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.<p>Возможна ускоренная доставка курьерской службой EMS, тариф рассчитывается автоматически при оформлении заказа.<p>Для жителей Санкт-Петербурга возможен самовывоз в магазине.",
  },
  {
    question: "Как выбрать размер",
    answer:
      "Отправка заказа возможна только после полной оплаты заказа. <p> Возможна оплата банковской картой или через сервисы ЮMoney/SberPay/TinkoffPay/СБП",
  },
  {
    question: "Как ухаживать за одеждой",
    answer:
      "Доставка осуществляется Почтой России/Boxberry <p> Стоимость доставки рассчитывается автоматически при оформлении заказа.<p> При оформлении доставки Почтой России, получение заказа происходит в почтовом отделении по указанному в заказе индексу. При оформлении доставки Boxberry, получение заказа происходит в выбранном покупателем ПВЗ Boxberry.<p>Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.<p>Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.<p>Возможна ускоренная доставка курьерской службой EMS, тариф рассчитывается автоматически при оформлении заказа.<p>Для жителей Санкт-Петербурга возможен самовывоз в магазине.",
  },
  // ... другие вопросы и ответы ...
];

// Получение элемента списка FAQ
const faqList = document.getElementById("faq-list");

// Создание элементов списка
faqData.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="question">
      <span>${item.question}</span>
      <span class="toggle-button">+</span>
    </div>
    <div class="answer">${item.answer}</div>
  `;
  faqList.appendChild(li);
});

// Обработка кликов по вопросам
faqList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("toggle-button")) {
    const questionContainer = clickedElement.parentNode;
    const answerContainer = questionContainer.nextElementSibling;
    answerContainer.style.display =
      answerContainer.style.display === "block" ? "none" : "block";
    clickedElement.textContent = clickedElement.textContent === "+" ? "−" : "+";
  }
});


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
