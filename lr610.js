function adjustButtonSizes() {
    // Отримуємо всі кнопки
    const buttons = document.querySelectorAll(".lab-menu button");

    // Знаходимо максимальну ширину кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Встановлюємо максимальну ширину для всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displayContent(labNumber) {
    console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    switch(labNumber) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 5.1:
        case 6:
        case 7:
        case 8:
            labContent = `
                <h3>Лабораторна робота № ${labNumber}</h3>
                <p>Скористайтесь меню змісту звіту</p> 
            `;
            createSubMenu(labNumber);
            break;
        default:
            labContent = "<p>Невідомий номер лабораторної роботи.</p>";
            break;
    }

    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;
}

function createSubMenu(labNumber) {
    let menu = document.createElement("div");
    menu.className = "lab-menu";
    let infoDisplay = document.getElementById("info-display");
    infoDisplay.appendChild(menu);

    // Тут можна додати кнопки для меню змісту
    if (labNumber === 6) {
        const buttons = [
            "Постановка задачі ЛР № 6", "Завдання № 2", "Завдання № 4", 
            "Завдання № 6", "Завдання № 7", "Завдання № 8", 
            "Завдання № 9", "Завдання № 10", "ВИСНОВКИ за ЛР №6"
        ];

        buttons.forEach(buttonText => {
            const button = document.createElement("button");
            button.textContent = buttonText;
            button.onclick = () => displaySubMenuContent(buttonText);
            menu.appendChild(button);
        });

        // Викликаємо функцію для налаштування розмірів кнопок
        adjustButtonSizes();
    } else {
        window.location.href = 'index.html'; // Змініть належним чином URL
    }
}

function displaySubMenuContent(buttonText) {
    let contentHTML = "";

    switch (buttonText) {
        case "Постановка задачі ЛР № 6":
            window.location.href = 'lr61.html'; 
            break;
        case "Завдання № 2":
            window.location.href = 'lr61.html'; 
            break;
        case "Завдання № 4":
            window.location.href = 'lr64.html'; 
            break;
        case "Завдання № 6":
            window.location.href = 'lr66.html'; 
            break;
        case "Завдання № 7":
            window.location.href = 'lr67.html'; 
            break;
        case "Завдання № 8":
            window.location.href = 'lr68.html'; 
            break; 
        case "Завдання № 9":
            window.location.href = 'lr69.html';
            break;

            case "Завдання № 10":
                contentHTML = `
                    <h3>Завдання №10</h3>

                    <div id="controls">
                        <input type="number" min="1" max="100" step="1" />
                        <button type="button" data-create>Create</button>
                        <button type="button" data-destroy>Destroy</button>
                    </div>
                    <div id="boxes"></div>

                    <div>

                    <h3>Фіксація виконання завдань:</h3>

                    <p>Перше введення значень (4 елементи)</p>
                    <img src="691.jpg" alt="lr6101">
                    <br>
                    <p>Наступне введення даних (3 елементи)</p>
                    <img src="692.jpg" alt="lr6102">
                    <br>
                    <p>Використання даних менше 1</p>
                    <img src="693.jpg" alt="lr6103">
                    <br>
                    <p>Використання даних більше 100</p>
                    <img src="694.jpg" alt="lr6104">
                    <br>
                    <p>Контроль очіщення поля введення та наслідків повторного натискання create (накладанян нових елементів - змінення кольору)</p>
                    <img src="695.jpg" alt="lr6105">
                    </div>

            `;
            break;

        case "ВИСНОВКИ за ЛР №6":
            window.location.href = 'lr61.html';
            break;

            default:
                contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
                break;
        }
        document.getElementById("lab-content").innerHTML = contentHTML;
        if (buttonText === "Завдання № 10") {
            initializeTask10();
        }
    }
    
let lastInputValue; // Глобальна змінна для зберігання останнього введеного значення
let isLastCreateWithoutInput = false; // Флаг, який показує, чи було останнє натискання кнопки Create без введення нового значення в інпут

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function initializeTask10() {
    const controls = document.getElementById('controls');
    const input = controls.querySelector('input');
    const createButton = controls.querySelector('[data-create]');
    const destroyButton = controls.querySelector('[data-destroy]');

    createButton.addEventListener('click', () => {
        const inputValue = input.value.trim(); // Видаляємо зайві пробіли з початку та кінця рядка
        if (inputValue === '') {
            // Якщо інпут порожній, перевіряємо, чи було останнє натискання Create без введення нового значення
            if (isLastCreateWithoutInput) {
                replaceBoxes(lastInputValue); // Замінюємо попередні елементи новими
            }
            return;
        }
        const amount = parseInt(inputValue);
        if (amount >= 1 && amount <= 100) {
            lastInputValue = amount; // Зберігаємо останнє введене значення
            isLastCreateWithoutInput = true; // Встановлюємо прапорець, що останнє натискання Create було без введення нового значення
            createBoxes(amount);
            input.value = ''; // Очистити значення інпуту
        } else {
            alert('Please enter a number between 1 and 100');
        }
    });

    destroyButton.addEventListener('click', destroyBoxes);
}

function createBoxes(amount) {
    console.log(`Creating ${amount} boxes...`);
    const boxesContainer = document.getElementById('boxes');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor(); 
        fragment.appendChild(div);
    }
    boxesContainer.appendChild(fragment);
}

function replaceBoxes(amount) {
    console.log(`Replacing ${amount} boxes...`);
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищаємо колекцію перед заміною елементів
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor(); 
        fragment.appendChild(div);
    }
    boxesContainer.appendChild(fragment);
    console.log("Collection of boxes:", boxesContainer.children); // Виводимо колекцію елементів у консоль
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
    lastInputValue = undefined; // Скидаємо останнє введене значення при очищенні колекції
    isLastCreateWithoutInput = false; // Скидаємо прапорець про те, що останнє натискання Create було без введення нового значення
}
