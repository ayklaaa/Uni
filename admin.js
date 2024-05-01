// Получение элементов
const addTaskBtn = document.getElementById("add-task");
const editTaskBtn = document.getElementById("edit-task");
const deleteTaskBtn = document.getElementById("delete-task");
const showStatsBtn = document.getElementById("show-stats");
const taskList = document.getElementById("task-list");
const taskModal = document.getElementById("task-modal");
const statsModal = document.getElementById("stats-modal");
const closeButtons = document.querySelectorAll(".close-button");
const modalTitle = document.getElementById("modal-title");
const taskInput = document.getElementById("task-input");
const modalSaveBtn = document.getElementById("modal-save");
const statsCount = document.getElementById("stats-count");

// Хранение задач
let tasks = [];

// Функция для обновления списка задач
function updateTaskList() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task.name}`;
    taskList.appendChild(li);
  });
}

// Функции для управления модальными окнами
function openModal(modal) {
  modal.style.display = "block";
}
function closeModal(modal) {
  modal.style.display = "none";
}

// Закрытие модальных окон при клике на кнопку закрытия
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeModal(taskModal);
    closeModal(statsModal);
  });
});

// Обработка добавления задачи
addTaskBtn.addEventListener("click", () => {
  modalTitle.textContent = "Добавить задачу";
  taskInput.value = "";
  openModal(taskModal);
});

// Обработка изменения задачи
editTaskBtn.addEventListener("click", () => {
  const taskIndex = prompt("Введите номер задачи для изменения (начиная с 1):");
  if (taskIndex !== null) {
    const index = parseInt(taskIndex) - 1;
    if (index >= 0 && index < tasks.length) {
      modalTitle.textContent = "Изменить задачу";
      taskInput.value = tasks[index].name;
      openModal(taskModal);

      // Сохранение изменений при нажатии на кнопку "Сохранить"
      modalSaveBtn.onclick = () => {
        const newTaskName = taskInput.value;
        if (newTaskName) {
          tasks[index].name = newTaskName;
          updateTaskList();
          closeModal(taskModal);
        }
      };
    } else {
      alert("Неверный номер задачи.");
    }
  }
});

// Обработка удаления задачи
deleteTaskBtn.addEventListener("click", () => {
  const taskIndex = prompt("Введите номер задачи для удаления (начиная с 1):");
  if (taskIndex !== null) {
    const index = parseInt(taskIndex) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      updateTaskList();
    } else {
      alert("Неверный номер задачи.");
    }
  }
});

// Обработка показа статистики
showStatsBtn.addEventListener("click", () => {
  statsCount.textContent = tasks.length;
  openModal(statsModal);
});

// Сохранение задачи из модального окна (общая функция)
modalSaveBtn.addEventListener("click", () => {
  const taskName = taskInput.value;
  if (taskName) {
    if (modalTitle.textContent === "Добавить товар") {
      tasks.push({ name: taskName });
    }
    updateTaskList();
    closeModal(taskModal);
  }
});


// Получение элемента для выбора изображения
const taskImageInput = document.getElementById("task-image");

// ... (остальной JavaScript) ...

// Сохранение задачи из модального окна 
modalSaveBtn.addEventListener("click", () => {
  const taskName = taskInput.value;
  const imageFile = taskImageInput.files[0]; 

  if (taskName) {
    const newTask = { name: taskName };
    if (imageFile) {
      // Чтение файла изображения 
      const reader = new FileReader();
      reader.onload = (e) => {
        newTask.image = e.target.result; 
        tasks.push(newTask);
        updateTaskList();
      };
      reader.readAsDataURL(imageFile);
    } else {
      tasks.push(newTask);
      updateTaskList();
    }
    closeModal(taskModal);
  }
});


// Функция для обновления списка задач (изменена)
function updateTaskList() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${task.name}`;

    // Добавляем изображение, если оно есть
    if (task.image) {
      const img = document.createElement("img");
      img.src = task.image;
      img.alt = task.name;
      img.style.width = "150px"; // Устанавливаем размер изображения
      li.appendChild(img);
    }

    taskList.appendChild(li);
  });
}
