const cardImages = document.querySelectorAll(".card-image");
const cardDetails = document.getElementById("card-details");
const cardNumberInput = document.getElementById("card-number");
const addressInput = document.getElementById("address");
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const payButton = document.getElementById("pay-button");

// Показать поля для ввода данных карты
cardImages.forEach((image) => {
  image.addEventListener("click", () => {
    cardDetails.style.display = "block";
    // ... (можно добавить логику для определения типа карты)
  });
});

// Проверка заполненности полей при клике на "Оплатить"
payButton.addEventListener("click", () => {
  let isValid = true;

  // Проверка номера карты
  if (cardNumberInput.value.trim() === "") {
    cardNumberInput.classList.add("error");
    isValid = false;
  } else {
    cardNumberInput.classList.remove("error");
  }

  // Проверка адреса
  if (addressInput.value.trim() === "") {
    addressInput.classList.add("error");
    isValid = false;
  } else {
    addressInput.classList.remove("error");
  }

  // Проверка выбора способа доставки
//   if (!Array.from(deliveryRadios).some((radio) => radio.checked)) {
//     // ... (подсветить область с выбором доставки)
//     isValid = false;
//   }


  if (isValid) {
    // ... (здесь будет логика отправки данных на сервер)
    alert("Данные отправлены!");
  } else {
    alert("Пожалуйста, заполните все обязательные поля.");
  }
});

