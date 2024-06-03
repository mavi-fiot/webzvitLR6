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
    console.log("Функція displayContent викликається lr61 з номером роботи:", labNumber);

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
        if (!document.getElementById("lab-content")) {
            console.error("Елемент lab-content не знайдено.");
            return;
        }

        let contentHTML = "";

        switch (buttonText) {
            case "Постановка задачі ЛР № 6":
                window.location.href = 'lr61.html'; 
                break;
            case "Завдання № 2":
                window.location.href = 'lr61.html'; 
                return;
            case "Завдання № 4":
                contentHTML = `
                    <h3>Завдання № 4</h3>
                    <div id="square-container">
                        <button id="decrease-btn-task4">Зменшити</button>
                        <button id="increase-btn-task4">Збільшити</button><br><br>
                        <div id="square"></div>
                    </div>            
                `;
                break;
            case "Завдання № 6":
                window.location.href = 'lr66.html'; 
                return;
            case "Завдання № 7":
                contentHTML = ``;
                break;
            case "Завдання № 8":
                contentHTML = ``;
                break;
            case "Завдання № 9":
                contentHTML = ``;
                break;
            case "Завдання № 10":
                contentHTML = ``;
                break;
            case "ВИСНОВКИ за ЛР №6":
                contentHTML = ``;
                break;
            default:
                contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
                break;
        }

        document.getElementById("lab-content").innerHTML = contentHTML;

        if (buttonText === "Завдання № 4") {
            const square = document.getElementById('square');
            const decreaseBtn = document.getElementById('decrease-btn-task4');
            const increaseBtn = document.getElementById('increase-btn-task4');

            let squareSize = 45;

            function resizeSquare(size) {
                square.style.width = `${size}px`;
                square.style.height = `${size}px`;
            }

            decreaseBtn.addEventListener('click', () => {
                squareSize = Math.max(15, squareSize - 15); // забезпечуємо мінімальний розмір
                resizeSquare(squareSize);
            });

            increaseBtn.addEventListener('click', () => {
                squareSize += 15;
                resizeSquare(squareSize);
            });
        }
    }

    
