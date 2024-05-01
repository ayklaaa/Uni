const registerModal = document.getElementById("register-modal");
const closeButtons = document.querySelectorAll(".close-button");
const googleBtn = document.querySelector(".google-btn");
const confirmBtn = document.querySelectorAll(".confirm-btn");
const loginLink = document.getElementById("login-link");

// Сразу открываем модальное окно регистрации при загрузке страницы
window.addEventListener("load", () => {
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

const registerBtn = document.getElementById("register-btn");

const loginModal = document.getElementById("login-modal");


registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    ф;
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
