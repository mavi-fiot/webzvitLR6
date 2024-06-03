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
    console.log("Функція displayContent викликається lr66 з номером роботи:", labNumber);

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
        case 9:

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
        window.location.href = 'index.html'; 
    }
}


function displaySubMenuContent(buttonText) {
    if (!document.getElementById("lab-content")) {
        console.error("Елемент lab-content не знайдено.");
        return;
    }

    let contentHTML = "";

    switch (buttonText) {
        case "Постановка задачі ЛР № 6":
            window.location.href = 'lr6.html'; 
            break;
        case "Завдання № 2":
            window.location.href = 'lr61.html'; 
            return;
        case "Завдання № 4":
            window.location.href = 'lr64.html'; 
            break;
        case "Завдання № 6":
            contentHTML = `
                <h3>Завдання № 6</h3>
                <ul id="number-list">
                    <li>1</li>
                    <li>4</li>
                    <li>8</li>
                    <li>16</li>
                    <li>20</li>
                    <li>30</li>
                </ul>
                <button id="double-btn">Подвоїти</button>
            `;
            document.getElementById("lab-content").innerHTML = contentHTML;

            // Додаємо подію кліку на кнопку "Подвоїти"
            document.getElementById("double-btn").addEventListener("click", function() {
                const listItems = document.querySelectorAll('#number-list li');
                listItems.forEach(item => {
                    let value = parseInt(item.textContent);
                    item.textContent = value * 2;
                });
            });
            return;

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
            window.location.href = 'lr610.html'; 
            break;
        case "ВИСНОВКИ за ЛР №6":
            window.location.href = 'lr6.html'; 
            break;


        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Додаємо зміст лабораторної роботи №6 до відповідного блоку
    document.getElementById("lab-content").innerHTML = contentHTML;
}

    