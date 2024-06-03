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
            window.location.href = 'lr6.html'; 
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
            contentHTML = `
            <h3>Завдання № 9</h3>

            <div class="widget">
                <p>Background color: <span class="color">-</span></p>
                <button type="button" class="change-color">Change color</button>
            </div>
            `;
            break;
        case "Завдання № 10":
            window.location.href = 'lr610.html'; 
            break;
        case "ВИСНОВКИ за ЛР №6":
            window.location.href = 'lr6.html'; 
            break;
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Додаємо зміст до lab-content
    document.getElementById("lab-content").innerHTML = contentHTML;

    // Додатково додаємо обробник подій, якщо це "Завдання № 9"
    if (buttonText === "Завдання № 9") {
        // Функція для генерації випадкового кольору в форматі HEX
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        }

        // Отримуємо посилання на необхідні елементи
        const changeColorButton = document.querySelector('.change-color');
        const colorSpan = document.querySelector('.color');

        // Додаємо обробник події для кнопки
        changeColorButton.addEventListener('click', () => {
            // Генеруємо випадковий колір
            const randomColor = getRandomHexColor();

            // Змінюємо колір фону елемента body
            document.body.style.backgroundColor = randomColor;

            // Змінюємо текстовий вміст для span.color
            colorSpan.textContent = randomColor;
        });
    }
}
